import React, {useState} from 'react';


export const OnOff = () => {

    let [x, setX] = useState(true)

    const switchOnOff = () => setX(!x)

    return (
        <div className={'circle'}>
            <div className={x? 'on' : 'off'}/>
            <button onClick={switchOnOff}>{!x? 'ON' : 'OFF'}</button>
        </div>
    )
}