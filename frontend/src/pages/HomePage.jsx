import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';

const HomePage = () => {
    const { isAuthenticated, user } = useAuth();

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <div className="flex-grow flex items-center">
                <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 w-full">
                    <div className="text-center">
                        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl mb-6">
                            File Management System
                        </h1>
                        <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500 mb-8">
                            {isAuthenticated 
                                ? `Welcome back, ${user?.username || 'User'}!` 
                                : 'Please login or register to get started'
                            }
                        </p>
                        
                        <div className="flex justify-center space-x-4 mt-8">
                            {isAuthenticated ? (
                                <>
                                    <Link
                                        to="/dashboard"
                                        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                                    >
                                        Go to Dashboard
                                    </Link>
                                    <Link
                                        to="/files"
                                        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-primary-700 bg-primary-100 hover:bg-primary-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                                    >
                                        Manage Files
                                    </Link>
                                </>
                            ) : (
                                <>
                                    <Link
                                        to="/login"
                                        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                                    >
                                        Sign In
                                    </Link>
                                    <Link
                                        to="/register"
                                        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-primary-700 bg-primary-100 hover:bg-primary-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                                    >
                                        Register
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>
                    
                    <div className="mt-16 max-w-3xl mx-auto">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">
                            {isAuthenticated ? 'Quick Actions' : 'Features'}
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {isAuthenticated ? (
                                <>
                                    <Link 
                                        to="/files/upload"
                                        className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow"
                                    >
                                        <h3 className="text-lg font-medium mb-2">Upload Files</h3>
                                        <p className="text-gray-500">Add new files to your storage</p>
                                    </Link>
                                    <Link 
                                        to="/files"
                                        className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow"
                                    >
                                        <h3 className="text-lg font-medium mb-2">View All Files</h3>
                                        <p className="text-gray-500">Manage your existing files</p>
                                    </Link>
                                    <Link 
                                        to="/profile"
                                        className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow"
                                    >
                                        <h3 className="text-lg font-medium mb-2">Update Profile</h3>
                                        <p className="text-gray-500">Edit your account information</p>
                                    </Link>
                                </>
                            ) : (
                                <>
                                    <div className="bg-white p-6 rounded-lg shadow">
                                        <h3 className="text-lg font-medium mb-2">Secure File Storage</h3>
                                        <p className="text-gray-500">Upload and manage files with encryption</p>
                                    </div>
                                    <div className="bg-white p-6 rounded-lg shadow">
                                        <h3 className="text-lg font-medium mb-2">Easy Sharing</h3>
                                        <p className="text-gray-500">Share files with colleagues or clients</p>
                                    </div>
                                    <div className="bg-white p-6 rounded-lg shadow">
                                        <h3 className="text-lg font-medium mb-2">Real-time Sync</h3>
                                        <p className="text-gray-500">Access files from anywhere</p>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            
            <footer className="bg-white py-6 border-t">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500">
                    <p>© {new Date().getFullYear()} File Management System. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default HomePage;