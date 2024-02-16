import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "./Slider.scss";
import "swiper/css";
import Card from "../Card/Card";
import { useRef } from "react";
import Button from "../Button/CircleButton";

const Slider = ({ cardArray }) => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  return (
    <div className="Slider__container">
      <Swiper
        modules={[Navigation]}
        spaceBetween={80}
        slidesPerView={3}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        grabCursor
        onBeforeInit={(swiper) => {
          if (typeof swiper.params.navigation === "object") {
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            swiper.params.navigation.nextEl = navigationNextRef.current;
          }
        }}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        {cardArray.map((card, i) => {
          return (
            <SwiperSlide key={card.year + i}>
              {<Card year={card.year} text={card.text} />}
            </SwiperSlide>
          );
        })}
        <div ref={navigationPrevRef} className="swiper-button-prev">
          <Button deg={180} color="#3877EE" />
        </div>
        <div ref={navigationNextRef} className="swiper-button-next">
          <Button deg={0} color="#3877EE" />
        </div>
      </Swiper>
    </div>
  );
};
export default Slider;
