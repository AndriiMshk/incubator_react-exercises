import React, {useState} from 'react';
import {AccordionTitle} from './AccordionTitle';
import {AccordionBody} from './AccordionBody';

type AccordionPropsType = {
    titleValue: string
    isCollapsed: boolean
    collapse: () => void
}

export const Accordion = (props: AccordionPropsType) => {
    return (
        <div>
            <AccordionTitle title={props.titleValue} collapse={props.collapse}/>
            {props.isCollapsed && <AccordionBody/>}
        </div>
    )
}