import React, { useState } from "react";
import "./Wheel.scss";

type Props = {};

const arr = ["Кино", "Наука", "Музыка", "Литература", "Искусство", "Спорт"];

const Wheel = (props: Props) => {
  const [angle, setAngle] = useState(0);

  const onMouseEnterHandler = (e) => {
    e.currentTarget.classList.add("activate");
  };

  const onMouseLeaveHandler = (e) => {
    e.currentTarget.classList.remove("activate");
  };

  const onClickHandler = () => {
    setAngle(60);
  };

  return (
    <div className="Wheel__container">
      <div>
        {arr.map((category, i) => {
          return (
            <div
              className="Wheel__sector"
              key={i}
              style={{
                transform: `translate(0, -50%) rotate(${angle + 60 * i}deg)`,
              }}
            >
              <div className="Wheel__sector_container">
                <div
                  className={`Wheel__sector__circle ${
                    (angle + 60 * i).toString() === "300" ? "active" : ""
                  }`}
                  onMouseEnter={onMouseEnterHandler}
                  onMouseLeave={onMouseLeaveHandler}
                  onClick={onClickHandler}
                >
                  <div
                    className={`Wheel__sector__circle__num`}
                    style={{
                      transform: `translate(${0}px, ${0}px) rotate(${
                        360 - 60 * i
                      }deg)`,
                    }}
                  >
                    <p>{i + 1}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Wheel;
