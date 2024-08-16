import { useEffect, useState } from "react";

const vencimentoPix = 50 * 60;

export const useTimer = () => {
  const [timeLeft, setTimeLeft] = useState(vencimentoPix);

  useEffect(() => {
    if (timeLeft === 0) return;

    const intervalId = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes} minutos e ${remainingSeconds}s`;
  };

  return { timeLeft, formatTime };
};
