import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { ProjectCard } from "./ProjectCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export const ProjectSlider = ({ projectCards }) => {
  const swiperRef = useRef(null);

  return (
    <div className="unselectable relative group px-0 md:px-12 max-w-6xl mx-auto">
      <button
        onClick={() => swiperRef.current?.slidePrev()}
        className="hidden md:flex items-center justify-center absolute left-2 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg text-[#2b6faf] hover:scale-110 transition-transform cursor-pointer border border-gray-100"
        aria-label="Previous slide"
      >
        <ChevronLeft size={28} />
      </button>

      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        initialSlide={1}
        className="max-w-5xl py-8 mx-auto"
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          960: {
            slidesPerView: 3,
          },
        }}
        modules={[Pagination, Navigation]}
        pagination={{ clickable: true }}
      >
        {projectCards?.map((card, index) => (
          <SwiperSlide key={index} className="flex justify-center items-center">
            {({ isActive }) => (
              <ProjectCard
                isActive={isActive}
                card={card}
                index={index}
                onClick={() => {
                  if (!isActive) {
                    swiperRef.current?.slideTo(index);
                  }
                }}
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>

      <button
        onClick={() => swiperRef.current?.slideNext()}
        className="hidden md:flex items-center justify-center absolute right-2 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg text-[#2b6faf] hover:scale-110 transition-transform cursor-pointer border border-gray-100"
        aria-label="Next slide"
      >
        <ChevronRight size={28} />
      </button>
    </div>
  );
};
