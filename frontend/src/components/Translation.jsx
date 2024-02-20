import React, { useEffect, useRef } from "react";
import getUnicodeFlagIcon from "country-flag-icons/unicode";

const Translation = ({ setOpenTranslations }) => {
  const modalRef = useRef();

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setOpenTranslations(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <div className="absolute top-10 right-[-2rem] shadow-[0_3px_10px_rgb(0,0,0,0.15)] z-20 bg-white rounded-xl p-2 w-[9rem]">
      <div ref={modalRef}>
        <button className="flex space-x-2 hover:bg-gray-200 pl-3 py-2 rounded-xl w-full">
          <span>{getUnicodeFlagIcon("BA")}</span>
          <span>BiH</span>
        </button>

        <button className="flex space-x-2 hover:bg-gray-200 py-2 rounded-xl pl-3 w-full">
          <span>{getUnicodeFlagIcon("GB")}</span>
          <span>EN</span>
        </button>
      </div>
    </div>
  );
};

export default Translation;
