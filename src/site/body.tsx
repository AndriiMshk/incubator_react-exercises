import React from "react";


type BodyType = {
    title: string
}
export const Body = (props:BodyType) => {
    return (
        <h3>
            {props.title}
        </h3>
    )
}