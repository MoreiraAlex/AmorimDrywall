from django.shortcuts import render
from .models import Job, Gallery

from django.conf import settings

def index(request):
    jobs = Job.objects.all().order_by('-id')
    gallery = Gallery.objects.all().order_by('order')
    debug = settings.DEBUG
    
    return render(request, 'index.html', {'jobs': jobs, 'photos': gallery, 'debug': debug})
