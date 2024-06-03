// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Slider.css";

// import required modules
import { Pagination, Navigation, EffectFade, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import { slides } from "../../data/imageData";

export const Slider = () => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, EffectFade, Pagination, Navigation]}
      className="flex h-screen max-h-[380px] flex-col items-center justify-between"
    >
      {slides.map((image) => (
        <SwiperSlide key={image}>
          <Link to="/produtos">
            <picture className="h-full w-full">
              <img src={image} alt="" className="h-full w-full object-cover" />
            </picture>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
