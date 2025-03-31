import { useState, useEffect } from 'react';
import { getDashboardStats } from '../services/files';
import StatsCard from '../components/Dashboard/StatsCard';
import FileTypeChart from '../components/Dashboard/FileTypeChart';
import UserStats from '../components/Dashboard/UserStats';
import LoadingSpinner from '../components/common/LoadingSpinner';
import { FaFile, FaFilePdf, FaFileExcel, FaFileWord, FaFileAlt } from 'react-icons/fa';

const DashboardPage = () => {
    const [stats, setStats] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const { data } = await getDashboardStats();
                setStats(data);
            } catch (err) {
                setError('Failed to fetch dashboard stats');
            } finally {
                setLoading(false);
            }
        };
        fetchStats();
    }, []);

    if (loading) return <LoadingSpinner />;
    if (error) return <div className="text-red-500">{error}</div>;

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                <StatsCard
                    title="Total Files"
                    value={stats.total_files}
                    icon={<FaFile className="text-xl" />}
                    color="blue"
                />
                {stats.file_types.map((type) => (
                    <StatsCard
                        key={type.file_type}
                        title={`${type.file_type} Files`}
                        value={type.count}
                        icon={
                            type.file_type === 'PDF' ? <FaFilePdf className="text-xl" /> :
                            type.file_type === 'EXCEL' ? <FaFileExcel className="text-xl" /> :
                            type.file_type === 'WORD' ? <FaFileWord className="text-xl" /> :
                            <FaFileAlt className="text-xl" />
                        }
                        color={
                            type.file_type === 'PDF' ? 'red' :
                            type.file_type === 'EXCEL' ? 'green' :
                            type.file_type === 'WORD' ? 'blue' : 'purple'
                        }
                    />
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                <FileTypeChart data={stats.file_types} />
                {stats.users_stats && <UserStats data={stats.users_stats} />}
            </div>
        </div>
    );
};

export default DashboardPage;