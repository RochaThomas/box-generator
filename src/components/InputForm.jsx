import React, {useState} from "react";

const InputForm = (props) => {

    const [inputSquare, setInputSquare] = useState({
        inputColor: "",
        inputSize: ""
    });

    const handleAllInputs = (e) => {
        setInputSquare({
            ...inputSquare,
            [e.target.name]: e.target.value
        })
    }

    const createBox = (e) => {
        e.preventDefault();
        props.addSquare({
            color: inputSquare.inputColor,
            size: inputSquare.inputSize + 'px'
        });
        setInputSquare({
            inputColor: "",
            inputSize: ""
        });
    }

    return (
            <form onSubmit={createBox}>
                <div className="inputdiv">
                    <label htmlFor="inputColor">Color: </label>
                    <input type="text" name="inputColor" id="inputColor" onChange={(e) => handleAllInputs(e)} value={inputSquare.inputColor}/>
                </div> 
                <div className="inputdiv">
                    <label htmlFor="inputSize">Size: </label>
                    <input type="text" name="inputSize" id="inputSize" onChange={(e) => handleAllInputs(e)} value={inputSquare.inputSize}/>
                </div> 
                <input type="submit" value="Add"/>
            </form>
    );
}
export default InputForm;