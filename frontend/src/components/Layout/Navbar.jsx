import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const Navbar = () => {
    const { user, isAuthenticated, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <nav className="bg-white shadow">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex">
                        <div className="flex-shrink-0 flex items-center">
                            <Link to="/" className="flex items-center">
                                {/* Logo image added here */}
                                <img 
                                    src="/favicon-File-Management.webp" 
                                    alt="File Management Logo"
                                    className="h-8 w-auto" // Adjust height as needed
                                />
                                {/* Optional: Keep text next to logo */}
                                <span className="text-xl font-bold text-gray-900 ml-2">
                                    FileManager
                                </span>
                            </Link>
                        </div>
                        {isAuthenticated && (
                            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                                <Link
                                    to="/dashboard"
                                    className="border-primary-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                                >
                                    Dashboard
                                </Link>
                                <Link
                                    to="/files"
                                    className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                                >
                                    Files
                                </Link>
                                <Link
                                    to="/profile"
                                    className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                                >
                                    Profile
                                </Link>
                            </div>
                        )}
                    </div>
                    <div className="hidden sm:ml-6 sm:flex sm:items-center">
                        {isAuthenticated ? (
                            <div className="flex items-center">
                                <Link
                                    to="/profile"
                                    className="text-lg text-gray-500 mr-4"
                                >
                                    Hi, {user?.username}
                                </Link>
                                <button
                                    onClick={handleLogout}
                                    className="px-3 py-1 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700"
                                >
                                    Logout
                                </button>
                            </div>
                        ) : (
                            <div className="flex space-x-4">
                                <Link
                                    to="/login"
                                    className="px-3 py-1 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700"
                                >
                                    Login
                                </Link>
                                <Link
                                    to="/register"
                                    className="px-3 py-1 border border-transparent text-sm font-medium rounded-md text-gray-700 bg-gray-100 hover:bg-gray-200"
                                >
                                    Register
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;