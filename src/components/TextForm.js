import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('');
    const handleUpClick =()=>{
        // console.log("Uppercase was clicked" + text);
        let newText=text.toUpperCase();
        setText(newText)
    }
     
    const handleOnChange =(event)=>{
        // console.log("on change");
        setText(event.target.value)
    }

    const handleLoClick =()=>{
        let newText=text.toLowerCase();
        setText(newText)
    }

    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
      }

      const handleClearClick=()=>{
        let newText=('')
        setText(newText)
      }
    return (
        <>
        <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
            <h1 >{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} id="myBox" rows="9"></textarea>
            </div>
            <button className="btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
            <button className="btn-primary mx-2" onClick={handleLoClick}>Convert to LowerCase</button>
            <button className="btn-primary mx-2" type="submit" onClick={speak}>Speak</button>
            <button className="btn-primary mx-2" onClick={handleClearClick}>Clear</button>
        </div>
        <div className="container my-2"style={{color: props.mode==='dark'?'white':'black'}}>
            <h2>Your text summary</h2>
            <p><p>{text.trim() === '' ? 0 : text.match(/\S+/g).length} words and {text.replace(/\s+/g, '').length} characters</p></p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something in text are to preview it here"}</p>
        </div>
        </>
    )
}