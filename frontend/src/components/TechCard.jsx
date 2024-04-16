import React from "react";
import { useInView } from "react-intersection-observer";
import classNames from "classnames";

const TechCard = ({ item, icon }) => {
  const {
    ref: cardRef,
    inView: cardElementVisible,
    cardEntry,
  } = useInView({
    triggerOnce: true,
  });

  return (
    <div
      ref={cardRef}
      className={classNames(
        "shadow-[0_3px_10px_rgb(0,0,0,0.15)] flex items-center justify-center py-8 rounded-xl opacity-0",
        {
          "card-fade-in": cardElementVisible,
        }
      )}
    >
      <div className="flex flex-col items-center space-y-2">
        <span className="text-blue-600">{icon}</span>
        <h3 className="font-bold">{item.name}</h3>
      </div>
    </div>
  );
};

export default TechCard;
