import React, { useState, useEffect, useRef } from "react";
import { AiOutlineLeft, AiOutlineRight, AiOutlineClose } from "react-icons/ai";
import GitButton from "./utils/GitButton";

const Gallery = ({
  images,
  setOpenGallery,
  desc,
  title,
  technologies,
  liveLink,
  gitLink,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const modalRef = useRef();

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setOpenGallery(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-[rgb(0,0,0,0.9)] z-40 flex items-center justify-center">
      <button
        onClick={() => setOpenGallery(false)}
        className="absolute top-2 right-2 h-[2rem] w-[2rem] text-xl text-white rounded-full"
      >
        <AiOutlineClose size={25} />
      </button>
      <div
        ref={modalRef}
        className="flex flex-col  md:w-[56rem] justify-center p-6 space-y-4 bg-white rounded-md"
      >
        <div
          onMouseOver={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          className="relative flex items-center justify-center w-full h-[20rem] md:h-[35rem] border border-blue-200 "
        >
          <img
            src={images[currentIndex]}
            alt=""
            className="object-contain h-full"
          />

          {isHovering && (
            <button
              onClick={() => {
                if (currentIndex > 0) {
                  setCurrentIndex((prev) => prev - 1);
                } else {
                  setCurrentIndex(images.length - 1);
                }
              }}
              className="absolute flex items-center justify-center top-[50%] left-0 w-[3rem] bg-[rgb(0,0,0,0.4)] p-4 text-xl text-white bg-white"
            >
              <AiOutlineLeft size={30} />
            </button>
          )}

          {isHovering && (
            <button
              onClick={() => {
                if (currentIndex < images.length - 1) {
                  setCurrentIndex((prev) => prev + 1);
                } else {
                  setCurrentIndex(0);
                }
              }}
              className="absolute flex items-center justify-center right-0 w-[3rem] top-[50%] bg-[rgb(0,0,0,0.4)] p-4 text-white text-xl bg-white"
            >
              <AiOutlineRight size={25} className="" />
            </button>
          )}
        </div>

        <div className="flex flex-col space-y-4">
          <h2 className="text-3xl font-bold">{title}</h2>

          <p className="max-w-2xl leading-6">{desc}</p>

          <div className="flex flex-wrap gap-2">
            {technologies?.map((item, index) => (
              <div
                key={index}
                className="p-[0.2rem] md:p-1 md:px-2 text-sm md:text-lg font-bold text-black border border-black rounded-md"
              >
                {item}
              </div>
            ))}
          </div>

          <div className="flex space-x-2">
            {liveLink && (
              <a
                href={liveLink}
                className="flex w-full md:w-max items-center justify-center py-[0.5rem] border-blue-500 px-4 text-[0.9rem] md:text-lg space-x-1 md:space-x-2 font-medium text-white hover:text-blue-500 bg-blue-600 rounded-md hover:bg-transparent hover:border-blue-500 border"
              >
                <span className="icon"> visibility</span>
                <span>View live</span>
              </a>
            )}

            {gitLink && <GitButton />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
