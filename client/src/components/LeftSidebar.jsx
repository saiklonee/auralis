import React from "react";
import { Link, useLocation } from "react-router-dom";
import SidebarLogo from "./utils/SidebarLogo";
import {
  SiJavascript,
  SiNodedotjs,
  SiReact,
  SiPython,
  SiAndroid,
} from "react-icons/si";
import { FaAws, FaHeart, FaHome } from "react-icons/fa";

// Import icons from react-icons

const LeftSidebar = () => {
  const location = useLocation();

  const categories = [
    {
      id: "frontend",
      name: "Frontend Engineer",
      icon: <SiJavascript className="text-yellow-400 max-md:size-full" />,
    },
    {
      id: "backend",
      name: "Backend Engineer",
      icon: <SiNodedotjs className="text-green-500 max-md:size-full" />,
    },
    {
      id: "fullstack",
      name: "Full Stack",
      icon: <SiReact className="text-blue-400 max-md:size-full" />,
    },
    {
      id: "devops",
      name: "DevOps",
      icon: <FaAws className="text-orange-500 max-md:size-full" />,
    },
    {
      id: "datascience",
      name: "Data Science",
      icon: <SiPython className="text-blue-500 max-md:size-full" />,
    },
    {
      id: "mobile",
      name: "Mobile Development",
      icon: <SiAndroid className="text-green-400 max-md:size-full" />,
    },
  ];

  const isActive = (path) => {
    return location.pathname === `/category/${path}`;
  };

  return (
    <div className="size-full p-2 antialiased overflow-hidden flex flex-col gap-4">
      <SidebarLogo title="Auralis" logoSrc="/logos/auralis-svg-logo.svg" />

      <div className=" flex flex-col justify-between h-full">
        <div className="flex flex-col gap-4">
          <Link
            to="/"
            className={`flex items-center px-2 py-2 rounded-lg transition-all duration-200  ${
              location.pathname === "/"
                ? "bg-[#353535] text-white shadow-lg"
                : "text-gray-300 hover:bg-[#353535]/50 hover:text-white"
            }`}
          >
            <FaHome className="mr-3 max-md:mr-0 max-md:size-full text-sm" />
            <span className="max-md:hidden">Dashboard</span>
          </Link>

          <div className="max-md:border-t-2 max-md:border-[#353535] max-md:pt-2">
            <h3 className="px-2 text-xs font-semibold text-gray-400 uppercase tracking-wider max-md:hidden">
              Categories
            </h3>
            <div className="mt-2 space-y-1">
              {categories.map((category) => (
                <Link
                  key={category.id}
                  to={`/category/${category.id}`}
                  className={`flex items-center px-2 py-2 rounded-lg transition-all duration-200 group ${
                    isActive(category.id)
                      ? "bg-[#353535] text-white shadow-lg"
                      : "text-[#dadada] hover:bg-[#353535]/50 hover:text-white"
                  }`}
                >
                  <span className="mr-3 max-md:mr-0 max-md:size-full   text-xs transition-transform duration-200 group-hover:scale-110">
                    {category.icon}
                  </span>
                  <span className="max-md:hidden">{category.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t-2 border-[#353535] max-md:hidden">
          <div className="text-center text-gray-400 text-sm flex items-center justify-center">
            Made with <FaHeart className="mx-1 text-red-500" /> by Sai
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
