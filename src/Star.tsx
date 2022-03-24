import React from 'react';

type StartPropsType = {
    selected: boolean
}
export const Star = (props: StartPropsType) => {
    if (props.selected) {
        return <span> # </span>
    } else {
        return <span> * </span>
    }
}