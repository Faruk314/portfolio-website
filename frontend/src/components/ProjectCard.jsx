import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { createPortal } from "react-dom";
import { useTranslation } from "react-i18next";
import { Maximize2 } from "lucide-react";
import AFarmLogo from "../components/utils/AfarmLogo";
import Tag from "./Tag";

export const ProjectCard = ({ isActive, card, index }) => {
  const { t } = useTranslation("projects");
  const [showPreview, setShowPreview] = useState(false);

  const shouldAnimate = index < 3;

  const delay = index === 0 || (index === 2 && shouldAnimate) ? 0 : 0.5;

  const handleImageClick = (e) => {
    e.stopPropagation();
    setShowPreview(true);
  };

  const closePreview = (e) => {
    e?.stopPropagation();
    setShowPreview(false);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 70 }}
        whileInView={{
          opacity: 1,
          y: 0,
          scale: isActive ? 1 : 0.85,
          transition: {
            opacity: { duration: 0.5, delay },
            y: { duration: 0.5, delay: delay },
            scale: { duration: 0.4, delay: 0 },
          },
        }}
        viewport={{ once: true }}
        className="card-container h-[34rem] w-[20rem] md:w-[21rem] mx-auto h-[35rem] md:h-[40rem] my-10"
        onClick={(e) => e.currentTarget.classList.toggle("flipped")}
      >
        <div className="card">
          <div className="card-front bg-primary flex flex-col items-center justify-center p-8 comic-card">
            <h2 className="text-5xl font-bold text-white mb-8 comic-text">
              {card.name}
            </h2>
            <div className="flex-1 flex items-center justify-center">
              {card.name === "A-FARM" ? (
                <AFarmLogo />
              ) : (
                <img
                  src={card.logo}
                  alt={card.alt}
                  className="max-w-[250px] max-h-[250px] object-contain comic-logo"
                />
              )}
            </div>
          </div>
          <div className="card-back bg-gray-100 flex flex-col shadow-md">
            <div
              className="relative group h-[20rem] w-full rounded-t-[1.4rem] overflow-hidden cursor-pointer"
              onClick={handleImageClick}
            >
              <img
                alt={card.alt}
                src={card.image}
                className="h-full w-full object-cover object-center bg-primary contrast-100 transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                <div className="bg-white/20 backdrop-blur-md p-3 rounded-full border border-white/30 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <Maximize2 className="text-white w-6 h-6" />
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-between h-full p-4 md:p-6 break-keep border border-t-0 rounded-b-[1.4rem]">
              <div className="flex flex-col space-y-2">
                <h2 className="text-4xl font-bold">{card.name}</h2>
                <p className="text-[1.1rem] md:text-xl text-gray-600">
                  {card.desc}
                </p>

                <div className="flex flex-wrap gap-1">
                  {card.technologies?.map((item) => (
                    <Tag key={item} name={item} />
                  ))}
                </div>
              </div>

              <a
                href={card.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary shadow-lg text-2xl tracking-wide border-0 w-full font-semibold duration-200 text-white rounded-full px-12 py-[10px] md:py-3 flex items-center justify-center space-x-4 cursor-pointer hover:scale-105 transition-transform duration-300"
              >
                {t("buttonText")}
              </a>
            </div>
          </div>
        </div>
      </motion.div>

      {createPortal(
        <AnimatePresence>
          {showPreview && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closePreview}
              className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 cursor-zoom-out"
            >
              <motion.img
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                src={card.image}
                alt={card.alt}
                className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              />
              <button
                onClick={closePreview}
                className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
};
