from django.contrib import admin

from .models import UserFile

admin.site.site_header = "File Manager Admin"
admin.site.site_title = "File Manager Admin Portal"

admin.site.register(UserFile)