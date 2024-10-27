import { motion } from "framer-motion";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const TypeDistribution = ({ data }) => {
  const processedData = Array.isArray(data) ? data : [];

  const evType = processedData.reduce((acc, car) => {
    const type = car["Electric Vehicle Type"] || "Unknown";
    acc[type] = (acc[type] || 0) + 1;
    return acc;
  }, {});

  const chartData = Object.keys(evType).map((type) => ({
    name: type,
    value: evType[type],
  }));

  const COLORS = ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"];

  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 shadow-lg rounded-xl p-6 border border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <h2 className="text-lg font-medium mb-4 text-gray-100">
        EV-Type Distribution
      </h2>
      <div className="h-80">
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={chartData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={120}
              fill="#8884d8"
              label
            >
              {chartData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default TypeDistribution;
