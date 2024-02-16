import { useState } from "react";
import Button from "../Button/Button";
import "./ControlPanel.scss";

type Props = {};

const ControlPanel = (props: Props) => {
  const [num, setNum] = useState(1);

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
  return (
    <div className="Control">
      <p>0{num}/06</p>
      <div className="Control__button_container">
        <div className="Control__button" onClick={onPrevClick}>
          <Button deg={180} color={"#42567A"} disabled={num === 1} />
        </div>
        <div className="Control__button disabled" onClick={onNextClick}>
          <Button deg={0} color={"#42567A"} disabled={num === 6} />
        </div>
      </div>
    </div>
  );
};

export default ControlPanel;
