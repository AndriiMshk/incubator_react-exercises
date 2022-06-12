import React from 'react';
import { Star2 } from './Star2';

export type Rating2ValueType = 0 | 1 | 2 | 3 | 4 | 5

type Rating2PropsType = {
  value: number
  onClick: (value: Rating2ValueType) => void
}

export const Rating2: React.FC<Rating2PropsType> = ({
  value,
  onClick,
}) => {
  return (
    <span className="rating">
      <Star2 selected={value > 0} onClick={onClick} value={1} />
      <Star2 selected={value > 1} onClick={onClick} value={2} />
      <Star2 selected={value > 2} onClick={onClick} value={3} />
      <Star2 selected={value > 3} onClick={onClick} value={4} />
      <Star2 selected={value > 4} onClick={onClick} value={5} />
    </span>
  );
};
