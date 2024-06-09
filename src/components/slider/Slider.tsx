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
    >
      {slides.map((image) => (
        <SwiperSlide key={image.desktop}>
          <Link to="/produtos">
            <picture className="w-full">
              <source
                media="(max-width: 640px)"
                srcSet={image.mobile}
                className="h-full"
              />
              <img
                src={image.desktop}
                alt={image.alt}
                className="block h-full w-full object-cover sm:h-full md:rounded-lg"
              />
            </picture>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
