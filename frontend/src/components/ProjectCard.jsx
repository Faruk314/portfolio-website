import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import classNames from "classnames";
import Gallery from "./Gallery";
import { TbListDetails } from "react-icons/tb";

const ProjectCard = ({
  title,
  desc,
  technologies,
  gitLink,
  image,
  liveLink,
  index,
}) => {
  const {
    ref: myRef,
    inView: myElementVisible,
    entry,
  } = useInView({
    triggerOnce: true,
  });
  const [galleryOpen, setOpenGallery] = useState(false);

  const imageCategories = {
    UnityNet: {
      images: [
        "/images/socialMediaImages/socialMedia.png",
        "/images/socialMediaImages/login.png",
        "/images/socialMediaImages/register.png",
        "/images/socialMediaImages/createPost.png",
        "/images/socialMediaImages/liked.png",
        "/images/socialMediaImages/photo.png",
        "/images/socialMediaImages/shared.png",
        "/images/socialMediaImages/share.png",
        "/images/socialMediaImages/shares.png",
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
        "/images/chessImages/search.png",
        "/images/chessImages/friends.png",
        "/images/chessImages/invites.png",
        "/images/chessImages/avatar.png",
      ],
    },

    OnlineLudoGame: {
      images: [
        "/images/ludoImages/login.png",
        "/images/ludoImages/menu.png",
        "/images/ludoImages/findMatch2.png",
        "/images/ludoImages/game.png",
        "/images/ludoImages/left.png",
        "/images/ludoImages/players.png",
        "/images/ludoImages/colors.png",
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
        "/images/slagalicaImages/combination.png",
        "/images/slagalicaImages/word.png",
        "/images/slagalicaImages/wordWin.png",
        "/images/slagalicaImages/number.png",
        "/images/slagalicaImages/numberWin.png",
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
    <>
      <div
        ref={myRef}
        className={classNames("cursor-pointer", {
          "animate-left": index % 2 === 0 && myElementVisible,
          "animate-right": index % 2 !== 0 && myElementVisible,
        })}
        onClick={(e) => {
          e.stopPropagation();
          setOpenGallery(true);
        }}
      >
        <div
          className={classNames(
            "flex flex-col justify-between p-4 md:p-6 space-y-5 rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.2)]",
            {}
          )}
        >
          <div className="flex flex-col space-y-5">
            <h2 className="text-xl font-bold md:text-2xl">{title}</h2>

            <img
              className="border border-gray-300 h-[15rem] md:h-[20rem]"
              src={imageCategories[title].images[0]}
            />

            {/* <p className="leading-7 text-sm md:text-[1rem] md:leading-loose">
            {desc}
          </p> */}

            {/* <div className="flex flex-wrap gap-2">
            {technologies.map((item, index) => (
              <div
                key={index}
                className="p-[0.2rem] md:p-1 md:px-2 text-sm md:text-lg font-bold text-black border border-black rounded-md"
              >
                {item}
              </div>
            ))}
          </div> */}
          </div>

          <div className="flex flex-col space-y-2 md:space-y-0 md:flex-row md:space-x-2">
            {liveLink && (
              <a
                href={liveLink}
                className="flex items-center justify-center py-[0.5rem] border-blue-500 px-4 text-[0.9rem] md:text-lg space-x-1 md:space-x-2 font-medium text-white hover:text-blue-500 bg-blue-600 rounded-md hover:bg-transparent hover:border-blue-500 border"
              >
                <span className="icon"> visibility</span>
                <span>View live</span>
              </a>
            )}

            <button className="flex items-center bg-white text-blue-500 justify-center py-[0.5rem] border-blue-500 px-4 text-[0.9rem] md:text-lg space-x-1 md:space-x-2 font-medium  hover:text-blue-500 rounded-md hover:bg-transparent hover:border-blue-500 border">
              <TbListDetails />
              <span>Details</span>
            </button>
          </div>
        </div>
      </div>
      {galleryOpen && (
        <Gallery
          setOpenGallery={setOpenGallery}
          images={imageCategories[title].images}
          title={title}
          desc={desc}
          liveLink={liveLink}
          technologies={technologies}
          gitLink={gitLink}
        />
      )}
    </>
  );
};

export default ProjectCard;
