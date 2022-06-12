import React, { useEffect, useState } from 'react';

type ClockPropsType = {}

const getCurrentTimeValue = (num: number) => num < 10 ? `0${num}` : num;

export const Clock: React.FC<ClockPropsType> = () => {

  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => setDate(new Date()), 1000);
    return () => clearInterval(intervalId);
  }, [date]);

  return (
    <div style={{fontSize: '50px'}}>
      <span>{getCurrentTimeValue(date.getHours())}</span>
      :
      <span>{getCurrentTimeValue(date.getMinutes())}</span>
      :
      <span>{getCurrentTimeValue(date.getSeconds())}</span>
    </div>
  );
};

