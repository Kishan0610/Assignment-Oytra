import { useState, useEffect } from 'react';
import { getAddresses, deleteAddress } from '../../services/profile';
import LoadingSpinner from '../common/LoadingSpinner';
import AddressForm from './AddressForm';

const AddressList = () => {
    const [addresses, setAddresses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [editingAddress, setEditingAddress] = useState(null);
    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
        const fetchAddresses = async () => {
            try {
                const { data } = await getAddresses();
                setAddresses(data);
            } catch (err) {
                setError('Failed to fetch addresses');
            } finally {
                setLoading(false);
            }
        };
        fetchAddresses();
    }, []);

    const handleDelete = async (id) => {
        try {
            await deleteAddress(id);
            setAddresses(addresses.filter(address => address.id !== id));
        } catch (err) {
            setError('Failed to delete address');
        }
    };

    const handleEdit = (address) => {
        setEditingAddress(address);
        setShowForm(true);
    };

    const handleAddNew = () => {
        setEditingAddress(null);
        setShowForm(true);
    };

    const handleSuccess = async () => {
        setShowForm(false);
        setEditingAddress(null);
        const { data } = await getAddresses();
        setAddresses(data);
    };

    if (loading) return <LoadingSpinner />;
    if (error) return <div className="text-red-500">{error}</div>;

    return (
        <div>
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium">Your Addresses</h3>
                <button
                    onClick={handleAddNew}
                    className="px-4 py-2 bg-primary-600 text-white rounded hover:bg-primary-700"
                >
                    Add New Address
                </button>
            </div>

            {showForm && (
                <AddressForm
                    address={editingAddress}
                    onSuccess={handleSuccess}
                    onCancel={() => setShowForm(false)}
                />
            )}

            {addresses.length === 0 ? (
                <div className="bg-white p-6 rounded-lg shadow text-center text-gray-500">
                    No addresses saved yet
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {addresses.map((address) => (
                        <div key={address.id} className="bg-white p-6 rounded-lg shadow">
                            {address.is_default && (
                                <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded mb-2">
                                    Default
                                </span>
                            )}
                            <p className="font-medium">{address.street}</p>
                            <p>{address.city}, {address.state}</p>
                            <p>{address.postal_code}, {address.country}</p>
                            <div className="mt-4 flex space-x-2">
                                <button
                                    onClick={() => handleEdit(address)}
                                    className="text-sm text-primary-600 hover:text-primary-800"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => handleDelete(address.id)}
                                    className="text-sm text-red-600 hover:text-red-800"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default AddressList;