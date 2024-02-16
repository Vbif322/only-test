import { useContext } from "react";
import CircleButton from "../Button/CircleButton";
import "./ControlPanel.scss";
import { DataContext } from "../../context/context";

type Props = {};

const ControlPanel = (props: Props) => {
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
  return (
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
  );
};

export default ControlPanel;
