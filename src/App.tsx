import React from "react";
import "./App.scss";
import Date from "./components/Date/Date";
import Slider from "./components/Slider/Slider";
import { cardArray } from "./assets/data";
import Wheel from "./components/Wheel/Wheel";

function App() {
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
        <div className="App__control">
          <p>06/06</p>
          <div className="App__control__button_container">
            <button className="App__control__button">{"<"}</button>
            <button className="App__control__button">{">"}</button>
          </div>
        </div>
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
