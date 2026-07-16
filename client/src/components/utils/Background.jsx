import React from "react";

const Background = ({ children }) => {
  return (
    <>
      <span class="w-full h-full flex items-center gap-2 px-8 py-3 bg-[#101113] text-white rounded-lg bg-linear-to-t from-[#00000] to-[#353535]">
        {children}
      </span>
    </>
  );
};

export default Background;
