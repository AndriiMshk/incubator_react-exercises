import React, { useCallback, useMemo, useState } from 'react';

export default {
  title: 'useState demo',
};

const generateInitialValue = () => {
  console.log('generateInitialValue');
  return 0;
};

export const Example1 = () => {
  console.log('Example1');

  // const initialValue = useMemo(generateInitialValue, [])

  const [counter, setCounter] = useState(generateInitialValue);

  return (
    <>
      {counter}
      <button onClick={() => setCounter(state => state + 1)}>+</button>
    </>
  );
};

