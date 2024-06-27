import { useState } from "react";

export default function Uppercase(props) {
    const [text, setText] = useState("Enter text here");
    const [color, setColor] = useState("blue");

    const handleUpClick = (event) => {
        event.preventDefault();
        console.log("Uppercase was clicked");
        let newTxt = text.toUpperCase();
        setText(newTxt);
        props.showAlert("Converted Sucessfully In uppercase")
       
    };

    const handletoClick = (event) => {
        event.preventDefault();
        console.log("Lowercase was clicked");
        let newTxt = text.toLowerCase();
        setText(newTxt);
        props.showAlert("Converted Sucessfully In lowercase")
    };

    const handleclearClick = (event) => {
        event.preventDefault();
        console.log("Clear text was clicked");
        setText("");
        props.showAlert("clear sucessfully")
    };

    const handleColorChange = (event) => {
        event.preventDefault();
        console.log("Color change was clicked");
        let newColor = color === "black" ? "blue" : "black";
        setColor(newColor);
    };

    const handleFontCopy = () => {
        var textElement = document.getElementById('mybox');
        textElement.select();
        navigator.clipboard.writeText(textElement.value);
        console.log("Text copied to clipboard");
    };

    const handleOnChange = (event) => {
        console.log("Onchange");
        setText(event.target.value);
    };

    return (
        <>
            <div className='container'>
                <h1>Lowercase To Uppercase Translator</h1>
                <div className="mb-3">
                    <textarea
                        className="form-control"
                        value={text}
                        onChange={handleOnChange}
                        id="mybox"
                        rows="8"
                        style={{ color: color }}
                    ></textarea>
                </div>
                <button type="button" className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button type="button" className="btn btn-primary mx-1" onClick={handletoClick}>Convert to Lowercase</button>
                <button type="button" className="btn btn-primary mx-1" onClick={handleclearClick}>Clear Text</button>
                <button type="button" className="btn btn-primary mx-1" onClick={handleColorChange}>Change Font Color</button>
                <button type="button" className="btn btn-primary mx-1" onClick={handleFontCopy}>Copy Text</button>
            </div>
            <div className="container">
                <h1>Your Text Summary</h1>
                <p>{text.split(/\s+/).filter((element) => element.length !== 0).length} words and {text.length} characters</p>
                <p>{(0.008 * text.split(/\s+/).filter((element) => element.length !== 0).length).toFixed(2)} Minutes read</p>
                <h2>Preview</h2>
                <p style={{ color: color }}>{text}</p>
            </div>
        </>
    );
}
