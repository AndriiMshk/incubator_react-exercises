import React from 'react';

type AccordionBodyPropsType = {
  items: { title: string, value: any }[]
  onClick: (value: any) => void
}

export const AccordionBody: React.FC<AccordionBodyPropsType> = (props) => {
  return (
    <div>
      <ul>
        {props.items.map((el, index) => (
          <li onClick={() => props.onClick(el.value)} key={index}>{el.title}</li>))}
      </ul>
    </div>
  );
};