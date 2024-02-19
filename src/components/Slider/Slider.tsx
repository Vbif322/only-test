import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "./Slider.scss";
import Card from "../Card/Card";
import { useEffect, useRef } from "react";
import Button from "../Button/CircleButton";

type card = {
  year: number;
  text: string;
};

const Slider = ({ cardArray }: { cardArray: card[] }) => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const sliderRef = useRef(null);

  useEffect(() => {
    sliderRef.current.classList.add("slider__animation");
    const timer = setTimeout(
      () => sliderRef.current.classList.remove("slider__animation"),
      1000
    );
    return () => clearTimeout(timer);
  }, [cardArray]);

  return (
    <div ref={sliderRef} className="slider__container">
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
      >
        {cardArray.map((card, i: number) => {
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
