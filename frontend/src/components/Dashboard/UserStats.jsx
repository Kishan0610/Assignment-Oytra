import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const UserStats = ({ data }) => {
    return (
        <div className="bg-white p-4 rounded-lg shadow h-80">
            <h3 className="text-lg font-medium mb-4">Files Uploaded by Users</h3>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="username" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="file_count" fill="#8884d8" name="Files" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
    
};

export default UserStats;