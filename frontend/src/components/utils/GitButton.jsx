import React from "react";
import { AiOutlineGithub } from "react-icons/ai";

const GitButton = ({ link }) => {
  return (
    <a
      href={link}
      className="bg-[#2b6faf] flex items-center duration-200 justify-center px-7 px-2 py-[0.6rem] space-x-2 font-black text-white rounded-full md:px-12 md:py-3 text-xl"
    >
      <AiOutlineGithub className="" size={20} />
      <span>GITHUB</span>
    </a>
  );
};

export default GitButton;
