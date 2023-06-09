import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { RiGithubLine } from "react-icons/ri";
import classNames from "classnames";
import { GrGallery } from "react-icons/gr";
import Gallery from "./Gallery";

const ProjectCard = ({
  title,
  desc,
  technologies,
  gitLink,
  image,
  liveLink,
}) => {
  const {
    ref: myRef,
    inView: myElementVisible,
    entry,
  } = useInView({
    triggerOnce: true,
  });
  const [isHovering, setIsHovering] = useState(false);
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);
  const [galleryOpen, setOpenGallery] = useState(false);

  const imageCategories = {
    UnityNet: {
      images: [
        "/images/socialMediaImages/socialMedia.png",
        "/images/socialMediaImages/createPost.png",
        "/images/socialMediaImages/comments.png",
        "/images/socialMediaImages/profile.png",
        "/images/socialMediaImages/photoOpened.png",
      ],
    },
    "TicTacToe Online": {
      images: [
        "/images/ticTacImages/menu.png",
        "/images/ticTacImages/login.png",
        "/images/ticTacImages/request.png",
        "/images/ticTacImages/invite.png",
        "/images/ticTacImages/game.png",
      ],
    },
    Slagalica: {
      images: [
        "/images/slagalicaImages/menu.png",
        "/images/slagalicaImages/login.png",
        "/images/slagalicaImages/singlePlayer.png",
        "/images/slagalicaImages/invite.png",
        "/images/slagalicaImages/multiplayer.png",
        "/images/slagalicaImages/game.png",
      ],
    },
    "Fashion Flock": {
      images: [
        "/images/EcommercImages/fashionFlock.png",
        "/images/EcommercImages/register.png",
        "/images/EcommercImages/products.png",
        "/images/EcommercImages/product.png",
        "/images/EcommercImages/cart.png",
        "/images/EcommercImages/payment.png",
      ],
    },
    "Tuzla Taxi": {
      images: [
        "/images/taxiImages/tuzlaTaxi.png",
        "/images/taxiImages/app.png",
        "/images/taxiImages/contact.png",
      ],
    },
  };

  return (
    <div>
      <div className="grid lg:space-x-20 lg:grid-cols-2">
        <div
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          ref={myRef}
          className="relative"
        >
          {title && (
            <img
              id="cardImage"
              src={imageCategories[title].images[0]}
              alt=""
              className={classNames("relative h-[30rem] w-full border")}
            />
          )}
          {isHovering && (
            <div className="absolute inset-0 bg-[rgb(0,0,0,0.5)] flex justify-center items-center">
              <button
                onClick={() => {
                  setOpenGallery(true);
                }}
                className="rounded-md bg-white w-[3.2rem] h-[3rem] flex items-center justify-center"
              >
                <GrGallery size={30} className="" />
              </button>
            </div>
          )}
        </div>

        <div
          className={classNames(
            "flex flex-col justify-between p-4 md:p-10 space-y-5 shadow-[0_3px_10px_rgb(0,0,0,0.2)]",
            {
              "animate-right": myElementVisible,
            }
          )}
        >
          <div className="flex flex-col space-y-5">
            <h2 className="text-2xl font-bold md:text-3xl">{title}</h2>

            <p className="leading-7 text-sm md:text-[1rem] md:leading-loose">
              {desc}
            </p>

            <div className="flex flex-wrap gap-2">
              {technologies.map((item, index) => (
                <div
                  key={index}
                  className="p-[0.2rem] md:p-1 md:px-2 text-sm md:text-lg font-bold text-black border border-black rounded-md"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="flex space-x-2">
            {liveLink && (
              <a
                href={liveLink}
                className="flex items-center px-4 text-[0.9rem] md:text-lg py-2 space-x-1 md:space-x-2 font-medium text-white bg-gray-900 rounded-md hover:bg-gray-700"
              >
                <span className="icon">visibility</span>
                <span>Live</span>
              </a>
            )}

            {gitLink && (
              <a
                href={gitLink}
                className="flex items-center px-4 py-2 text-[0.9rem] md:text-lg space-x-1 md:space-x-2 font-medium text-black border border-black rounded-md hover:bg-gray-900 hover:text-white"
              >
                <RiGithubLine size={20} />
                <span>gitHub</span>
              </a>
            )}
          </div>
        </div>
      </div>
      {galleryOpen && (
        <Gallery
          setOpenGallery={setOpenGallery}
          images={imageCategories[title].images}
        />
      )}
    </div>
  );
};

export default ProjectCard;
