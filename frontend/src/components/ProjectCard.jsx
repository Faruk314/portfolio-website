import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { RiGithubLine } from "react-icons/ri";
import classNames from "classnames";
import { GrGallery } from "react-icons/gr";
import Gallery from "./Gallery";
import GitButton from "./utils/GitButton";

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
    ChessOnline: {
      images: [
        "/images/chessImages/game.png",
        "/images/chessImages/menu.png",
        "/images/chessImages/login.png",
        "/images/chessImages/findMatch.png",
        "/images/chessImages/friendReq.png",
        "/images/chessImages/friends.png",
        "/images/chessImages/avatar.png",
      ],
    },

    OnlineLudoGame: {
      images: [
        "/images/ludoImages/login.png",
        "/images/ludoImages/game.png",
        "/images/ludoImages/menu.png",
        "/images/ludoImages/findMatch1.png",
        "/images/ludoImages/findMatch2.png",
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
      <div
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        ref={myRef}
        className="relative"
      ></div>

      <div
        className={classNames(
          "flex flex-col justify-between p-4 md:p-10 space-y-5 shadow-[0_3px_10px_rgb(0,0,0,0.2)]",
          {}
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

        <div className="flex flex-col space-y-2 md:space-y-0 md:flex-row md:space-x-2">
          {liveLink && (
            <a
              href={liveLink}
              className="flex items-center justify-center py-[0.5rem] border-blue-500 px-4 text-[0.9rem] md:text-lg space-x-1 md:space-x-2 font-medium text-white hover:text-blue-500 bg-blue-600 rounded-md hover:bg-transparent hover:border-blue-500 border"
            >
              <span className="icon">visibility</span>
              <span>View live</span>
            </a>
          )}

          {gitLink && <GitButton />}
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
