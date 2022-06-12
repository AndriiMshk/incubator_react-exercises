import React, { useState } from 'react';
import { AccordionTitle } from './AccordionTitle';
import { AccordionBody } from './AccordionBody';

type AccordionPropsType = {
  titleValue: string
  items: { title: string, value: any }[]
  onClick: (value: any) => void
}

export const Accordion: React.FC<AccordionPropsType> = ({
  titleValue,
  items,
  onClick,
}) => {
  let [isCollapsed, setIsCollapsed] = useState(false);

  const onClockHandler = (value: any) => {
    onClick(value)
    setIsCollapsed(false)
  }
  return (
    <div>
      <AccordionTitle title={titleValue} collapse={() => setIsCollapsed(!isCollapsed)} />
      {isCollapsed && <AccordionBody items={items} onClick={(value) => onClockHandler(value)} />}
    </div>
  );
};