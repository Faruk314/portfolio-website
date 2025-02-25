import React from "react";

const ChessLogo = () => {
  return (
    <div className="flex flex-col items-center">
      <img
        alt=""
        className="h-[8rem] w-[8rem] md:w-[10rem] md:h-[10rem]"
        src="/images/chessImages/chessIcon.png"
      />
      <span className="text-2xl md:text-3xl font-black">Chess Online</span>
    </div>
  );
};

export default ChessLogo;
