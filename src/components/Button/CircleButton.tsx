import { ReactComponent as Next } from "../../assets/vector.svg";

type Props = { deg: number; color?: string; disabled?: boolean };

const CircleButton = ({ deg, color, disabled }: Props) => {
  return (
    <Next
      style={{
        transform: `rotate(${deg}deg)`,
        stroke: color,
        opacity: disabled ? "50%" : "100%",
      }}
    />
  );
};

export default CircleButton;
