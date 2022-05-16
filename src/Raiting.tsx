import React, { useState } from 'react';
import { Star } from './Star';

export type RatingPropsType = {
  valueRating: 0 | 1 | 2 | 3 | 4 | 5
}

export const Rating: React.FC<RatingPropsType> = ({valueRating}) => {

  let [value, setValue] = useState(0);

  const onClickHandler = (selected: 0 | 1 | 2 | 3 | 4 | 5) => {
    setValue(selected);
  };

  return (
    <span className="rating">
      <Star selected={value > 0}
            onClickHandler={() => onClickHandler(1)}
      />
      <Star selected={value > 1}
            onClickHandler={() => onClickHandler(2)}
      />
      <Star selected={value > 2}
            onClickHandler={() => onClickHandler(3)}
      />
      <Star selected={value > 3}
            onClickHandler={() => onClickHandler(4)}
      />
      <Star selected={value > 4}
            onClickHandler={() => onClickHandler(5)}
      />
    </span>
  );
};

