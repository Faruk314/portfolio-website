import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Menu } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Translation from "./Translation";
import getUnicodeFlagIcon from "country-flag-icons/unicode";
import { scrollToPage } from "../lib/utils";

const Navbar = ({ setOpenContact }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [closed, setClosed] = useState(false);
  const [openTranslations, setOpenTranslations] = useState(false);
  const { i18n, t } = useTranslation("navbar");

  const toggleNav = () => {
    setIsOpen(!isOpen);
    setClosed(true);
  };

  const renderTranslateBtn = () => {
    return (
      <div className="flex items-center text-[1.09rem]">
        <div className="relative">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setOpenTranslations((prev) => !prev);
            }}
            className="flex space-x-2 mr-4 md:mr-0 hover:text-blue-500 transition-colors duration-300 text-3xl"
          >
            {i18n.language === "bs" ? (
              <>
                <span>{getUnicodeFlagIcon("BA")}</span>
                <span>BiH</span>
              </>
            ) : (
              <>
                <span>{getUnicodeFlagIcon("US")}</span>
                <span>EN</span>
              </>
            )}
          </button>

          {openTranslations && (
            <Translation setOpenTranslations={setOpenTranslations} />
          )}
        </div>
      </div>
    );
  };

  return (
    <nav className="md:bg-primary h-20 md:h-28 text-white bg-gray-100 shadow-[0_25px_40px_-12px_rgba(0,0,0,0.5)] z-20">
      <div className="container flex items-center justify-between h-full">
        <div className="text-6xl"></div>

        <div className="hidden md:flex items-center space-x-6 text-3xl cursor-pointer">
          {renderTranslateBtn()}

          <div className="border h-8"></div>

          <button
            onClick={() => scrollToPage("about")}
            className="hover:text-blue-500 transition-colors duration-300"
          >
            {t("listItemOne")}
          </button>
          <button
            onClick={() => scrollToPage("skills")}
            className="hover:text-green-500 transition-colors duration-300"
          >
            {t("listItemTwo")}
          </button>
          <button
            onClick={() => scrollToPage("projects")}
            className="hover:text-red-500 transition-colors duration-300"
          >
            {t("listItemThree")}
          </button>

          <button
            onClick={() => setOpenContact(true)}
            className="hover:text-purple-500 transition-colors duration-300"
          >
            {t("listItemFour")}
          </button>

          <a
            href="https://github.com/Faruk314"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition"
          >
            <FaGithub className="h-10 w-10" />
          </a>
        </div>

        <Menu className="text-black md:hidden" size={40} />
      </div>
    </nav>
  );
};

export default Navbar;
