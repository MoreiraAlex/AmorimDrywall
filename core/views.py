from django.shortcuts import render
from .models import Job, Gallery

def index(request):
    jobs = Job.objects.all().order_by('-id')
    gallery = Gallery.objects.all().order_by('order')
    
    return render(request, 'index.html', {'jobs': jobs, 'photos': gallery})
