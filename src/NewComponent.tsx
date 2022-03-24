import React, {useState} from 'react';
import {NewComponent2} from './NewComponent2';

export const NewComponent = () => {
    let [isShow, setShow] = useState(false)
    const showComponents = () => setShow(!isShow)
    return (
        <div>
            <button onClick={showComponents}>show</button>
            {isShow && <NewComponent2/>}
        </div>
    )
}