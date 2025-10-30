
const I18N = {
    uz: {
        slogan: "Dasturiy ta'minotda innovatsion yondashuv!",
        "nav.home": "Bosh sahifa", "nav.services": "Xizmatlar", "nav.projects": "Loyihalar", "nav.contact": "Bog'lanish",
        "hero.title": "Biz AERLUX — biznesingiz uchun kuchli raqamli yechimlar yaratamiz.",
        "hero.subtitle": "Web saytlar, Telegram botlar, web va mini-ilovalar — barchasi bir joyda. Ishonchli, tez va nafis dizayn bilan.",
        "hero.cta": "Bog'lanish", "hero.view": "Loyihalarni ko‘rish", "hero.support": "Qo‘llab-quvvatlash", "hero.quality": "Sifat kafolati",
        "services.title": "Xizmatlar", "services.subtitle": "Sizga mos to‘liq yechimlar",
        "services.web.title": "Web saytlar", "services.web.desc": "Tezkor, SEO-do‘st, zamonaviy dizaynli saytlar.",
        "services.tg.title": "Telegram botlar", "services.tg.desc": "Savdo, qo‘llab-quvvatlash va avtomatlashtirish botlari.",
        "services.webapp.title": "Web ilovalar", "services.webapp.desc": "SPA/PWA, admin panellar, mikroxizmatlar.",
        "services.mini.title": "Mini ilovalar", "services.mini.desc": "Mini-app va integratsiyalar — tez ishga tushirish.",
        "projects.title": "Loyihalar", "projects.subtitle": "So‘nggi ishlarimiz",
        "contact.title": "Bog‘lanish",
        "form.name": "Ism", "form.phone": "Telefon", "form.msg": "Xabar", "form.more": "Batafsil xabar",
        "form.submit": "Yuborish",
        "contact.findus": "Ijtimoiy tarmoqlar", "contact.text": "Yangiliklar va ishlarimizni kuzating:"
    },
    ru: {
        slogan: "Инновационный подход в разработке ПО!",
        "nav.home": "Главная", "nav.services": "Услуги", "nav.projects": "Проекты", "nav.contact": "Контакты",
        "hero.title": "Мы AERLUX — создаём мощные цифровые решения для вашего бизнеса.",
        "hero.subtitle": "Сайты, Telegram-боты, веб и мини-приложения — всё в одном месте. Надёжно, быстро, эстетично.",
        "hero.cta": "Связаться", "hero.view": "Смотреть проекты", "hero.support": "Поддержка", "hero.quality": "Гарантия качества",
        "services.title": "Услуги", "services.subtitle": "Комплексные решения под вас",
        "services.web.title": "Веб-сайты", "services.web.desc": "Быстрые, SEO-дружелюбные, с современным дизайном.",
        "services.tg.title": "Telegram-боты", "services.tg.desc": "Продажи, поддержка и автоматизация.",
        "services.webapp.title": "Веб-приложения", "services.webapp.desc": "SPA/PWA, админ-панели, микросервисы.",
        "services.mini.title": "Мини-приложения", "services.mini.desc": "Интеграции и быстрый запуск.",
        "projects.title": "Проекты", "projects.subtitle": "Наши последние работы",
        "contact.title": "Контакты",
        "form.name": "Имя", "form.phone": "Телефон", "form.msg": "Сообщение", "form.more": "Подробности",
        "form.submit": "Отправить", "form.note": "Данные формы отправятся в группу Telegram.",
        "contact.findus": "Мы в соцсетях", "contact.text": "Следите за новостями и кейсами:"
    },
    en: {
        slogan: "Innovative approach in software!",
        "nav.home": "Home", "nav.services": "Services", "nav.projects": "Projects", "nav.contact": "Contact",
        "hero.title": "We are AERLUX — building powerful digital products for your business.",
        "hero.subtitle": "Websites, Telegram bots, web & mini-apps — all in one place. Reliable, fast, and elegantly designed.",
        "hero.cta": "Contact us", "hero.view": "View projects", "hero.support": "Support", "hero.quality": "Quality assurance",
        "services.title": "Services", "services.subtitle": "End-to-end solutions",
        "services.web.title": "Websites", "services.web.desc": "Fast, SEO-friendly, modern design.",
        "services.tg.title": "Telegram bots", "services.tg.desc": "Sales, support, and automation.",
        "services.webapp.title": "Web apps", "services.webapp.desc": "SPA/PWA, admin panels, microservices.",
        "services.mini.title": "Mini apps", "services.mini.desc": "Integrations and quick launch.",
        "projects.title": "Projects", "projects.subtitle": "Latest works",
        "contact.title": "Contact",
        "form.name": "Name", "form.phone": "Phone", "form.msg": "Message", "form.more": "More details",
        "form.submit": "Send", "form.note": "On submit, data are posted to a Telegram group.",
        "contact.findus": "Socials", "contact.text": "Follow our updates and work:"
    }
};

// =========================
// Projects
// =========================
const PROJECTS = [
    {
        title: "megaparktaxi.uz 🌐", date: "2025",
        desc: { uz: "MegaPark Taxi haqida to'liq ma'lumot sayti", ru: "Полноценный сайт о MegaPark Taxi", en: "A complete website about MegaPark Taxi" },
        features: { uz: ["Telegram kanal", "Lokatsiya", "Tariflar", "Ulanish forma", "Aloqa"], ru: ["Канал Telegram", "Локация", "Тарифы", "Форма подключения", "Контакты"], en: ["Telegram channel", "Location", "Tariffs", "Join form", "Contacts"] },
        link: "https://megaparktaxi.uz"
    },
    {
        title: "@Yordamchi99bot 🚖", date: "02.03.2025",
        desc: { uz: "Haydovchi va mijozlar uchun qulay aloqa", ru: "Удобная связь для водителей и клиентов", en: "Convenient communication for drivers and clients" },
        features: { uz: ["Buyurtmalarni tezroq qabul qilish", "Xizmatni tez topish", "Tezkor aloqa"], ru: ["Быстрый приём заказов", "Быстрый поиск сервиса", "Оперативная связь"], en: ["Faster order intake", "Quick service discovery", "Instant communication"] },
        link: "https://t.me/Yordamchi99bot"
    },
    {
        title: "@week99bot 🚖", date: "16.10.2025",
        desc: { uz: "Megapark Taxi haydovchilari uchun motivatsiya va yangiliklar boti", ru: "Бот мотивации и новостей для водителей Megapark Taxi", en: "Motivation & news bot for Megapark Taxi drivers" },
        features: { uz: ["Har kuni 07:00 da motivatsiya", "@TaxiMegapark dan avtomatik yangiliklar"], ru: ["Ежедневная мотивация в 07:00", "Авто-новости из @TaxiMegapark"], en: ["Daily motivation at 07:00", "Auto news from @TaxiMegapark"] },
        link: "https://t.me/week99bot"
    }

];

// =========================
// Helpers
// =========================
const $ = (s, root = document) => root.querySelector(s);
const $$ = (s, root = document) => [...root.querySelectorAll(s)];

// ---- Intersection Observer (declare BEFORE use; no TDZ)
var _observer;
function revealInit() {
    if (_observer) _observer.disconnect();
    _observer = new IntersectionObserver((entries) => {
        for (const e of entries) { if (e.isIntersecting) { e.target.classList.add("show"); _observer.unobserve(e.target); } }
    }, { threshold: .14 });
    $$(".reveal").forEach(el => _observer.observe(el));
}

function renderProjects(lang = "uz") {
    const wrap = $("#projectsGrid");
    wrap.innerHTML = "";
    for (const p of PROJECTS) {
        const card = document.createElement("div");
        card.className = "card reveal";
        card.innerHTML = `
          <div class="corner"></div>
          <div class="proj">
            <div class="meta"><span class="pill">${p.date}</span></div>
            <h3>${p.title}</h3>
            <p style="color:var(--sub)">${p.desc[lang] || p.desc.uz}</p>
            <div class="list">
              ${(p.features[lang] || p.features.uz).map(f => `<span class="chip">${f}</span>`).join("")}
            </div>
            <a href="${p.link}" target="_blank" class="link">
              <svg viewBox="0 0 24 24" fill="none"><path d="M14 3h7v7M10 14l11-11M21 21H3V3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
              <span>Open</span>
            </a>
          </div>`;
        wrap.appendChild(card);
    }
    revealInit();
}

function setLang(lang) {
    const dict = I18N[lang] || I18N.uz;
    $$("[data-i]").forEach(el => {
        const key = el.getAttribute("data-i");
        if (dict[key]) el.textContent = dict[key];
    });
    renderProjects(lang);
    document.documentElement.lang = lang;
    localStorage.setItem("aerlux_lang", lang);
    // desktop lang buttons
    $$(".lang-inline button").forEach(b => b.classList.toggle("active", b.dataset.lang === lang));
    // mobile current label
    const langCurrent = $("#langCurrent"); if (langCurrent) langCurrent.textContent = lang.toUpperCase() + " ▾";
    document.title = (lang === "ru" ? "AERLUX — Инновационный подход в разработке ПО!"
        : lang === "en" ? "AERLUX — Innovative approach in software!"
            : "AERLUX — Dasturiy ta'minotda innovatsion yondashuv!");
}

function toggleTheme() {
    const isLight = document.documentElement.classList.toggle("light");
    localStorage.setItem("aerlux_theme", isLight ? "light" : "dark");
}

// =========================
// NAV & LANG wiring
// =========================
const burger1 = document.getElementById("burger1");
const navPanel = document.getElementById("navPanel");

burger1.addEventListener("click", () => {
    const open = navPanel.classList.toggle("open");
    burger1.classList.toggle("open", open);
    burger1.setAttribute("aria-expanded", open ? "true" : "false");
    navPanel.setAttribute("aria-hidden", open ? "false" : "true");
});


const langDropdown = $("#langDropdown");
const langCurrent = $("#langCurrent");
if (langCurrent) {
    langCurrent.addEventListener("click", (e) => {
        e.stopPropagation();
        const isOpen = langDropdown.classList.toggle("open");
        langCurrent.setAttribute("aria-expanded", isOpen ? "true" : "false");
        langDropdown.setAttribute("aria-hidden", isOpen ? "false" : "true");
    });
    document.addEventListener("click", () => langDropdown.classList.remove("open"));
}
// shared lang handlers (desktop + mobile)
$$('[data-lang]').forEach(btn => {
    btn.addEventListener("click", () => {
        const lang = btn.dataset.lang;
        setLang(lang);
        langDropdown && langDropdown.classList.remove("open");
        langCurrent && langCurrent.setAttribute("aria-expanded", "false");
    });
});

// Theme + initial state
const savedTheme = localStorage.getItem("aerlux_theme");
if (savedTheme === "light") document.documentElement.classList.add("light");
$("#themeToggle").addEventListener("click", toggleTheme);

const savedLang = localStorage.getItem("aerlux_lang") || "uz";
setLang(savedLang);
renderProjects(savedLang);
revealInit();

// Active nav highlight
const sections = ["home", "services", "projects", "contact"].map(id => document.getElementById(id));
const navLinks = $$("#menu a");
window.addEventListener("scroll", () => {
    let idx = 0; const top = window.scrollY + 140;
    for (let i = 0; i < sections.length; i++) { if (sections[i].offsetTop <= top) idx = i; }
    navLinks.forEach((a, i) => a.classList.toggle("active", i === idx));
});

// =========================
// Telegram form submission (with full URL-encoding)
// =========================
const form = $("#contactForm");
form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const btn = $("#submitBtn");
    const status = $("#formStatus");
    const lang = localStorage.getItem("aerlux_lang") || "uz";

    btn.disabled = true;
    btn.textContent = (lang === "ru" ? "Отправка..." : lang === "en" ? "Sending..." : "Yuborilmoqda...");
    status.textContent = "";

    const data = Object.fromEntries(new FormData(form).entries());
    const msgText = [
        `🆕 <b>Yangi murojaat (AERLUX)</b>`,
        `🌐 <b>Til:</b> ${lang.toUpperCase()}`,
        `👤 <b>Ism:</b> ${escapeHtml(data.name)}`,
        `📧 <b>Email:</b> ${escapeHtml(data.email)}`,
        `📞 <b>Telefon:</b> ${escapeHtml(data.phone)}`,
        `💬 <b>Xabar:</b> ${escapeHtml(data.message)}`,
        data.details ? `🗒️ <b>Batafsil:</b> ${escapeHtml(data.details)}` : ""
    ].filter(Boolean).join("\n");

    const url = `${TG_ENDPOINT}?chat_id=${encodeURIComponent(TELEGRAM_CHAT_ID)}&parse_mode=HTML&text=${encodeURIComponent(msgText)}`;

    const setOk = () => {
        status.style.color = "var(--ok)";
        status.textContent = (lang === "ru" ? "Успешно отправлено! Мы свяжемся с вами." : lang === "en" ? "Sent successfully! We will contact you." : "Muvaffaqiyatli yuborildi! Tez orada aloqaga chiqamiz.");
        form.reset();
    };
    const setErr = () => {
        status.style.color = "var(--err)";
        status.innerHTML = (lang === "ru"
            ? `Не удалось отправить. Проверьте chat_id и права бота. Или напишите нам в <a href="https://t.me/AERLUXuz" target="_blank">Telegram</a>.`
            : lang === "en"
                ? `Failed to send. Check chat_id and bot permissions. Or message us on <a href="https://t.me/AERLUXuz" target="_blank">Telegram</a>.`
                : `Yuborilmadi. chat_id va bot huquqlarini tekshiring. Yoki <a href="https://t.me/AERLUXuz" target="_blank">Telegram</a> orqali yozing.`);
    };

    try {
        const r = await fetch(url, { method: "GET" });
        const t = await r.text(); // diagnostika
        console.log("[Telegram response]", r.status, t);
        if (r.ok) { setOk(); }
        else {
            // fallback (no-cors + beacon)
            await fetch(url, { method: "GET", mode: "no-cors" });
            await new Promise(res => { const img = new Image(); img.onload = res; img.onerror = res; img.src = url; });
            setOk();
        }
    } catch (e) {
        console.error(e);
        try {
            await new Promise(res => { const img = new Image(); img.onload = res; img.onerror = res; img.src = url; });
            setOk();
        } catch (_) { setErr(); }
    } finally {
        btn.disabled = false;
        btn.textContent = I18N[lang]["form.submit"];
    }
});

function escapeHtml(s = "") { return s.replace(/[&<>"']/g, m => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[m])); }

// Subtle bg accent
document.addEventListener("scroll", () => {
    const y = Math.min(1, window.scrollY / 600);
    document.body.style.background = `linear-gradient(180deg, rgba(123,127,255,${0.04 + y * 0.08}), transparent), var(--bg)`;
}, { passive: true });



// End of main.js ===============================================================================================================================================



