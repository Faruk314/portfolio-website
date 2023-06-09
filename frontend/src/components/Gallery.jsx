import React, { useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const Gallery = ({ images, setOpenGallery }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="fixed inset-0 bg-[rgb(0,0,0,0.9)] z-40 flex items-center justify-center">
      <button
        onClick={() => setOpenGallery(false)}
        className="absolute top-2 left-2 h-[2rem] hover:bg-gray-600 w-[2rem] text-xl bg-white rounded-full"
      >
        X
      </button>
      <div className="relative h-[30rem] w-[30rem] md:w-[80rem] md:h-[50rem] flex justify-center bg-black">
        <img src={images[currentIndex]} alt="" className="object-contain" />

        <button
          onClick={() => {
            if (currentIndex < images.length - 1) {
              setCurrentIndex((prev) => prev + 1);
            } else {
              setCurrentIndex(0);
            }
          }}
          className="absolute ml-11 top-[100%] lg:top-[50%] lg:right-[-3rem] p-2 bg-white text-xl hover:bg-gray-600"
        >
          <AiOutlineRight className="" />
        </button>

        <button
          onClick={() => {
            if (currentIndex > 0) {
              setCurrentIndex((prev) => prev - 1);
            } else {
              setCurrentIndex(images.length - 1);
            }
          }}
          className="absolute mr-11 top-[100%] lg:top-[50%] lg:left-[-3rem] p-2 bg-white text-xl hover:bg-gray-600"
        >
          <AiOutlineLeft className="" />
        </button>
      </div>
    </div>
  );
};

export default Gallery;
