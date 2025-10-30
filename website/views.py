import os, requests
from django.shortcuts import render, get_object_or_404, redirect
from django.contrib import messages
from .forms import LeadForm
from django.conf import settings
from typing import Tuple, Union
from django.views.decorators.http import require_POST
import json
import datetime
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from dotenv import load_dotenv

load_dotenv()   

BOT_TOKEN = settings.TELEGRAM_BOT_TOKEN 
CHAT_ID = settings.TELEGRAM_CHAT_ID

@csrf_exempt
def send(request):
    if request.method == "POST":
        data = json.loads(request.body)

        message = f"""
🆕 <b>Yangi Mijoz - AERLUX</b>

👤 <b>Mijoz:</b> {data.get('firstName')} {data.get('lastName')}
📞 <b>Telefon:</b> {data.get('phone')}
📧 <b>Email:</b> {data.get('email')}
🏢 <b>Kompaniya:</b> {data.get('company')}

📝 <b>Loyiha:</b>
{data.get('project')}

⏰ {datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S')}
"""

        url = f"https://api.telegram.org/bot{BOT_TOKEN}/sendMessage"
        response = requests.post(url, data={
            "chat_id": CHAT_ID,
            "text": message,
            "parse_mode": "HTML"
        })

        if response.status_code == 200:
            return JsonResponse({"ok": True})
        else:
            return JsonResponse({"ok": False, "error": "Telegram API xatolik"})
    else:
        return JsonResponse({"ok": False, "error": "Method not allowed"}, status=405)

 
def send_to_telegram(
    text: str,
    chat_id: str | None = None,
    token: str | None = None,
    parse_mode: str = "HTML",
    disable_web_page_preview: bool = True,
    timeout: int = 10,
) -> Tuple[bool, Union[dict, str]]:
    """
    Telegram'ga xabar yuboradi.
    Parametrlar berilmasa, settings yoki ENV dagi qiymatlardan foydalanadi.
      - text: yuboriladigan matn
      - chat_id: (ixtiyoriy) override; berilmasa settings.TELEGRAM_CHAT_ID / ENV
      - token:   (ixtiyoriy) override; berilmasa settings.TELEGRAM_BOT_TOKEN / ENV
    Return: (ok: bool, response: dict|str)
    """
    token = token or getattr(settings, "TELEGRAM_BOT_TOKEN", "") or os.getenv("TELEGRAM_BOT_TOKEN", "")
    chat_id = chat_id or getattr(settings, "TELEGRAM_CHAT_ID", "") or os.getenv("TELEGRAM_CHAT_ID", "")
    if not token or not chat_id:
        return False, "Missing TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID"

    url = f"https://api.telegram.org/bot{token}/sendMessage"
    payload = {
        "chat_id": chat_id,
        "text": text,
        "parse_mode": parse_mode,
        "disable_web_page_preview": disable_web_page_preview,
    }

    try:
        resp = requests.post(url, json=payload, timeout=timeout)
        try:
            data = resp.json()
        except Exception:
            data = resp.text

        ok = (resp.status_code == 200) and (isinstance(data, dict) and data.get("ok") is True)
        return ok, data
    except Exception as e:
        return False, f"Request error: {e}"
    
@require_POST
def lead_submit(request):
    form = LeadForm(request.POST)
    if not form.is_valid():
        messages.error(request, "❌ Forma noto‘g‘ri to‘ldirildi. Iltimos, qayta urinib ko‘ring.")
        return redirect("home")

    lead = form.save()

    text = (
        "<b>AERLUX.UZ — yangi lead</b>\n"
        f"👤 <b>Ism:</b> {lead.name}\n"
        f"📞 <b>Telefon:</b> {lead.phone}\n"
        f"📧 <b>Email:</b> {getattr(lead, 'email', '') or '—'}\n"
        f"📌 <b>Loyiha nomi:</b> {getattr(lead, 'project_name', '—')}\n"
        f"💬 <b>Batafsil:</b> {lead.message}"
    )

    ok, resp = send_to_telegram(text)
    print("TG SEND:", ok, resp)  # diagnostika uchun

    if ok:
        messages.success(request, "✅ So‘rovingiz yuborildi! Tez orada bog‘lanamiz.")
    else:
        messages.warning(request, "ℹ️ So‘rov qabul qilindi, lekin Telegram xabari yuborilmadi.")
    return redirect("home")   


def home(request):
    return render(request, "home.html")

def forma(request):
    return render(request, "forma.html")

