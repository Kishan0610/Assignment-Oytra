import RegisterForm from '../components/Auth/RegisterForm';
import { useAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';

const RegisterPage = () => {
    const { isAuthenticated } = useAuth();

    if (isAuthenticated) {
        return <Navigate to="/dashboard" />;
    }

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                    Create a new account
                </h2>
            </div>
            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <RegisterForm />
            </div>
        </div>
    );
};

export default RegisterPage;