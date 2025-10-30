from django.contrib import admin
from .models import Service, Project, Testimonial, BlogPost, Lead

@admin.register(Service)
class ServiceAdmin(admin.ModelAdmin):
    list_display = ("title","is_active","updated")
    list_filter  = ("is_active",)
    search_fields= ("title","short","description")
    prepopulated_fields = {"slug": ("title",)}

@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ("title","client","is_featured","updated")
    list_filter  = ("is_featured","services")
    search_fields= ("title","client","summary","description")
    prepopulated_fields = {"slug": ("title",)}
    filter_horizontal = ("services",)

@admin.register(Testimonial)
class TestimonialAdmin(admin.ModelAdmin):
    list_display = ("author","company","featured","updated")
    list_filter  = ("featured",)
    search_fields= ("author","company","text")

@admin.register(BlogPost)
class BlogPostAdmin(admin.ModelAdmin):
    list_display = ("title","is_published","updated")
    list_filter  = ("is_published",)
    search_fields= ("title","body")
    prepopulated_fields = {"slug": ("title",)}

@admin.register(Lead)
class LeadAdmin(admin.ModelAdmin):
    list_display = ("name","phone","email","processed","created")
    list_filter  = ("processed",)
    search_fields= ("name","phone","email","message")
