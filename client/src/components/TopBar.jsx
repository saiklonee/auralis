import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useParams, Link } from "react-router-dom";

const TopBar = () => {
  const { categoryId } = useParams();
  const [searchTerm, setSearchTerm] = useState("");

  const categoryNames = {
    frontend: "Frontend Engineer",
    backend: "Backend Engineer",
    fullstack: "Full Stack Development",
    devops: "DevOps",
    datascience: "Data Science",
    mobile: "Mobile Development",
  };

  const isValidCategory = categoryId && categoryNames[categoryId];

  return (
    <div className="relative w-full flex-1  flex justify-between items-center rounded-xl overflow-hidden transition-all duration-500 border-2 bg-[#212121]  border-[#353535] p-2">
      {/* Breadcrumb */}
      <div className="max-md:hidden">
        {isValidCategory ? (
          <nav className="flex text-sm text-gray-500 mb-2">
            <Link to="/" className="hover:text-gray-700">
              Dashboard
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white font-medium">
              {categoryNames[categoryId]}
            </span>
          </nav>
        ) : (
          <nav className="flex text-sm text-gray-500 mb-2">
            <Link to="/" className="hover:text-gray-700">
              Dashboard
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">
              {categoryNames[categoryId]}
            </span>
          </nav>
        )}
      </div>

      {/* page title  */}
      <div className="text-white uppercase max-md:hidden">
        {categoryNames[categoryId]}
      </div>

      {/* website name  */}
      <div className="md:hidden uppercase text-white text-center w-full text-2xl font-semibold">
        Auralis
      </div>

      {/* search bar  */}
      <div className="max-w-7xl max-md:hidden">
        <div className="flex justify-between items-center">
          <div className="relative flex ">
            <input
              type="text"
              placeholder="Search notes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-64 px-4 py-2 border border-gray-300 rounded-lg placeholder:text-white focus:ring-2  focus:border-transparent"
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2">
              <FaSearch className="text-white" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
