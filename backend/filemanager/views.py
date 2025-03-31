from rest_framework import generics, permissions, status
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import UserFile, CustomUser
from .serializers import UserFileSerializer, FileUploadSerializer
from django.db.models import Count
import os
from django.http import FileResponse
from django.core.files.storage import default_storage

class FileListView(generics.ListAPIView):
    serializer_class = UserFileSerializer
    permission_classes = [permissions.IsAuthenticated]
    
    def get_queryset(self):
        return UserFile.objects.filter(user=self.request.user).order_by('-uploaded_at')

class FileUploadView(APIView):
    permission_classes = [permissions.IsAuthenticated]
    
    def post(self, request, *args, **kwargs):
        serializer = FileUploadSerializer(data=request.data)
        if serializer.is_valid():
            file_obj = serializer.validated_data['file']
            user_file = UserFile.objects.create(
                user=request.user,
                file=file_obj,
                original_filename=file_obj.name
            )
            return Response(UserFileSerializer(user_file).data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class FileDownloadView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request, pk):
        try:
            user_file = UserFile.objects.get(pk=pk, user=request.user)
            
            if not user_file.file:
                return Response(
                    {'error': 'File not found in database record'},
                    status=status.HTTP_404_NOT_FOUND
                )
                
            if not default_storage.exists(user_file.file.name):
                return Response(
                    {'error': 'File not found in storage'},
                    status=status.HTTP_404_NOT_FOUND
                )
                
            response = FileResponse(
                default_storage.open(user_file.file.name),
                as_attachment=True,
                filename=user_file.original_filename
            )
            return response
            
        except UserFile.DoesNotExist:
            return Response(
                {'error': 'File record not found or permission denied'},
                status=status.HTTP_404_NOT_FOUND
            )
        except Exception as e:
            return Response(
                {'error': f'Server error: {str(e)}'},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )

class DashboardStatsView(APIView):
    permission_classes = [permissions.IsAuthenticated]
    
    def get(self, request):
        # Total files
        total_files = UserFile.objects.filter(user=request.user).count()
        
        # File type breakdown
        file_types = UserFile.objects.filter(user=request.user)\
            .values('file_type')\
            .annotate(count=Count('file_type'))\
            .order_by('-count')
        
        # If you want to include users stats (admin only)
        users_stats = None
        if request.user.is_superuser:
            users_stats = CustomUser.objects.annotate(file_count=Count('files')).values('username', 'file_count')
        
        return Response({
            'total_files': total_files,
            'file_types': list(file_types),
            'users_stats': users_stats
        })