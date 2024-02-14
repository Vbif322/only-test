import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation } from "swiper/modules";
import "./Slider.scss";
import "swiper/css";
// import "swiper/css/navigation";
import Card from "../Card/Card";

const Slider = ({ cardArray }) => {
  const swiper = useSwiper();

  const btnHandler = () => {
    swiper.slideNext();
  };

  return (
    <div className="Slider__container">
      <Swiper
        modules={[Navigation]}
        spaceBetween={80}
        slidesPerView={3}
        navigation
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {cardArray.map((card, i) => {
          return (
            <SwiperSlide key={card.year + i} virtualIndex={i}>
              {<Card year={card.year} text={card.text} />}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
export default Slider;
