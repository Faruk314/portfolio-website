import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { ProjectCard } from "./ProjectCard";
import { useTranslation } from "react-i18next";
import "swiper/css";
import "swiper/css/pagination";

export const ProjectSlider = ({ projectCards }) => {
  const { t } = useTranslation("projects");

  return (
    <div className="unselectable">
      <Swiper
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        initialSlide={1}
        className="max-w-5xl"
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          960: {
            slidesPerView: 3,
          },
        }}
        modules={[Pagination]}
        pagination={{ clickable: true }}
      >
        {projectCards?.map((card, index) => (
          <SwiperSlide key={index} className="flex justify-center items-center">
            {({ isActive }) => (
              <ProjectCard isActive={isActive} card={card} index={index} />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
