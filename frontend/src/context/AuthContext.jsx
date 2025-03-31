import { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const checkAuth = async () => {
            try {
                if (token) {
                    api.defaults.headers.common['Authorization'] = `Token ${token}`;
                    const { data } = await api.get('/api/profile/');
                    setUser(data);
                    setIsAuthenticated(true);
                }
            } catch (err) {
                logout();
            } finally {
                setLoading(false);
            }
        };
        checkAuth();
    }, [token]);

    const login = async (email, password) => {
        try {
            // 1. Make login request
            const loginResponse = await api.post('/api/login/', { email, password });
            
            if (loginResponse.data.token) {
                // 2. Save token to localStorage and state
                localStorage.setItem('token', loginResponse.data.token);
                setToken(loginResponse.data.token);
                
                // 3. Set default authorization header
                api.defaults.headers.common['Authorization'] = `Token ${loginResponse.data.token}`;
                
                // 4. Get user profile with the now-authenticated request
                const profileResponse = await api.get('/api/profile/');
                
                // 5. Update state and redirect
                setUser(profileResponse.data);
                setIsAuthenticated(true);
                navigate('/dashboard');
                
                return { success: true };
            }
        } catch (err) {
            console.error('Login error:', err);
            return { 
                success: false, 
                error: err.response?.data?.error || 'Login failed' 
            };
        }
    };

    const register = async (userData) => {
        try {
            const { data } = await api.post('/api/register/', userData);
            localStorage.setItem('token', data.token);
            setToken(data.token);
            setUser(data.user);
            setIsAuthenticated(true);
            navigate('/dashboard');
            return { success: true };
        } catch (err) {
            return { success: false, error: err.response?.data || 'Registration failed' };
        }
    };

    const logout = () => {
        localStorage.removeItem('token');
        delete api.defaults.headers.common['Authorization'];
        setToken(null);
        setUser(null);
        setIsAuthenticated(false);
        navigate('/login');
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                isAuthenticated,
                loading,
                login,
                register,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);