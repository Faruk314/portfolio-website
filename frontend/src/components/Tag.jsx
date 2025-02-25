import React from "react";

const Tag = ({ name }) => {
  return (
    <div className="border text-[0.9rem] md:text-[1rem] shadow-md mr-2 py-[0.1rem] mt-2 border-gray-400 w-[5.5rem] flex items-center justify-center rounded-full">
      <span>{name}</span>
    </div>
  );
};

export default Tag;
