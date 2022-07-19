import React,{useState} from 'react'

export default function TextForm(props) {
   
   
    
   
    const handleclick=()=>{
      console.log(text);
      
      setText(text.toUpperCase()  );
  }
    const handleonchange=(event)=>{
      setText(event.target.value);
    } 
    const [text,setText]=useState('Enter text here');
 return (
    <>
 
<div className="mb-3 mx-5" style={props.mystyle}>
<h1 className="my-3" style={props.mystyle}>{props.heading}</h1>
  <textarea className="form-control my-3" style={{backgroundColor:props.mystyle.color==='white'?'black':'white',color:props.mystyle.color==='white'?'white':'black'}}  id="mybox" onChange={handleonchange}value={text} rows="8"></textarea>
  <button className="btn btn-primary " onClick={handleclick}>convert to uppercase</button>
  <h1>Text Summary</h1>
  <p >{text.split(" ").length} words and {text.length} characters</p>
  <p>{0.008 * text.split(" ").length} Minutes to read</p>
  <h2>Preview :</h2>
  <p>{text}</p>
</div>

    </>
  )
}
