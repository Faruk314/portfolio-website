import React from "react";
import { AiOutlineGithub } from "react-icons/ai";

const GitButton = ({ link }) => {
  return (
    <a
      href={link}
      className="flex bg-white shadow-md border items-center w-full md:w-max justify-center px-2 py-[0.6rem] space-x-1 font-medium text-blue-500 rounded-md md:space-x-2 md:px-4 md:py-2 "
    >
      <AiOutlineGithub className="" size={20} />
      <span>GitHub</span>
    </a>
  );
};

export default GitButton;
