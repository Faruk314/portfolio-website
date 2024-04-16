import classNames from "classnames";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import getUnicodeFlagIcon from "country-flag-icons/unicode";
import Translation from "./Translation";
import { useTranslation } from "react-i18next";

const Navbar = ({ setOpenContact }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [closed, setClosed] = useState(false);
  const [openTranslations, setOpenTranslations] = useState(false);
  const { i18n, t } = useTranslation("navbar");

  const currentLanguage = i18n.language || "en";

  const toggleNav = () => {
    setIsOpen(!isOpen);
    setClosed(true);
  };

  const scrollToPage = (id) => {
    const page = document.getElementById(id);
    page.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="relative z-20 text-black bg-white">
      <div className="px-4 mx-auto lg:px-8 border border-gray-200 shadow-md">
        <div className="flex items-center justify-between max-w-6xl mx-auto py-4 md:py-7">
          <h1 className="text-xl md:text-2xl cursor-pointer text-blue-600 font-bold border-[0.3rem] border-blue-600 h-[3rem] w-[3rem] md:w-[3.6rem] md:h-[3.5rem] flex justify-center items-center rounded-full">
            <span>F</span>
            <span>S</span>
          </h1>

          <div
            className={classNames(
              "absolute translate-y-[-40rem] right-0 w-full bg-white top-[5rem] md:hidden",
              {
                open: isOpen,
                close: !isOpen && closed,
              }
            )}
          >
            <div className="py-4 text-gray-700 bg-white border-b">
              <span
                onClick={() => scrollToPage("about")}
                className="block px-4 py-2 hover:bg-blue-600 hover:text-white hover:cursor-pointer"
              >
                {t("listItemOne")}
              </span>
              <span
                onClick={() => scrollToPage("technologies")}
                className="block px-4 py-2 hover:bg-blue-600 hover:text-white hover:cursor-pointer"
              >
                {t("listItemTwo")}
              </span>
              <span
                onClick={() => scrollToPage("projects")}
                className="block px-4 py-2 hover:bg-blue-600 hover:text-white hover:cursor-pointer"
              >
                {t("listItemThree")}
              </span>
              <span
                onClick={() => {
                  document.body.classList.add("no-overflow");
                  setOpenContact(true);
                }}
                className="block px-4 py-2 hover:bg-blue-600 hover:text-white hover:cursor-pointer"
              >
                {t("listItemFour")}
              </span>
            </div>
          </div>

          <div className="flex items-center text-[1.09rem]">
            <div className="relative">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setOpenTranslations((prev) => !prev);
                }}
                className="flex space-x-2 mr-4 md:mr-0 hover:text-blue-600"
              >
                {currentLanguage === "en" && (
                  <>
                    <span>{getUnicodeFlagIcon("GB")}</span>
                    <span>EN</span>
                  </>
                )}

                {currentLanguage === "ba" && (
                  <>
                    <span>{getUnicodeFlagIcon("BA")}</span>
                    <span>BiH</span>
                  </>
                )}
              </button>

              {openTranslations && (
                <Translation setOpenTranslations={setOpenTranslations} />
              )}
            </div>

            <div className="border-r-2 hidden md:block ml-5 border-gray-300 h-[1.8rem]"></div>

            <div className="items-center justify-center hidden md:flex">
              <div className="flex items-center  text-[1.09rem]">
                <span
                  onClick={() => scrollToPage("about")}
                  className="ml-5 hover:text-blue-500 hover:cursor-pointer"
                >
                  {t("listItemOne")}
                </span>
                <span
                  onClick={() => scrollToPage("technologies")}
                  className="ml-5 hover:text-blue-500 hover:cursor-pointer"
                >
                  {t("listItemTwo")}
                </span>

                <span
                  onClick={() => scrollToPage("projects")}
                  className="ml-5 hover:text-blue-500 hover:cursor-pointer"
                >
                  {t("listItemThree")}
                </span>

                <button
                  onClick={() => {
                    document.body.classList.add("no-overflow");
                    setOpenContact(true);
                  }}
                  className="flex ml-5 items-center justify-center w-full px-2 py-[0.6rem] border border-blue-500 space-x-2 font-medium text-white bg-blue-600 rounded-md md:px-4 md:py-2 hover:bg-transparent hover:text-blue-500"
                >
                  <span> {t("listItemFour")}</span>
                </button>
              </div>
            </div>

            <div
              onClick={toggleNav}
              className="p-2 bg-gray-200 rounded-md md:hidden"
            >
              {!isOpen && (
                <GiHamburgerMenu
                  className="text-blue-600 hover:cursor-pointer"
                  size={20}
                />
              )}

              {isOpen && (
                <IoMdClose
                  className="text-blue-600 hover:cursor-pointer"
                  size={20}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
