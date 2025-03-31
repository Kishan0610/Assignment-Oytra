import { NavLink } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const Sidebar = () => {
    const { isAuthenticated } = useAuth();

    if (!isAuthenticated) return null;

    return (
        <div className="hidden md:flex md:flex-shrink-0">
            <div className="flex flex-col w-64 border-r border-gray-200 bg-white">
                <div className="h-0 flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
                    <nav className="flex-1 px-2 space-y-1">
                        <NavLink
                            to="/dashboard"
                            className={({ isActive }) => 
                                `group flex items-center px-2 py-2 text-sm font-medium rounded-md ${isActive ? 'bg-primary-50 text-primary-700' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'}`
                            }
                        >
                            Dashboard
                        </NavLink>
                        <NavLink
                            to="/files"
                            className={({ isActive }) => 
                                `group flex items-center px-2 py-2 text-sm font-medium rounded-md ${isActive ? 'bg-primary-50 text-primary-700' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'}`
                            }
                        >
                            Files
                        </NavLink>
                        <NavLink
                            to="/profile"
                            className={({ isActive }) => 
                                `group flex items-center px-2 py-2 text-sm font-medium rounded-md ${isActive ? 'bg-primary-50 text-primary-700' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'}`
                            }
                        >
                            Profile
                        </NavLink>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;