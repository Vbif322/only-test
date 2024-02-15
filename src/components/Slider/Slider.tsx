import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation } from "swiper/modules";
import "./Slider.scss";
import "swiper/css";
// import "swiper/css/navigation";
import Card from "../Card/Card";
import { useRef } from "react";
import { ReactComponent as Next } from "../../assets/next.svg";
import Button from "../Button/Button";

const Slider = ({ cardArray }) => {
  const swiper = useSwiper();

  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  const btnHandler = () => {
    // swiper.slideNext();
  };

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
          swiper.params.navigation.prevEl = navigationPrevRef.current;
          swiper.params.navigation.nextEl = navigationNextRef.current;
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
          <Button deg={180} height={10}></Button>
        </div>
        <div
          ref={navigationNextRef}
          className="swiper-button-next"
          onClick={btnHandler}
        >
          <Button deg={0} height={10} color={"#3877EE"} />
        </div>
      </Swiper>
    </div>
  );
};
export default Slider;
