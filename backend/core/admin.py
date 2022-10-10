from django.contrib import admin
from .models import Job, Gallery

@admin.register(Job)
class ClientsAdmin(admin.ModelAdmin):

    list_display = ('id', 'title')

    fieldsets = (
        ('Dados', {'fields': ('title', 'date', 'tags', 'img')}),
    )

@admin.register(Gallery)
class ClientsAdmin(admin.ModelAdmin):

    list_display = ('id', 'job', 'order')

    fieldsets = (
        ('Dados', {'fields': ('job', 'order', 'img')}),
    )