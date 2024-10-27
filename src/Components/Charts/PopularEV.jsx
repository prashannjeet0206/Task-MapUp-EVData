import { motion } from "framer-motion";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const PopularEV = ({ data }) => {
  const MakeCount = data.reduce((acc, car) => {
    acc[car.Make] = (acc[car.Make] || 0) + 1;
    return acc;
  }, {});

  const chartData = Object.keys(MakeCount).map((make) => ({
    make,
    count: MakeCount[make],
  }));
  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 shadow-lg rounded-xl p-6 border border-gray-700 mb-5"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <h2 className="text-lg font-medium mb-4 text-gray-100">
        Popular EV-Makes
      </h2>
      <div className="h-80">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#4B5563" />
            <XAxis dataKey="make" stroke="#9CA3AF" />
            <YAxis stroke="#9CA3AF" />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(31,41,55,0.8)",
                borderColor: "#4B5563",
              }}
              itemStyle={{ color: "#E5E7EB" }}
            />
            <Legend />
            <Bar
              dataKey="count"
              fill="rgb(75, 192, 192)"
              name="Number of EVs By Manufacturer"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default PopularEV;
