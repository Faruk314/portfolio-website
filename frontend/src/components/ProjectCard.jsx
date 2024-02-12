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
  shortDesc,
}) => {
  const {
    ref: myRef,
    inView: myElementVisible,
    entry,
  } = useInView({
    triggerOnce: true,
  });
  const [galleryOpen, setOpenGallery] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

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
    Chess: {
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

    LudoGame: {
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
    Mastermind: {
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

    "A-FARM": {
      images: [
        "/images/AfarmImages/home.png",
        "/images/AfarmImages/cart.png",
        "/images/AfarmImages/store.png",
        "/images/AfarmImages/login.png",
        "/images/AfarmImages/register.png",
        "/images/AfarmImages/order.png",
        "/images/AfarmImages/contact.png",
      ],
    },
  };

  return (
    <>
      <div
        onMouseOver={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
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
        <div className="h-[15rem] md:h-[20rem] lg:h-[25rem]">
          <img
            alt=""
            className="rounded-xl w-full object-cover h-full shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
            src={imageCategories[title]?.images[0]}
          />
        </div>

        {isHovering && (
          <div className="bg-[rgba(0,0,0,0.5)] inset-0 fixed rounded-xl flex justify-center items-center">
            <h2 className="text-2xl md:text-3xl text-white font-bold">
              {title}
            </h2>
          </div>
        )}
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
