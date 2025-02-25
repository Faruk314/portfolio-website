import React from "react";

const PokerLogo = () => {
  return (
    <div className="flex flex-col items-center">
      <img
        alt=""
        className="w-[8rem] h-[8rem] md:w-[10rem] md:h-[10rem]"
        src="/images/pokerImages/pokerlogo.png"
      />
      <span className="text-2xl md:text-3xl font-black">Poker Online</span>
    </div>
  );
};

export default PokerLogo;
