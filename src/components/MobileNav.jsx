import React from "react";

const MobileNav = ({ scrollToPage }) => {
  return (
    <div className="absolute top-10 right-0 md:hidden">
      <div className="bg-gray-800 py-4">
        <span
          onClick={() => scrollToPage("home")}
          className="block px-4 py-2 text-white hover:bg-gray-700 hover:cursor-pointer"
        >
          Home
        </span>
        <span
          onClick={() => scrollToPage("technologies")}
          className="block px-4 py-2 text-white hover:bg-gray-700 hover:cursor-pointer"
        >
          Technologies
        </span>
        <span
          onClick={() => scrollToPage("projects")}
          className="block px-4 py-2 text-white hover:bg-gray-700 hover:cursor-pointer"
        >
          Projects
        </span>
      </div>
    </div>
  );
};

export default MobileNav;
