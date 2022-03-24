import React from 'react';


type ButtonType = {
    name: string
    callBack: () => void
}
export const Button = (props: ButtonType) => {
    const onClickHandler = () => {
    props.callBack()
    }
    return ( <>
        <button onClick={onClickHandler}>{props.name}</button>
        </>
    )
}
type ButtonNewType = {
    name: string
    callBack: () => void
}
export const Button2 = (props: ButtonNewType) => {
    return (
        <>
            {/*<h1>{a}</h1>*/}
    <button onClick={props.callBack}>{props.name}</button>
        </>
        )
}