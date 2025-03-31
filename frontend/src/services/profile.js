import api from './api';

export const getAddresses = () => {
    return api.get('/api/addresses/');
};

export const createAddress = (addressData) => {
    return api.post('/api/addresses/', addressData);
};

export const updateAddress = (id, addressData) => {
    return api.patch(`/api/addresses/${id}/`, addressData);
};

export const deleteAddress = (id) => {
    return api.delete(`/api/addresses/${id}/`);
};