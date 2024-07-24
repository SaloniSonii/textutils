import React,{useState} from 'react'

export default function TextForm(props) {
    const HandleUpClick=()=>{
        let newText = text.toUpperCase();
        setText(newText);
    }
    const HandleLoClick=()=>{
        let newText = text.toLowerCase();
        setText(newText);
    }
    const HandleClearClick=()=>{
      setText("");
  }
  const handleCopy =()=>{
    var text =document.getElementById('myBox');
    text.select();
    navigator.clipboard.writeText(text.value);
  }
  const handleExtraSpaces= () =>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
  }
    const handleOnChange = (event)=>{
        setText(event.target.value);
    }

    const[text,setText] = useState("");
  return (
    <>
    <div className='container' style={{color:props.mode ==='light'?'#042743':'white'}}> 
    <h1>{props.heading}</h1>    
      <div className="mb-3">
           <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode ==='light'?'white':'grey',color :props.mode ==='light'?'#042743':'white'}} id="myBox" rows="8"></textarea>
           </div>
           <button className="btn btn-primary mx-2" onClick={HandleUpClick}>Convert to Uppercase</button>
           <button className="btn btn-primary mx-2" onClick={HandleLoClick}>Convert to Lowercase</button>
           <button className="btn btn-primary mx-2" onClick={HandleClearClick}>Clear Text</button>
           <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
           <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3" style={{color:props.mode ==='light'?'#042743':'white'}}>
        <h2>Your Text summary</h2>
        <p>{(text.split(" ")).length} words and {text.length} Characters</p>
        <p>{0.008 *(text.split(" ")).length} minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text :"Enter something in the textbox above to preview it here"}</p>
    </div>
    </>
  )
}
