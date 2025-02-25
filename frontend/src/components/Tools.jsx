import React from "react";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";
import classNames from "classnames";
import BackendTools from "./BackendTools";
import FrontendTools from "./FrontendTools";

const Tools = () => {
  const { t } = useTranslation("technologies");
  const {
    ref: myRef,
    inView: myElementVisible,
    entry,
  } = useInView({
    triggerOnce: true,
  });

  return (
    <div id="technologies" className="px-4 lg:px-0 py-[5rem] md:pb-[10rem]">
      <div
        className={classNames(
          "max-w-6xl md:mx-auto opacity-0 tracking-wider pb-6",
          {
            "fade-in": myElementVisible,
          }
        )}
      >
        <h2
          ref={myRef}
          className="mb-1 text-3xl text-center font-black md:mb-2 md:text-4xl"
        >
          {t("mainTitle")}
        </h2>
      </div>

      <div
        className={classNames(
          "max-w-6xl md:mx-auto text-center opacity-0 tracking-wider",
          {
            "fade-in": myElementVisible,
          }
        )}
      >
        <h2 ref={myRef} className="text-gray-600 md:text-xl">
          {t("titleOne")}
        </h2>
      </div>

      <FrontendTools />

      <div
        className={classNames(
          "max-w-6xl md:mx-auto text-center opacity-0 tracking-wider",
          {
            "fade-in": myElementVisible,
          }
        )}
      >
        <h2 ref={myRef} className="text-gray-600 md:text-xl">
          {t("titleTwo")}
        </h2>
      </div>

      <BackendTools />
    </div>
  );
};

export default Tools;
