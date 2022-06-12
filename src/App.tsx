import React, { useState } from 'react';
import { Accordion } from './Accordion/Accordion';
import { NewComponent } from './components/NewComponent';
import { Rating } from './Rating/Raiting';
import { Rating2, Rating2ValueType } from './Rating/Raiting2';
import { OnOff } from './components/OnOff';
import { Input2 } from './input/Input2';
import { Input3 } from './input/Input3';
import { Input } from './input/Input';
import { SelectContainer } from './selectors/Select';
import { SelectComp2Container } from './selectors/SelectComp2Container';
import { Select2 } from './selectors/Select2';
import { Clock } from './components/Clocks/Clock';
import { AnalogClock } from './components/Clocks/AnalogClock';
import { cursorTo } from 'readline';

function App() {

  // for Accordion
  const [titleValue, setTitleValue] = useState('?');
  const items = [
    {
      title: 'qqq',
      value: 'q',
    },
    {
      title: 'www',
      value: 'w',
    },
    {
      title: 'eee',
      value: 'e',
    },
  ];

  const onClick = (value: any) => {
    setTitleValue(value);
  };

  // for OnOff
  let [x, setX] = useState(false);
  const switchOnOff = () => setX(!x);

  // for Rating2 CONTROLLING RATING
  const [rating2Value, setRating2Value] = useState<Rating2ValueType>(0);

  // for Clocks
  const [showClock, setShowClock] = useState<boolean[]>([false, false]);

  return (
    <div className="root">
      <div className="accordion">
        <Accordion
          titleValue={titleValue}
          items={items}
          onClick={onClick}
        />
      </div>
      <NewComponent />
      {/*<Rating/>*/}
      <Rating2
        value={rating2Value}
        onClick={(value: Rating2ValueType) => setRating2Value(value)}
      />
      <OnOff
        x={x}
        switchOnOff={switchOnOff}
      />
      <Input />
      <Input2 />
      <Input3 />
      <SelectContainer />
      <SelectComp2Container />
      <Select2 />
      <div
        onMouseLeave={() => setShowClock([false, false])}
        style={{ cursor: 'pointer' }}
      >
        <div onClick={() => setShowClock([true, false])}>
          <span>Clock1</span>
          {showClock[0] && <Clock />}
        </div>
        <div onClick={() => setShowClock([false, true])}>
          <span>Clock2</span>
          {showClock[1] && <AnalogClock />}
        </div>
      </div>
    </div>
  );
}

export default App;
