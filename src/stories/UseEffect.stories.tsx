import React, { useCallback, useEffect, useMemo, useState } from 'react';

export default {
  title: 'useEffect demo',
};

const generateInitialValue = () => {
  console.log('generateInitialValue');
  return 0;
};

export const Example1 = () => {
  const [counter, setCounter] = useState(generateInitialValue);
  const [counter1, setCounter1] = useState(generateInitialValue);


  useEffect(() => {
    console.log('useEffect (counter change)');
    document.title = counter.toString()
    //api.getUsers().then('')
    //setInterval
    //dataBase
    //document.getElementId
    //document.title = 'title'
  }, [counter]);

  useEffect(()=> {
    console.log('useEffect one time (component did mount)');
  }, [])

  useEffect(()=> {
    console.log('useEffect very component render');
  })


  return (
    <>
      {counter}
      <button onClick={() => setCounter(state => state + 1)}>+</button>
      {counter1}
      <button onClick={() => setCounter1(state => state + 1)}>+</button>
    </>
  );
};

