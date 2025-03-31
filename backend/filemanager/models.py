from django.db import models

# Create your models here.
from django.db import models
from users.models import CustomUser
import os

def user_directory_path(instance, filename):
    return f'user_{instance.user.id}/{filename}'

class UserFile(models.Model):
    FILE_TYPES = (
        ('PDF', 'PDF'),
        ('EXCEL', 'Excel'),
        ('TXT', 'Text'),
        ('WORD', 'Word'),
        ('OTHER', 'Other'),
    )
    
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name='files')
    file = models.FileField(upload_to=user_directory_path)
    original_filename = models.CharField(max_length=255)
    file_type = models.CharField(max_length=10, choices=FILE_TYPES)
    uploaded_at = models.DateTimeField(auto_now_add=True)
    
    def save(self, *args, **kwargs):
        if not self.original_filename:
            self.original_filename = os.path.basename(self.file.name)
        
        ext = os.path.splitext(self.file.name)[1].lower()
        if ext == '.pdf':
            self.file_type = 'PDF'
        elif ext in ['.xls', '.xlsx']:
            self.file_type = 'EXCEL'
        elif ext == '.txt':
            self.file_type = 'TXT'
        elif ext in ['.doc', '.docx']:
            self.file_type = 'WORD'
        else:
            self.file_type = 'OTHER'
            
        super().save(*args, **kwargs)
    
    def __str__(self):
        return self.original_filename