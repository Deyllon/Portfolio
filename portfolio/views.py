from django.shortcuts import render
from .models import Video
def index(request):
    video = Video.objects.all()
    dados = {
        'videos': video
    }
    return render(request, 'index.html', dados)