import { useState } from "react";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { div } from "framer-motion/client";

const SideBar_Item = [
  { name: "DashBoard", href: "/" },
  { name: "EVMakes", href: "/bar" },
];

const SideBar = () => {
  const [isSideBarOpen, setSideBarOpen] = useState(true);
  return (
    <motion.div
      className={`transition-all duration-300 ease-in-out flex-shrink-0 ${
        isSideBarOpen ? "w-64" : "w-20"
      }`}
      animate={{ width: isSideBarOpen ? 256 : 150 }}
    >
      <div className="h-full bg-gray-800 bg-opacity-50 backdrop-blur-md p-4 flex flex-col border-r border-gray-700">
        <motion.button onClick={() => setSideBarOpen(!isSideBarOpen)}>
          <Menu size={24} />
        </motion.button>
        <nav className="mt-8 flex flex-col">
          {SideBar_Item.map((item) => (
            <div className="p-2 text-xl">
              <Link to={item.href}>{item.name}</Link>
            </div>
          ))}
        </nav>
      </div>
    </motion.div>
  );
};

export default SideBar;
