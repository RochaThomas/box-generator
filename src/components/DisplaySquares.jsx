import React from "react";

const DisplaySquares = (props) => {
    return (
        <fieldset>
            <legend>DisplaySquares.jsx</legend>
            <div className="dispSquares" style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>
                {
                    props.squares.map((square,i) => {
                        return <div style={{backgroundColor: square.color, height: square.size, width: square.size}} key={i}></div>
                    })
                }
            </div>
        </fieldset>
    );
}
export default DisplaySquares;