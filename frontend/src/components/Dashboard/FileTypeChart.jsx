import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { FaFilePdf, FaFileExcel, FaFileWord, FaFileAlt } from 'react-icons/fa';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

const FileTypeChart = ({ data }) => {
    const renderCustomizedLabel = ({ name, percent }) => {
        return `${name}: ${(percent * 100).toFixed(0)}%`;
    };

    return (
        <div className="bg-white p-4 rounded-lg shadow h-80">
            <h3 className="text-lg font-medium mb-4">File Type Distribution</h3>
            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="count"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
};

export default FileTypeChart;