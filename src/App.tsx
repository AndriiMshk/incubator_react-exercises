import React, { useState } from 'react';
import { Accordion } from './Accordion';
import { NewComponent } from './NewComponent';
import { Rating } from './Raiting';
import { Rating2, Rating2ValueType } from './Raiting2';
import { OnOff } from './OnOff';
import { Input2 } from './Input2';
import { Input3 } from './Input3';
import { Input } from './Input';
import { SelectContainer } from './Select';
import { SelectComp2Container } from './SelectComp2Container';
import { Select2 } from './Select2';

function App() {

  // for Accordion
  const [titleValue, setTitleValue] = useState('?')
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
  }

  // for OnOff
  let [x, setX] = useState(false);
  const switchOnOff = () => setX(!x);

  // for Rating2 CONTROLLING RATING
  const [rating2Value, setRating2Value] = useState<Rating2ValueType>(0);

  return (
    <div className="root">
      {/*<div className="accordion">*/}
      {/*  <Accordion*/}
      {/*    titleValue={titleValue}*/}
      {/*    items={items}*/}
      {/*    onClick={onClick}*/}
      {/*  />*/}
      {/*</div>*/}
      {/*<NewComponent />*/}
      {/*/!*<Rating/>*!/*/}
      {/*<Rating2*/}
      {/*    value={rating2Value}*/}
      {/*    onClick={(value: Rating2ValueType) => setRating2Value(value)}*/}
      {/*/>*/}
      {/*<OnOff*/}
      {/*  x={x}*/}
      {/*  switchOnOff={switchOnOff}*/}
      {/*/>*/}
      {/*<Input />*/}
      {/*<Input2/>*/}
      {/*<Input3/>*/}
      {/*<SelectContainer/>*/}
      <SelectComp2Container/>
      <Select2/>
    </div>
  );
}

export default App;
