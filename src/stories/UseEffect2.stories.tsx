import React, { useCallback, useEffect, useMemo, useState } from 'react';

export default {
  title: 'useEffect2 demo',
};

export const Example1 = () => {
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setSecond(state => state + 1)

    }, 1000);
    setInterval(() => {
      setMinute(state => state + 1)
    }, 60000);
    setInterval(() => {
      setHour(state => state + 1)
    }, 3600000);

  }, []);

  if (second === 60) setSecond(0)
  if (minute === 60) setMinute(0)
  if (hour === 12) setHour(0)

  return (
    <>
      {hour}:{minute}:{second}
    </>
  );
};

