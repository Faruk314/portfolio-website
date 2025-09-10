import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const scrollToPage = (id) => {
  const page = document.getElementById(id);
  page.scrollIntoView({ behavior: "smooth" });
};

// const projects = [
//     {
//       id: 1,
//       title: "A-FARM",
//       shortDesc: "Biljna apoteka",
//       technologies: ["NextJS", "Tailwind"],
//       desc: t("aFarmText"),
//       liveLink: "https://afarm-biljoteka.com/",
//       logo: <AfarmLogo />,
//       images: [
//         "/images/AfarmImages/home.png",
//         "/images/AfarmImages/cart.png",
//         "/images/AfarmImages/store.png",
//         "/images/AfarmImages/login.png",
//         "/images/AfarmImages/register.png",
//         "/images/AfarmImages/order.png",
//         "/images/AfarmImages/contact.png",
//       ],
//     },

//     {
//       id: 2,
//       title: "Tuzla Taxi",
//       shortDesc: "Taxi Company Site",
//       technologies: ["React", "Tailwind", "PHP"],
//       desc: t("tuzlaTaxiText"),
//       liveLink: "https://tuzlataxi.com",
//       images: [
//         "/images/taxiImages/tuzlaTaxi.png",
//         "/images/taxiImages/app.png",
//         "/images/taxiImages/contact.png",
//       ],
//     },
//     {
//       id: 3,
//       title: "Chess",
//       shortDesc: "Online Game",
//       technologies: [
//         "React",
//         "Typescript",
//         "NodeJS",
//         "Tailwind",
//         "MySQL",
//         "Socket.io",
//         "Redis",
//       ],
//       gitLink: "https://github.com/Faruk314/ChessOnline",
//       desc: t("chessText"),
//       liveLink: "https://chess.farukspahic.com/",
//       images: [
//         "/images/chessImages/game.png",
//         "/images/chessImages/menu.png",
//         "/images/chessImages/login.png",
//         "/images/chessImages/findMatch.png",
//         "/images/chessImages/friendReq.png",
//         "/images/chessImages/search.png",
//         "/images/chessImages/friends.png",
//         "/images/chessImages/invites.png",
//         "/images/chessImages/avatar.png",
//       ],
//     },

//     {
//       id: 4,
//       title: "Poker",
//       shortDesc: "Online Game",
//       technologies: [
//         "React",
//         "Typescript",
//         "NodeJS",
//         "Tailwind",
//         "MySQL",
//         "Socket.io",
//         "Redis",
//       ],
//       gitLink: "https://github.com/Faruk314/PokerOnline",
//       desc: t("pokerText"),
//       liveLink: "https://poker.farukspahic.com/",
//       images: [
//         "/images/pokerImages/login.png",
//         "/images/pokerImages/menu.png",
//         "/images/pokerImages/createGame.png",
//         "/images/pokerImages/joinGame.png",
//         "/images/pokerImages/shop.png",
//         "/images/pokerImages/payment.png",
//         "/images/pokerImages/table.png",
//         "/images/pokerImages/table2.png",
//         "/images/pokerImages/tableWinner.png",
//       ],
//     },
//   ];
