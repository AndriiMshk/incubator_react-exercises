import React, {useState} from 'react';

type AccordionTitleProps = {
    title: string
    collapse: () => void
}





export const AccordionTitle = (props: AccordionTitleProps) => {

    return (
            <h1 onClick={props.collapse}>--{props.title}--</h1>
    )
}