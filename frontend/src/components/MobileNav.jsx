import { useState } from "react";
import { Menu, X } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { scrollToPage } from "../lib/utils";
import TranslateBtn from "./TranslateBtn";
import { useTranslation } from "react-i18next";

export const MobileNav = ({ setOpenContact }) => {
  const { t } = useTranslation("navbar");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)} className="md:hidden">
        <Menu className="text-black" size={40} />
      </button>

      <div
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      />

      <nav
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } flex flex-col p-6 space-y-6`}
      >
        <div className="flex justify-end">
          <button onClick={() => setIsOpen(false)}>
            <X size={30} className="text-black" />
          </button>
        </div>

        <div className="flex flex-col items-start space-y-6 text-3xl text-black">
          <TranslateBtn />

          <div className="border h-0.5 w-full"></div>

          <button
            onClick={() => {
              scrollToPage("about");
              setIsOpen(false);
            }}
            className="hover:text-blue-500 transition-colors duration-300"
          >
            {t("listItemOne")}
          </button>

          <button
            onClick={() => {
              scrollToPage("skills");
              setIsOpen(false);
            }}
            className="hover:text-green-500 transition-colors duration-300"
          >
            {t("listItemTwo")}
          </button>

          <button
            onClick={() => {
              scrollToPage("projects");
              setIsOpen(false);
            }}
            className="hover:text-red-500 transition-colors duration-300"
          >
            {t("listItemThree")}
          </button>

          <button
            onClick={() => {
              setOpenContact(true);
              setIsOpen(false);
            }}
            className="hover:text-purple-500 transition-colors duration-300"
          >
            {t("listItemFour")}
          </button>

          <a
            href="https://github.com/Faruk314"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-500 transition-colors duration-300 flex items-center space-x-2"
          >
            <FaGithub className="h-8 w-8" />
            <span>GITHUB</span>
          </a>
        </div>
      </nav>
    </>
  );
};
