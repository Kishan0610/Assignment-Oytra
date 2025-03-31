const StatsCard = ({ title, value, icon, color }) => {
    const colors = {
        blue: 'bg-blue-100 text-blue-800',
        green: 'bg-green-100 text-green-800',
        purple: 'bg-purple-100 text-purple-800',
        yellow: 'bg-yellow-100 text-yellow-800',
        red: 'bg-red-100 text-red-800',
    };

    return (
        <div className="bg-white p-4 rounded-lg shadow">
            <div className="flex items-center">
                <div className={`p-3 rounded-full ${colors[color] || colors.blue}`}>
                    {icon}
                </div>
                <div className="ml-4">
                    <p className="text-sm font-medium text-gray-500">{title}</p>
                    <p className="text-2xl font-semibold text-gray-900">{value}</p>
                </div>
            </div>
        </div>
    );
};

export default StatsCard;