import React from "react";
import { ReactComponent as Next } from "../../assets/next.svg";

type Props = { deg: number; height: number; color?: string };

const Button = ({ deg, height, color }: Props) => {
  return (
    <Next
      style={{
        transform: `rotate(${deg}deg)`,
        height: `${height}px`,
        fill: color,
      }}
    />
  );
};

export default Button;
