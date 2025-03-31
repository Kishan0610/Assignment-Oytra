from django.contrib import admin

from .models import CustomUser, Address

admin.site.site_header = "User Management Admin"
admin.site.site_title = "User Management Admin Portal"

admin.site.register(CustomUser)
admin.site.register(Address)