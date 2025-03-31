import api from './api';

export const getFiles = () => {
    return api.get('/api/files/');
};

export const uploadFile = (file) => {
    const formData = new FormData();
    formData.append('file', file);
    return api.post('/api/files/upload/', formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
};

export const downloadFile = (id) => {
    return api.get(`/api/files/${id}/download/`, {
        responseType: 'blob',
        validateStatus: function (status) {
            return status < 500; 
        }
    });
};

export const getDashboardStats = () => {
    return api.get('/api/dashboard/');
};