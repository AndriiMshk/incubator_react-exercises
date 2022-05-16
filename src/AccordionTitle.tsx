import React from 'react';

interface AccordionTitleProps {
  title: string
  collapse: () => void
}

export const AccordionTitle: React.FC<AccordionTitleProps> = ({
  title,
  collapse,
}) => {

  return (
    <h1 onClick={collapse}>--{title}--</h1>
  );
};