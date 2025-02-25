import React from "react";

const Logo = () => {
  return (
    <div className="rounded-full h-[3.6rem] w-[3.6rem] md:h-[4.6rem] border border-blue-600 md:w-[4.6rem] flex items-center justify-center">
      <h1 className="text-xl md:text-3xl cursor-pointer bg-blue-600 font-bold text-white border-gray-300 h-[3rem] w-[3rem] md:w-[4rem] md:h-[4rem] flex justify-center items-center rounded-full">
        <span>F</span>
        <span>S</span>
      </h1>
    </div>
  );
};

export default Logo;
