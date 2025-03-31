import { useState } from 'react';
import FileUpload from '../components/FileManager/FileUpload';
import FileList from '../components/FileManager/FileList';

const FilesPage = () => {
    const [uploadedFile, setUploadedFile] = useState(null);

    const handleUpload = (file) => {
        setUploadedFile(file);
    };

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-6">File Management</h1>
            <FileUpload onUpload={handleUpload} />
            <FileList />
        </div>
    );
};

export default FilesPage;