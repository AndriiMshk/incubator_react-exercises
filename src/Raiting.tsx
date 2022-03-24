import React from 'react';
import {Star} from './Star';

type RatingPropsType = {
    selected: 0 | 1 | 2 | 3 | 4 | 5
}

export const Rating = (props: RatingPropsType) => {
    return (
        <div className='rating'>
            <Star selected={props.selected > 0}/>
            <Star selected={props.selected > 1}/>
            <Star selected={props.selected > 2}/>
            <Star selected={props.selected > 3}/>
            <Star selected={props.selected > 4}/>
        </div>
    )
}

