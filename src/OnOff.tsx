import React, {useState} from 'react';

type OnOffProps = {
    x: boolean
    switchOnOff: () => void
}

export const OnOff: React.FC<OnOffProps> = ({x,switchOnOff}) => {

    return (
        <div className={'circle'}>
            <div className={x? 'on' : 'off'}/>
            <button onClick={switchOnOff}>{!x? 'ON' : 'OFF'}</button>
        </div>
    )
}