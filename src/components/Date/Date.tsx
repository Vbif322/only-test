import { useEffect, useRef, useState } from "react";
import "./Date.scss";

type Props = {
  color: string;
  number: number;
};

const Date = ({ color, number }: Props) => {
  const previosNumber = useRef(number);
  const [currentNumber, setCurrentNumber] = useState(previosNumber.current);

  if (number === currentNumber) {
    previosNumber.current = currentNumber;
  }

  useEffect(() => {
    currentNumber !== number &&
      setTimeout(setCurrentNumber, 50, () =>
        currentNumber >= number ? currentNumber - 1 : currentNumber + 1
      );
  }, [currentNumber, number]);

  return (
    <p style={{ color: color }} className="Date__paragraph">
      {currentNumber}
    </p>
  );
};

export default Date;
