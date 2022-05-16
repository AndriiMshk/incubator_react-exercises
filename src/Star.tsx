import React from 'react';

type StarPropsType = {
  selected: boolean
  onClickHandler: () => void
}

export const Star: React.FC<StarPropsType> = ({
  selected,
  onClickHandler,
}) => {
  return (
    <span onClick={onClickHandler}>{selected ? ' # ' : ' * '}</span>
  );
};

