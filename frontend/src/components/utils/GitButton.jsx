import React from "react";
import { AiOutlineGithub } from "react-icons/ai";

const GitButton = ({ link }) => {
  return (
    <a
      href={link}
      className="flex bg-white shadow-md border items-center md:w-max justify-center px-7 py-[0.6rem] space-x-1 font-medium text-blue-500 rounded-full md:space-x-2 md:px-12 md:py-[0.65rem]"
    >
      <AiOutlineGithub className="" size={20} />
      <span>GitHub</span>
    </a>
  );
};

export default GitButton;
