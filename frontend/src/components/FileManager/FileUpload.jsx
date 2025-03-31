import { useState } from 'react';
import { uploadFile } from '../../services/files';

const FileUpload = ({ onUpload }) => {
    const [file, setFile] = useState(null);
    const [isUploading, setIsUploading] = useState(false);
    const [error, setError] = useState('');

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!file) {
            setError('Please select a file');
            return;
        }

        setIsUploading(true);
        setError('');

        try {
            const response = await uploadFile(file);
            onUpload(response.data);
            setFile(null);
            e.target.reset();
        } catch (err) {
            setError(err.response?.data?.error || 'Upload failed');
        } finally {
            setIsUploading(false);
        }
    };

    return (
        <div className="mb-8 p-4 bg-white rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-4">Upload File</h3>
            {error && (
                <div className="mb-4 p-2 bg-red-100 text-red-700 rounded text-sm">
                    {error}
                </div>
            )}
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <input
                        type="file"
                        onChange={handleFileChange}
                        className="block w-full text-sm text-gray-500
                        file:mr-4 file:py-2 file:px-4
                        file:rounded-md file:border-0
                        file:text-sm file:font-semibold
                        file:bg-primary-50 file:text-primary-700
                        hover:file:bg-primary-100"
                    />
                </div>
                <button
                    type="submit"
                    disabled={isUploading}
                    className="px-4 py-2 bg-primary-600 text-white rounded hover:bg-primary-700 disabled:opacity-50"
                >
                    {isUploading ? 'Uploading...' : 'Upload'}
                </button>
            </form>
        </div>
    );
};

export default FileUpload;