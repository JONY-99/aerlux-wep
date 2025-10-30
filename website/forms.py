from django import forms
from .models import Lead

class LeadForm(forms.ModelForm):
    class Meta:
        model = Lead
        fields = ("name","phone","email","project_name","message")
        widgets = {
            "name": forms.TextInput(attrs={"class":"inp","placeholder":"Ism Familiya"}),
            "phone": forms.TextInput(attrs={"class":"inp","placeholder":"+998 90 ..."}),
            "email": forms.EmailInput(attrs={"class":"inp","placeholder":"you@example.com"}),
            "project_name": forms.TextInput(attrs={"class":"inp","placeholder":"Loyiha nomi (masalan: Aerlux vebsayti)"}),
            "message": forms.Textarea(attrs={"class":"inp","rows":5,"placeholder":"Loyiha haqida batafsil..."}),
        }
