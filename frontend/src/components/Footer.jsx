import { scrollToPage } from "../lib/utils";
import PrimaryBtn from "./PrimaryBtn";
import { useTranslation } from "react-i18next";

export const Footer = ({ setOpenContact }) => {
  const { t } = useTranslation("contact");
  const { t: tNav } = useTranslation("navbar");

  function renderNav() {
    return (
      <div className="flex justify-center space-x-6">
        <button
          onClick={() => scrollToPage("about")}
          className="hover:text-gray-400 transition"
        >
          {tNav("listItemOne")}
        </button>
        <button
          onClick={() => scrollToPage("skills")}
          className="hover:text-gray-400 transition"
        >
          {tNav("listItemTwo")}
        </button>
        <button
          onClick={() => scrollToPage("projects")}
          className="hover:text-gray-400 transition"
        >
          {tNav("listItemThree")}
        </button>
        <button
          onClick={() => setOpenContact(true)}
          className="hover:text-gray-400 transition"
        >
          {tNav("listItemFour")}
        </button>
      </div>
    );
  }

  return (
    <section
      style={{ backgroundImage: "url(/images/background.jpg)" }}
      className="relative bg-cover"
    >
      <div className="absolute inset-0 bg-blue-300/10" />

      <div className="relative container mx-auto px-6 flex flex-col items-center text-center pt-20">
        <p className="text-4xl md:text-7xl">{t("contactTitle")}</p>

        <PrimaryBtn
          onClick={() => setOpenContact(true)}
          className="px-10 md:px-16 py-4 text-lg md:text-2xl mt-6 mb-20"
        >
          Get in touch
        </PrimaryBtn>

        {/* Footer/Nav */}
        <div className="grid md:grid-cols-3 items-center w-full text-sm md:text-xl text-black/80 py-10 border-t-2 border-primary/40">
          {/* Left */}
          <p className="md:justify-self-start">{`© ${new Date().getFullYear()} Faruk Spahic`}</p>

          {/* Center Nav */}
          {renderNav()}

          {/* Right */}
          <div className="flex justify-center md:justify-end space-x-6">
            <a
              href="https://github.com/Faruk314"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition"
            >
              GitHub
            </a>
            <a
              href="mailto:farukspahicdev@gmail.com"
              className="hover:text-gray-400 transition"
            >
              farukspahicdev@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
