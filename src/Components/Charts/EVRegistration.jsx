import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { motion } from "framer-motion";

const EVRegistration = ({ data }) => {
  const processedData = Array.isArray(data) ? data : [];

  const evRegistrationYear = processedData.reduce((acc, car) => {
    const year = car["Model Year"];
    if (year) {
      acc[year] = (acc[year] || 0) + 1;
    }
    return acc;
  }, {});

  const chartData = Object.keys(evRegistrationYear)
    .sort()
    .map((year) => ({
      year,
      registrations: evRegistrationYear[year],
    }));

  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 shadow-lg rounded-xl p-6 border border-gray-700 mt-10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <h2 className="text-lg font-medium mb-4 text-gray-100">
        EV Registrations Yearly
      </h2>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#4B5563" />
            <Line
              type="monotone"
              dataKey="registrations"
              stroke="#6366F1"
              strokeWidth={3}
              dot={{ fill: "#6366F1", strokeWidth: 2, r: 6 }}
              activeDot={{ r: 8, strokeWidth: 2 }}
            />
            <XAxis dataKey="year" stroke="#9ca3af" />
            <YAxis stroke="#9ca3af" />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(31,41,55,0.8)",
                borderColor: "#4B5563",
              }}
              itemStyle={{ color: "#E5E7EB" }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default EVRegistration;
