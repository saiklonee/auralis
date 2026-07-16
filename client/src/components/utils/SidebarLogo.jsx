import React from "react";

const SidebarLogo = ({ title, logoSrc }) => {
  return (
    <div className="w-full flex items-center gap-2 text-white p-2 max-md:p-0 border-2 border-[#353535] rounded-lg">
      {/* logo  */}
      <div className="w-2/10 p-2  bg-black max-md:size-full max-md:border  border-2 rounded-sm border-[#353535] ">
        <img src={logoSrc} alt="" className="object-cover" />
      </div>
      {/* title  */}
      <div className="max-md:hidden">{title}</div>
    </div>
  );
};

export default SidebarLogo;
