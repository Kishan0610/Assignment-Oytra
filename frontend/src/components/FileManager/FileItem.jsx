import { FaFilePdf, FaFileExcel, FaFileWord, FaFileAlt, FaDownload } from 'react-icons/fa';

const FileItem = ({ file, onDownload }) => {
    const getFileIcon = () => {
        switch (file.file_type) {
            case 'PDF':
                return <FaFilePdf className="text-red-500 text-xl" />;
            case 'EXCEL':
                return <FaFileExcel className="text-green-500 text-xl" />;
            case 'WORD':
                return <FaFileWord className="text-blue-500 text-xl" />;
            case 'TXT':
                return <FaFileAlt className="text-gray-500 text-xl" />;
            default:
                return <FaFileAlt className="text-gray-400 text-xl" />;
        }
    };

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString();
    };

    return (
        <div className="px-6 py-4 flex items-center justify-between">
            <div className="flex items-center space-x-4">
                {getFileIcon()}
                <div>
                    <h4 className="text-sm font-medium text-gray-900">{file.original_filename}</h4>
                    <p className="text-xs text-gray-500">{file.file_type} • {formatDate(file.uploaded_at)}</p>
                </div>
            </div>
            <button
                onClick={() => onDownload(file.id, file.original_filename)}
                className="p-2 text-gray-500 hover:text-primary-600"
                title="Download"
            >
                <FaDownload />
            </button>
        </div>
    );
};

export default FileItem;