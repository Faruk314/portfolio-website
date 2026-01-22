import React, { useEffect, useRef } from "react";
import getUnicodeFlagIcon from "country-flag-icons/unicode";
import { useTranslation } from "react-i18next";
import classNames from "classnames";

const Translation = ({ setOpenTranslations }) => {
  const { i18n } = useTranslation("common");
  const currentLanguage = i18n.language;
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
  }, [setOpenTranslations]);

  return (
    <div
      className="absolute top-12 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-auto md:right-0 w-40 bg-white rounded-2xl shadow-lg p-2 text-black 
             border border-gray-100 animate-fadeIn z-50"
    >
      <div ref={modalRef} className="flex flex-col gap-1">
        <button
          onClick={() => i18n.changeLanguage("bs")}
          className={classNames(
            "flex items-center gap-3 px-3 py-1 rounded-lg transition-colors duration-200",
            "hover:bg-gray-100",
            {
              "text-primary bg-gray-100": currentLanguage === "bs",
            }
          )}
        >
          <span className="text-lg">{getUnicodeFlagIcon("BA")}</span>
          <span className="font-medium">BiH</span>
        </button>

        <button
          onClick={() => i18n.changeLanguage("en")}
          className={classNames(
            "flex items-center gap-3 px-3 py-1 rounded-lg transition-colors duration-200",
            "hover:bg-gray-100",
            {
              "text-primary bg-gray-100": currentLanguage === "en",
            }
          )}
        >
          <span className="text-lg">{getUnicodeFlagIcon("US")}</span>
          <span className="font-medium">EN</span>
        </button>
      </div>
    </div>
  );
};

export default Translation;
