import React from 'react';
import { Rating2ValueType } from './Raiting2';

type Star2PropsType = {
  selected: boolean
  onClick: (value: Rating2ValueType) => void
  value: Rating2ValueType
}

export const Star2: React.FC<Star2PropsType> = (
  {
    selected,
    onClick,
    value,
  },
) => {
  return (
    <span
      onClick={() => onClick(value)}
    >{selected ? ' # ' : ' * '}</span>
  );
};

