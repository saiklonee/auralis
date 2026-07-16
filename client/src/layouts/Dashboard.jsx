import React from "react";
import LeftSidebar from "../components/LeftSidebar";
import { Outlet } from "react-router-dom";
import ClickSpark from "../components/utils/ClickSpark";
import TopBar from "../components/TopBar";

const Dashboard = () => {
  return (
    <ClickSpark
      sparkColor="#fff"
      sparkSize={10}
      sparkRadius={15}
      sparkCount={8}
      duration={400}
    >
      <div className="w-full h-screen bg-[#111111] overflow-hidden flex gap-2 p-2">
        {/* left side bar  */}
        <div className="relative max-md:flex-4 w-1/6 h-full rounded-xl overflow-hidden bg-[#212121] border-2 border-[#353535]">
          <LeftSidebar />
        </div>

        {/* right side area  */}
        <div className="relative w-5/6 max-md:w- h-full flex flex-col gap-2">
          <TopBar />
          <div className="relative w-full flex-14  rounded-xl overflow-hidden transition-all duration-500 border-2 bg-[#212121]  border-[#353535] p-2 max-md:p-0">
            <Outlet />
          </div>
        </div>
      </div>
    </ClickSpark>
  );
};

export default Dashboard;
