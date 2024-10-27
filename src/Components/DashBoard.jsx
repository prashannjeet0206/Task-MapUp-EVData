import Header from "./Header";
import { motion } from "framer-motion";
import StatCard from "./StatCard";
import { Zap } from "lucide-react";
import EVRegistration from "./Charts/EVRegistration";
import PopularEV from "./Charts/PopularEV";
import TypeDistribution from "./Charts/TypeDistribution";

const DashBoard = ({ data }) => {
  return (
    <div className="flex-1 overflow-auto m-3 relative z-10">
      <Header title={"DashBoard-EV Population Data"} />
      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        <motion.div
          className="grid grid-cols-1 gap-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCard
            name="Total Vehicles"
            icon={Zap}
            value={data.length}
            color="#6366F1"
          />
        </motion.div>
        {/* charts */}
        <div className="grid grid-cols-1 gap-8">
          <EVRegistration data={data} />
          <PopularEV data={data} />
          <TypeDistribution data={data} />
        </div>
      </main>
    </div>
  );
};

export default DashBoard;
