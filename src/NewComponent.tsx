import React, {useState} from 'react';
import {NewComponent2} from './NewComponent2';

export const NewComponent = () => {

    let [isShow, setShow] = useState<boolean>(false)

    return (
        <div>
            <button onClick={() => setShow(!isShow)}>show</button>
            {isShow && <NewComponent2/>}
        </div>
    )
}