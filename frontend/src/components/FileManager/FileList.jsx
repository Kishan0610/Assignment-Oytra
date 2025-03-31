import { useState, useEffect } from 'react';
import { getFiles, downloadFile } from '../../services/files';
import FileItem from './FileItem';
import LoadingSpinner from '../common/LoadingSpinner';

const FileList = () => {
    const [files, setFiles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchFiles = async () => {
            try {
                const { data } = await getFiles();
                setFiles(data);
            } catch (err) {
                setError('Failed to fetch files');
            } finally {
                setLoading(false);
            }
        };
        fetchFiles();
    }, []);

    const handleDownload = async (id, filename) => {
        try {
            const response = await downloadFile(id);
            
            if (response.status === 404) {
                throw new Error(response.data?.error || 'File not found');
            }
    
            // Create download link
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', filename);
            document.body.appendChild(link);
            link.click();
            
            // Clean up
            link.remove();
            window.URL.revokeObjectURL(url);
            
        } catch (err) {
            console.error('Download failed:', err);
            setError(`Download failed: ${err.message}`);
        }
    };

    if (loading) return <LoadingSpinner />;
    if (error) return <div className="text-red-500">{error}</div>;

    return (
        <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-medium text-gray-900">Your Files</h3>
            </div>
            <div className="divide-y divide-gray-200">
                {files.length === 0 ? (
                    <div className="p-6 text-center text-gray-500">No files uploaded yet</div>
                ) : (
                    files.map((file) => (
                        <FileItem 
                            key={file.id} 
                            file={file} 
                            onDownload={handleDownload} 
                        />
                    ))
                )}
            </div>
        </div>
    );
};

export default FileList