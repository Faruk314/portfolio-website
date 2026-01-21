import classNames from "classnames";
import { useInView } from "react-intersection-observer";

export const SkillItem = ({ name, icon, animationDuration, category }) => {
  const { ref: itemRef, inView: itemElementVisible } = useInView({
    triggerOnce: true,
  });

  return (
    <div
      style={{
        transitionDelay: `${animationDuration}ms`,
      }}
      ref={itemRef}
      className={classNames(
        "unselectable relative group flex flex-col items-center justify-center gap-2 md:gap-3 bg-primary rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl py-5 md:py-6 px-4 opacity-0 skill-float",
        {
          "item-fade-in": itemElementVisible,
        }
      )}
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Icon container */}
      <div className="relative z-10 flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-xl bg-white/20 backdrop-blur-sm">
        <div className="text-3xl md:text-4xl text-white">
          {icon}
        </div>
      </div>
      
      {/* Skill name */}
      <p className="relative z-10 text-base md:text-lg font-semibold text-white text-center">
        {name}
      </p>
      
      {/* Glow effect on hover */}
      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 skill-glow transition-opacity duration-300"></div>
    </div>
  );
};
