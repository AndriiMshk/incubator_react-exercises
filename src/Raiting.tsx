import React, {useState} from 'react';
import {Star} from './Star';

export const Rating = () => {

    let [value, setValue] = useState(0)

    const onClickHandler = () => {

        setValue(value + 1)
        if (value > 5) {
            setValue(0)
        }
    }

    return (
        <div className='rating'>
            <Star selected={value > 0}
                  onClickHandler={onClickHandler}
            />
            <Star selected={value > 1}
                  onClickHandler={onClickHandler}
            />
            <Star selected={value > 2}
                  onClickHandler={onClickHandler}
            />
            <Star selected={value > 4}
                  onClickHandler={onClickHandler}
            />
            <Star selected={value > 5}
                  onClickHandler={onClickHandler}
            />
        </div>
    )
}

