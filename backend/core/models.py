from django.db import models

class Job(models.Model):
    class Meta: 
        verbose_name = "Trabalho"
        verbose_name_plural = "Trabalhos"

    title = models.CharField(max_length=255, default='')
    tags = models.TextField(default='')
    date = models.DateField(default='')
    img = models.ImageField(upload_to='static/media', default='')

    def __str__(self):
        return (str(self.title))


class Gallery(models.Model):
    class Meta: 
        verbose_name = "Galeria"
        verbose_name_plural = "Galeria"

    job = models.ForeignKey(Job, on_delete=models.CASCADE, default='')
    order = models.IntegerField(default=1) 
    img = models.ImageField(upload_to='static/media', default='')

    def __str__(self):
        return (str(self.job))