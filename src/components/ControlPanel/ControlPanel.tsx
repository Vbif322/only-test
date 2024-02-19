import { useContext } from "react";
import CircleButton from "../Button/CircleButton";
import "./ControlPanel.scss";
import { DataContext } from "../../context/context";

const array = [1, 2, 3, 4, 5, 6];

const ControlPanel = () => {
  const { num, setNum } = useContext(DataContext);

  const onNextClick = (e) => {
    if (num === 6) {
      return;
    }
    setNum((prev) => prev + 1);
  };
  const onPrevClick = (e) => {
    if (num === 1) {
      return;
    }
    setNum((prev) => prev - 1);
  };

  const onClickPagination = (el: number) => {
    setNum(el);
  };

  return (
    <div className="control-container">
      <div className="Control">
        <p>0{num}/06</p>
        <div className="Control__button_container">
          <div className="Control__button" onClick={onPrevClick}>
            <CircleButton deg={180} color={"#42567A"} disabled={num === 1} />
          </div>
          <div className="Control__button" onClick={onNextClick}>
            <CircleButton deg={0} color={"#42567A"} disabled={num === 6} />
          </div>
        </div>
      </div>
      <div className="control-pagination">
        {array.map((el) => {
          return (
            <div
              key={el}
              className={`control-element ${
                num === el ? "control-active" : ""
              }`}
              onClick={(e) => onClickPagination(el)}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default ControlPanel;
