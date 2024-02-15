import React from "react";
import "./Wheel.scss";

type Props = {};

const arr = ["Кино", "Наука", "Музыка", "Литература", "Искусство", "Спорт"];

const Wheel = (props: Props) => {
  return (
    <div className="Wheel__container">
      <div>
        {arr.map((category, i) => {
          return (
            <div
              className="Wheel__sector"
              key={i}
              style={{ transform: `translate(0, -50%) rotate(${60 * i}deg)` }}
            >
              <div
                className={`Wheel__sector__circle ${i === 5 ? "active" : ""}`}
              >
                {i === 5 && (
                  <div className="Wheel__sector__circle__num">
                    <p>{i + 1}</p>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Wheel;

{
  /* <div className="Wheel__sector"></div>
        <div className="Wheel__sector"></div>
        <div className="Wheel__sector"></div>
        <div className="Wheel__sector"></div>
        <div className="Wheel__sector"></div> */
}
