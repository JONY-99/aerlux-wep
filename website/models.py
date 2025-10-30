from django.db import models
from django.utils.text import slugify

class TimeStamped(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    class Meta:
        abstract = True

class Service(TimeStamped):
    title = models.CharField(max_length=150)
    slug  = models.SlugField(unique=True, blank=True)
    short = models.CharField(max_length=200, blank=True)
    description = models.TextField(blank=True)
    icon_emoji = models.CharField(max_length=4, default="💻")
    cover = models.ImageField(upload_to="services/", blank=True, null=True)
    is_active = models.BooleanField(default=True)

    def save(self, *args, **kwargs):
        if not self.slug: self.slug = slugify(self.title)
        super().save(*args, **kwargs)

    def __str__(self): return self.title

class Project(TimeStamped):
    title       = models.CharField(max_length=180)
    slug        = models.SlugField(unique=True, blank=True)
    client      = models.CharField(max_length=150, blank=True)
    summary     = models.CharField(max_length=240, blank=True)
    description = models.TextField(blank=True)
    url         = models.URLField(blank=True)
    cover       = models.ImageField(upload_to="projects/", blank=True, null=True)
    services    = models.ManyToManyField(Service, blank=True)
    is_featured = models.BooleanField(default=False)

    def save(self, *args, **kwargs):
        if not self.slug: self.slug = slugify(self.title)
        super().save(*args, **kwargs)

    def __str__(self): return self.title

class Testimonial(TimeStamped):
    author      = models.CharField(max_length=120)
    role        = models.CharField(max_length=120, blank=True)
    company     = models.CharField(max_length=120, blank=True)
    text        = models.TextField()
    photo       = models.ImageField(upload_to="testimonials/", blank=True, null=True)
    featured = models.BooleanField(default=False)

    def __str__(self): return f"{self.author} — {self.company}"

class BlogPost(TimeStamped):
    title        = models.CharField(max_length=180)
    slug         = models.SlugField(unique=True, blank=True)
    body         = models.TextField()
    cover        = models.ImageField(upload_to="blog/", blank=True, null=True)
    is_published = models.BooleanField(default=True)

    def save(self, *args, **kwargs):
        if not self.slug: self.slug = slugify(self.title)
        super().save(*args, **kwargs)
    def __str__(self): return self.title

class Lead(TimeStamped):
    name        = models.CharField(max_length=120)   
    phone       = models.CharField(max_length=60)        
    email       = models.EmailField(blank=True)       
    project_name= models.CharField(max_length=180)    
    message     = models.TextField()                  
    source      = models.CharField(max_length=50, default="website")
    processed   = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.name}: {self.phone} — {self.project_name}"

