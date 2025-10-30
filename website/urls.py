from django.urls import path
from . import views

urlpatterns = [
    path("", views.home, name="home"),
    path("forma/", views.forma, name="forma"),
    path("send", views.send, name="send"),

]