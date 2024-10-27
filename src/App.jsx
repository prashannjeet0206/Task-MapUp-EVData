import { Route, Routes } from "react-router-dom";
import DashBoard from "./Components/DashBoard";
import SideBar from "./Components/SideBar";
import Papa from "papaparse";
import { useState, useEffect } from "react";
import EVRegistration from "./Components/Charts/EVRegistration";

function App() {
  const [evData, setEvData] = useState([]);

  useEffect(() => {
    Papa.parse("/Electric_Vehicle_Population_Data.csv", {
      download: true,
      header: true,
      complete: (results) => {
        setEvData(results.data);
      },
    });
  }, []);

  return (
    <div className="flex h-screen bg-gray-900 text-gray-100 overflow-hidden">
      <SideBar />
      <Routes>
        <Route path="/" element={<DashBoard data={evData} />} />
        <Route path="/bar" element={<EVRegistration />} />
      </Routes>
    </div>
  );
}

export default App;
