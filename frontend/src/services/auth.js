import api from './api';

export const login = (email, password) => {
    return api.post('/api/login/', { email, password });
};

export const register = (userData) => {
    return api.post('/api/register/', userData);
};

export const logout = () => {
    return api.post('/api/logout/');
};

export const getProfile = () => {
    return api.get('/api/profile/');
};

export const updateProfile = (userData) => {
    return api.patch('/api/profile/', userData);
};