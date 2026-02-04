import { useTranslation } from "react-i18next";
import { FaGithub } from "react-icons/fa";
import { scrollToPage } from "../lib/utils";
import TranslateBtn from "./TranslateBtn";
import { MobileNav } from "./MobileNav";

const Navbar = ({ setOpenContact }) => {
  const { t } = useTranslation("navbar");

  return (
    <nav className="md:bg-primary h-20 md:h-32 text-white bg-gray-100 z-20">
      <div className="container flex items-center justify-between h-full">
        <div className="flex items-center">
          <img 
            src="/images/logo.png" 
            alt="Logo" 
            className="h-16 md:h-24 w-auto object-contain cursor-pointer comic-logo"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          />
        </div>

        <div className="hidden md:flex items-center space-x-6 text-3xl cursor-pointer">
          <TranslateBtn />

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

        <MobileNav setOpenContact={setOpenContact} />
      </div>
    </nav>
  );
};

export default Navbar;
