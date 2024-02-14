import React from "react";
import "./Date.scss";

type Props = {
  color: string;
  number: string | number;
};

const Date = ({ color, number }: Props) => {
  return (
    <p style={{ color: color }} className="Date__paragraph">
      {number}
    </p>
  );
};

export default Date;
