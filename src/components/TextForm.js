import React, {useState} from 'react'


export default function TextForm(props) {
    const upperCase = ()=>{
        // console.log("Uppercase was Clicked: " + text)
        let newText = text.toUpperCase();
        setText(newText )
        props.showAlert("Converted to Upper Case!", "success");
    }
   const toSentenceCase = () => {
    if (!text) return;
    const sentences = text.split('.').map(sentence => {
        sentence = sentence.trim();
        if (sentence.length === 0) return '';
        return sentence.charAt(0).toUpperCase() + sentence.slice(1).toLowerCase();

    });
    const newText = sentences.join('. ');
    setText(newText);
    props.showAlert("Converted to Sentence Case.", "success");
};
    const lowerCase = ()=>{
        let newText = text.toLowerCase();
        setText(newText )
        props.showAlert("Converted to Lower Case.", "success");
    }
    const copyText = () => {
    if (navigator.clipboard && window.isSecureContext) {
        // Navigator clipboard API method
        navigator.clipboard.writeText(text)
            .then(() => {
                props.showAlert("Text Copied!", "success");
            })
            .catch(err => {
                props.showAlert("Failed to copy text.", "danger");
            });
    } else {
        // Fallback for older browsers (not typical on modern mobiles)
        const textArea = document.createElement("textarea");
        textArea.value = text;
        // Avoid scrolling to bottom
        textArea.style.position = "fixed";
        textArea.style.top = 0;
        textArea.style.left = 0;
        textArea.style.opacity = 0;
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();

        try {
            document.execCommand("copy");
            props.showAlert("Text Copied!", "success");
        } catch (err) {
            props.showAlert("Failed to copy text.", "danger");
        }

        document.body.removeChild(textArea);
    }
};


    const removeExtraSpaces = () =>{
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
        props.showAlert("Extra space has been Removed!", "success");
    }
    const clearText = ()=>{
        let newText = '';
        setText(newText )
        props.showAlert("Whole text has been Removed!", "success");

    }
    
     const handleOnChange = (event)=>{
        // console.log(" On Change ")
        setText(event.target.value)
        
    }
    
    const [text, setText] = useState('');
// text = "new text"; //Wrong way to change state.
// setText("New text."); //Correct way to change state.
  return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'white':'#272152'}}>
         <h1 className='mb-4'>{props.heading}</h1>
        <div className="mb-3">
           
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'black':'white',color: props.mode==='dark'?'white':'black' }} id="myBox" rows="12"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary m-1" style={{backgroundColor: props.mode==='dark'?'black':'lightblue',color: props.mode==='dark'?'white':'black' }}  onClick={upperCase}  >Convert to UPPERCASE</button>
        <button disabled={text.length===0} className="btn btn-primary m-1" style={{backgroundColor: props.mode==='dark'?'black':'lightblue',color: props.mode==='dark'?'white':'black' }}  onClick={toSentenceCase} >Convert to sentencecase</button>
        <button disabled={text.length===0} className="btn btn-primary m-1" style={{backgroundColor: props.mode==='dark'?'black':'lightblue',color: props.mode==='dark'?'white':'black' }}  onClick={lowerCase} >Convert to lowercase</button>
        <button disabled={text.length===0} className="btn btn-primary m-1" style={{backgroundColor: props.mode==='dark'?'black':'lightblue',color: props.mode==='dark'?'white':'black' }}  onClick={copyText} > Copy Text </button>
        <button disabled={text.length===0} className="btn btn-primary m-1" style={{backgroundColor: props.mode==='dark'?'black':'lightblue',color: props.mode==='dark'?'white':'black' }}  onClick={removeExtraSpaces} >Remove Extra Space </button>
        <button disabled={text.length===0} className="btn btn-primary m-1" style={{backgroundColor: props.mode==='dark'?'black':'lightblue',color: props.mode==='dark'?'white':'black' }}  onClick={clearText} >Clear Text</button>
    </div>
    <div className="container my-2"  style={{color: props.mode==='dark'?'white':'black'}}>
        <h2>Your text summery</h2>
    <p>
        <b>{text.trim() === "" ? 0 : text.trim().split(/\s+/).length}</b> words,&nbsp;
        <b>{text.length}</b> characters,&nbsp;
        <b>{text.trim() === "" ? 0 : text.split(/[.!?]+/).filter(sentence => sentence.trim().length > 0).length}</b> sentences.
    </p>
        <p><b>{0.015 * (text.trim() === "" ? 0 : text.trim().split(/\s+/).length)}</b> Minutes you will take to read the whole content.</p>
        <h2>Review</h2>
        <p>{text.length>0?text: "Enter somthing in the box to preview it here."}</p>
    </div>
    </>
  )
}
