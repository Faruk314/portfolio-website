import React from "react";

const Tag = ({ name }) => {
  return (
    <div className="border text-[0.9rem] md:text-[0.9rem] shadow-md py-[0.1rem] border-gray-400 w-[5.4rem] flex items-center justify-center rounded-full">
      <span>{name}</span>
    </div>
  );
};

export default Tag;
