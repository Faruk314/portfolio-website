import React from "react";
import { AiOutlineGithub } from "react-icons/ai";

const GitButton = () => {
  return (
    <a
      href="https://github.com/Faruk314"
      className="flex bg-white items-center w-full md:w-max justify-center px-2 py-[0.6rem] space-x-1 font-medium text-blue-500 border border-blue-500 rounded-md md:space-x-2 md:px-4 md:py-2 "
    >
      <AiOutlineGithub className="" size={20} />
      <span>GitHub</span>
    </a>
  );
};

export default GitButton;
