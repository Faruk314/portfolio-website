import React from "react";
import { useInView } from "react-intersection-observer";
import classNames from "classnames";
import { Link, useLocation } from "react-router-dom";

const ProjectCard = ({ image, logo, id }) => {
  const location = useLocation();

  const {
    ref: myRef,
    inView: myElementVisible,
    entry,
  } = useInView({
    triggerOnce: true,
  });

  return (
    <Link to={`/project/${id}`} state={{ previousLocation: location }}>
      <div
        ref={myRef}
        className={classNames(
          "holographic-card border border-gray-300 rounded-3xl relative cursor-pointer",
          {
            "animate-zoom-in-up": myElementVisible,
          }
        )}
      >
        <div className="h-[15rem] md:h-[20rem] lg:h-[24rem]">
          <div className="flex items-center justify-center w-full object-cover h-full bg-white">
            {logo ? (
              logo
            ) : (
              <img
                className="h-[8rem] w-[8rem] md:h-[10rem] md:w-[10rem]"
                alt=""
                src={image}
              />
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
