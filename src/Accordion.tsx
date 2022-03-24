import React, {useState} from 'react';
import {AccordionTitle} from './AccordionTitle';
import {AccordionBody} from './AccordionBody';

type AccordionPropsType = {
    titleValue: string
}


export const Accordion = (props: AccordionPropsType) => {

    let [isCollapsed, setIsCollapsed] = useState(false)

    const collapse = () => setIsCollapsed(!isCollapsed)
    return (
        <div>
            <AccordionTitle title={props.titleValue} collapse={collapse}/>
            {isCollapsed && <AccordionBody/>}
        </div>
    )
}