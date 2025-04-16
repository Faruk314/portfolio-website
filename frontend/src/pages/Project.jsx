import React, { useEffect, useRef } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import GitButton from "../components/utils/GitButton";
import AfarmLogo from "../components/utils/AfarmLogo";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import classNames from "classnames";
import "swiper/css";
import "swiper/css/pagination";
import Tag from "../components/Tag";
import { HiEye } from "react-icons/hi";

const Project = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const modalRef = useRef();
  const contentRef = useRef();
  const namespace = id < 3 ? "client" : "personal";
  const { t } = useTranslation(namespace);

  const projects = [
    {
      id: 1,
      title: "A-FARM",
      shortDesc: "Biljna apoteka",
      technologies: ["NextJS", "Tailwind"],
      desc: t("aFarmText"),
      liveLink: "https://afarm-biljoteka.com/",
      logo: <AfarmLogo />,
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

    {
      id: 2,
      title: "Tuzla Taxi",
      shortDesc: "Taxi Company Site",
      technologies: ["React", "Tailwind", "PHP"],
      desc: t("tuzlaTaxiText"),
      liveLink: "https://tuzlataxi.com",
      images: [
        "/images/taxiImages/tuzlaTaxi.png",
        "/images/taxiImages/app.png",
        "/images/taxiImages/contact.png",
      ],
    },
    {
      id: 3,
      title: "Chess",
      shortDesc: "Online Game",
      technologies: [
        "React",
        "Typescript",
        "NodeJS",
        "Tailwind",
        "MySQL",
        "Socket.io",
        "Redis",
      ],
      gitLink: "https://github.com/Faruk314/ChessOnline",
      desc: t("chessText"),
      liveLink: "https://chess.farukspahic.com/",
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

    {
      id: 4,
      title: "Poker",
      shortDesc: "Online Game",
      technologies: [
        "React",
        "Typescript",
        "NodeJS",
        "Tailwind",
        "MySQL",
        "Socket.io",
        "Redis",
      ],
      gitLink: "https://github.com/Faruk314/PokerOnline",
      desc: t("pokerText"),
      liveLink: "https://poker.farukspahic.com/",
      images: [
        "/images/pokerImages/login.png",
        "/images/pokerImages/menu.png",
        "/images/pokerImages/createGame.png",
        "/images/pokerImages/joinGame.png",
        "/images/pokerImages/shop.png",
        "/images/pokerImages/payment.png",
        "/images/pokerImages/table.png",
        "/images/pokerImages/table2.png",
        "/images/pokerImages/tableWinner.png",
      ],
    },
  ];

  useEffect(() => {
    const observerRefValue = modalRef.current;
    disableBodyScroll(observerRefValue);
    return () => {
      if (observerRefValue) {
        enableBodyScroll(observerRefValue);
      }
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (contentRef.current && !contentRef.current.contains(e.target)) {
        navigate("/");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navigate]);

  const renderProject = () => {
    const project = projects.find((p) => p.id === parseInt(id));

    if (!project) return null;

    return (
      <div
        ref={contentRef}
        onClick={(e) => e.stopPropagation()}
        className={classNames(
          "flex flex-col bg-white w-full md:w-[43rem] rounded-xl animate-up"
        )}
      >
        <div className="flex items-center justify-center py-2">
          <h2 className="text-3xl font-black">{project.title}</h2>
        </div>

        <div className="bg-black flex items-center h-[15rem] md:h-[22rem] bg-black justify-center">
          <Swiper
            pagination={{ clickable: true }}
            modules={[Pagination]}
            className="w-full h-full"
          >
            {project.images.map((image, index) => (
              <SwiperSlide key={index}>
                <img
                  className="h-full w-full object-cover"
                  alt=""
                  src={image}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="px-5 py-5 flex flex-col space-y-4 md:space-y-6">
          <div className="flex flex-wrap">
            {project.technologies.map((item) => (
              <Tag name={item} />
            ))}
          </div>

          <div className="leading-[1.5rem] md:leading-7 text-[0.9rem] md:text-[1rem]">
            <p>{project.desc}</p>
          </div>

          <div className="flex space-x-2">
            <Link
              to={project.liveLink}
              className="flex items-center justify-center shadow-md duration-200 hover:bg-white px-7 py-[0.6rem] border border-blue-500 space-x-2 font-medium text-white bg-blue-600 rounded-full md:px-12 md:py-2 hover:bg-transparent hover:text-blue-500"
            >
              <HiEye size={20} />
              <span>{t("buttonText")}</span>
            </Link>

            {project.gitLink && <GitButton link={project.gitLink} />}
          </div>
        </div>
      </div>
    );
  };

  return (
    <section
      ref={modalRef}
      className="fixed z-20 px-2 md:px-0 left-0 top-0 bottom-0 right-0 bg-[rgba(0,0,0,0.7)] flex items-center justify-center"
    >
      {renderProject()}
    </section>
  );
};

export default Project;
