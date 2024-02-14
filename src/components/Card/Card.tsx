import React from "react";
import "./Card.scss";

type Props = {
  year: string | number;
  text: string;
};

const Card = ({ year, text }: Props) => {
  return (
    <div className="Card__container">
      <p className="Card__year">{year}</p>
      <p className="Card__paragraph">{text}</p>
    </div>
  );
};

export default Card;
