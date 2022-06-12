import React, { useState } from 'react';
import { Rating2 } from '../Rating/Raiting2';

export type InputItemPropsType = {
  id: string
  value: any
  rating: number
  ratingChange: (id: string, value: number) => void
  isChecked: boolean
  checkChangeHandler: any
  removeValueHandler: any
}

export const InputItem: React.FC<InputItemPropsType> = (
  {
    id,
    value,
    rating,
    ratingChange,
    isChecked,
    checkChangeHandler,
    removeValueHandler,
  },
) => {

  return (
    <>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={({ target }) => checkChangeHandler(id, target.checked)}
      />
      {value}
      <Rating2 value={rating} onClick={(value) => ratingChange(id, value)} />
      <button
        onClick={() => removeValueHandler(id)}>
        X
      </button>
    </>

  );
};

