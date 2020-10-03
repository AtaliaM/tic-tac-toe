import React from 'react';

const style = {
    background: "pink",
    border: "2px solid black",
    fontSize: "32px",
    fontWeight: "bold",

}

const Square = (props) => {
    return (
        <button style={style} onClick={props.onClick}>{props.value}</button>
    )
}

export default Square;