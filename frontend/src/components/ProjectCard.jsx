import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Tag from "./Tag";

export const ProjectCard = ({ isActive, card, index }) => {
  const { t } = useTranslation("projects");

  const shouldAnimate = index < 3;

  const delay = index === 0 || (index === 2 && shouldAnimate) ? 0 : 0.5;

  return (
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
        <img src={card.src} alt="Front" className="card-front" />
        <div className="card-back bg-gray-100 flex flex-col shadow-md">
          <img
            alt={card.alt}
            src={card.image}
            className="h-[20rem] object-center w-full bg-primary rounded-t-[1.4rem] contrast-100"
          />

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
  );
};
