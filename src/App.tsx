import "./App.scss";
import Date from "./components/Date/Date";
import Slider from "./components/Slider/Slider";
import { cardArray } from "./assets/data";
import Wheel from "./components/Wheel/Wheel";
import ControlPanel from "./components/ControlPanel/ControlPanel";
import { useContext } from "react";
import { DataContext } from "./context/context";

function App() {
  const { DATA, num } = useContext(DataContext);
  return (
    <div className="App">
      <div className="App__container">
        <div className="App__vertical_vector_layout">
          <div className="App__vertical_vector"></div>
          <div className="App__vertical_vector"></div>
          <div className="App__vertical_vector"></div>
        </div>
        <div className="App__Wheel_container">
          <Wheel />
        </div>
        <div className="App__circle_vector"></div>
        <div className="App__horizont_vector"></div>
        <div className="App__color_vector"></div>
        <div className="App__text_container">
          <p>Исторические даты</p>
        </div>
        <ControlPanel />
        <div className="App__date_container">
          <Date color={"#5D5FEF"} number={2015} />
          <Date color={"#EF5DA8"} number={2022} />
        </div>
        <div className="App__slider">
          <Slider cardArray={cardArray} />
        </div>
      </div>
    </div>
  );
}

export default App;
