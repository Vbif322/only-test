import React, { useContext, useEffect, useState } from "react";
import "./Wheel.scss";
import { DataContext } from "../../context/context";

type Props = {};

const arr = ["Кино", "Наука", "Музыка", "Литература", "Искусство", "Спорт"];

const Wheel = (props: Props) => {
  const [angle, setAngle] = useState(0);
  const [nextAngle, setNextAngle] = useState(0);
  const { setNum, num } = useContext(DataContext);

  useEffect(() => {
    setNextAngle(angle + 300 - (angle + 60 * (num - 1)));
  }, [num]);

  useEffect(() => {
    nextAngle !== angle &&
      setTimeout(setAngle, 50, () =>
        angle >= nextAngle ? angle - 10 : angle + 10
      );
  }, [nextAngle, angle]);

  const onMouseEnterHandler = (e) => {
    e.currentTarget.classList.add("activate");
  };

  const onMouseLeaveHandler = (e) => {
    e.currentTarget.classList.remove("activate");
  };

  const onClickHandler = (i: number) => {
    setNum(i + 1);
    setNextAngle(angle + 300 - (angle + 60 * i));
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
                  style={{
                    transform: `translate(${0}px, ${0}px) rotate(${
                      360 - 60 * i - angle
                    }deg)`,
                  }}
                  className={`Wheel__sector__circle__category ${
                    (angle + 60 * i).toString() === "300" && angle === nextAngle
                      ? ""
                      : "hidden"
                  }`}
                >
                  <p>{category}</p>
                </div>
                <div
                  className={`Wheel__sector__circle ${
                    (angle + 60 * i).toString() === "300" && angle === nextAngle
                      ? "active"
                      : ""
                  }`}
                  onMouseEnter={onMouseEnterHandler}
                  onMouseLeave={onMouseLeaveHandler}
                  onClick={(e) => onClickHandler(i)}
                >
                  <div
                    className={`Wheel__sector__circle__num`}
                    style={{
                      transform: `rotate(${360 - 60 * i - angle}deg)`,
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
