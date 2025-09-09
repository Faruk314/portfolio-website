import { motion } from "framer-motion";
import PrimaryBtn from "./PrimaryBtn";
import Tag from "./Tag";

export const ProjectCard = ({ isActive, card, index }) => {
  const shouldAnimate = index < 3;

  const delay = index === 0 || (index === 2 && shouldAnimate) ? 0 : 0.5;

  return (
    <motion.div
      initial={{ opacity: 0, y: 70 }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: isActive ? 1 : 0.85,
      }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="card-container my-10"
      onClick={(e) => e.currentTarget.classList.toggle("flipped")}
    >
      <div className="card">
        <img src={card.src} alt="Front" className="card-front" />
        <div className="card-back bg-gray-100 flex flex-col border border-gray-400 shadow-md">
          <div className="h-[14rem] w-full bg-primary rounded-t-3xl"></div>

          <div className="flex flex-col justify-between h-full p-6 break-keep">
            <div className="flex flex-col space-y-2">
              <h2 className="text-4xl">{card.name}</h2>
              <p className="text-xl">{card.desc}</p>

              <div className="flex flex-wrap">
                {card.technologies?.map((item) => (
                  <Tag key={item} name={item} />
                ))}
              </div>
            </div>

            <PrimaryBtn className="w-full">View live</PrimaryBtn>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
