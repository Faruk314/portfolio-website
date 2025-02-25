import React from "react";
import { useInView } from "react-intersection-observer";
import classNames from "classnames";

const TechCard = ({ item, icon, animationDuration }) => {
  const {
    ref: cardRef,
    inView: cardElementVisible,
    cardEntry,
  } = useInView({
    triggerOnce: true,
  });

  return (
    <div
      style={{
        transitionDelay: `${animationDuration}ms`,
      }}
      ref={cardRef}
      className={classNames(
        "border border-gray-300 lg:w-[9rem] flex items-center justify-center py-5 md:py-6 lg:py-8 rounded-xl opacity-0",
        {
          "card-fade-in": cardElementVisible,
        }
      )}
    >
      <div className="flex flex-col items-center space-y-1 md:space-y-2">
        <span className="text-blue-600 text-3xl md:text-4xl">{icon}</span>
        <h3 className="font-medium text-[0.9rem] md:text-[1rem]">
          {item.name}
        </h3>
      </div>
    </div>
  );
};

export default TechCard;
