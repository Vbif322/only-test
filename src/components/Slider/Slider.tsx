import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import Card from "../Card/Card";

const Slider = ({ cardArray }) => {
  return (
    <Swiper
      spaceBetween={80}
      slidesPerView={3}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {cardArray.map((card, i) => {
        return (
          <SwiperSlide key={card.year} virtualIndex={i}>
            {<Card year={card.year} text={card.text} />}
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
export default Slider;
