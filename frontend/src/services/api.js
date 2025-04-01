import axios from 'axios';

const api = axios.create({
    baseURL: 'https://file-management-by-kishan.vercel.app',
});

// Set token from localStorage if it exists
const token = localStorage.getItem('token');
if (token) {
    api.defaults.headers.common['Authorization'] = `Token ${token}`;
}

export default api;