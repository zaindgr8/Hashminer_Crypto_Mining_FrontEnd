import React, { useState, useEffect } from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import { IoMdTime } from "react-icons/io";



const Timer = () => {
  const [timeRemaining, setTimeRemaining] = useState(24 * 60 * 60); // 24 hours in seconds

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeRemaining((prevTime) => {
        if (prevTime === 0) {
          // Reset the timer after 24 hours
          return 24 * 60 * 60;
        }
        return prevTime - 1;
      });
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  const formatTime = (timeInSeconds) => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;

    const formatNumber = (num) => (num < 10 ? `0${num}` : num);

    return `${formatNumber(hours)}:${formatNumber(minutes)}:${formatNumber(
      seconds
    )}`;
  };

  return (
    <div className="px-8 pb-12 py-3">
      <h1 className="text-xl lg:text-4xl border-blue-400 text-blue-400 hover:text-blue-800 hover:border-blue-800 cursor-pointer font-bold py-6 border-2 px-2 rounded-xl">Daily Transactions</h1>
      <p className="flex items-center justify-between pt-5">
        <span className="font-bold flex gap-x-2 items-center">
          <IoMdTime />
          Time Remaining:
        </span>
        <div className="text-green-500 text-2xl">
          {formatTime(timeRemaining)}
        </div>
      </p>
      <p className="flex items-center justify-between">
        <span className="font-bold flex items-center gap-x-2">
          {" "}
          <BsCurrencyDollar />
          Profit Amount:
        </span>
        <div className="text-green-500 text-2xl">$</div>
      </p>
    </div>
  );
};

export default Timer;
