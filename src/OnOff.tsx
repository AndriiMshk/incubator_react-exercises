import React from 'react';
import { Input } from './Input';

type OnOffProps = {
  x: boolean
  switchOnOff: () => void
}

export const OnOff: React.FC<OnOffProps> = (
  {
    x,
    switchOnOff,
  },
) => {

  return (
    <div>
      <div className={'circle'}>
        <div className={x ? 'on' : 'off'} />
        <button onClick={switchOnOff}>{!x ? 'ON' : 'OFF'}</button>
      </div>
      {/*{x && <Input />}*/}
    </div>
  );
};