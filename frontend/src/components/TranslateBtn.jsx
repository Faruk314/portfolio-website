import { useState } from "react";
import Translation from "./Translation";
import getUnicodeFlagIcon from "country-flag-icons/unicode";
import { useTranslation } from "react-i18next";

const TranslateBtn = () => {
  const { i18n } = useTranslation("navbar");
  const [openTranslations, setOpenTranslations] = useState(false);

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

export default TranslateBtn;
