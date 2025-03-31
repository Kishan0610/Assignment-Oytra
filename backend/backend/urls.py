from django.contrib import admin
from django.urls import path, include
from rest_framework.authtoken import views
from users.views import RegisterView, LoginView, LogoutView, UserProfileView, AddressListCreateView, AddressDetailView
from filemanager.views import FileListView, FileUploadView, FileDownloadView, DashboardStatsView

from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/register/', RegisterView.as_view(), name='register'),
    path('api/login/', LoginView.as_view(), name='login'),
    path('api/logout/', LogoutView.as_view(), name='logout'),
    path('api/profile/', UserProfileView.as_view(), name='profile'),
    path('api/addresses/', AddressListCreateView.as_view(), name='address-list'),
    path('api/addresses/<int:pk>/', AddressDetailView.as_view(), name='address-detail'),
    path('api/files/', FileListView.as_view(), name='file-list'),
    path('api/files/upload/', FileUploadView.as_view(), name='file-upload'),
    path('api/files/<int:pk>/download/', FileDownloadView.as_view(), name='file-download'),
    path('api/dashboard/', DashboardStatsView.as_view(), name='dashboard-stats'),
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)