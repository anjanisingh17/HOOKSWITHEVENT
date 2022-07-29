import React from 'react'
import { useState } from 'react'

const cssProperty = {
                      color:'#fff',
                      background:'green',
                      padding:'10px'
                    };

function TextUtility() {

  let [textvalue,setTextValue] = useState();   
  const [lettercount,setLettercount] = useState(0);
  const [wordcount,setWordCount] = useState(0);
  

const setValueFunction = (e)=>{
    setTextValue(e.target.value)
    const value = e.target.value.length;
    setLettercount(value);

    setWordCount(e.target.value.split(' ').length);
      
}

const lowerCaseFunction = (textvalue)=>{
   let demo = textvalue.toLowerCase();
   setTextValue(demo);
    
}
const upperCaseFunction = (textvalue)=>{
  let demo = textvalue.toUpperCase();
  setTextValue(demo);
   
}


const copyTextFunction = ()=>{
 let copyTextarea = document.querySelector('.mytextarea'); 
 copyTextarea.select();
 navigator.clipboard.writeText(copyTextarea.value);

}



const removeSpacesFunction = (textvalue)=>{
  const demo  = textvalue.replace(/\s+/g, ' ').trim();
  setTextValue(demo);
  setWordCount(demo.split(' ').length);
  setLettercount(demo.length);

}


    return (        
    <>
      <div className='container'>
       <h2 className='text-primary'><center>TextUtility - Convert text lowercase to uppercase, uppercase to lowercase</center></h2>
       <textarea className='form-control mx-5 mytextarea' rows='15' value={textvalue} onChange={setValueFunction} >{textvalue}</textarea>
       <div className='button_div my-5 mx-5'>
       <button className='mx-2 px-5 btn-info' onClick={()=>lowerCaseFunction(textvalue)}>LowerCase</button>
       <button className='mx-2 px-5 btn-primary' onClick={()=>upperCaseFunction(textvalue)}>UpperCase</button>
       <button className='mx-2 px-5 btn-primary' onClick={()=>copyTextFunction()}>CopyText</button>
       <button className='mx-2 px-5 btn-primary' onClick={()=>removeSpacesFunction(textvalue)}>RemoveSpaces</button>
       </div>
       <p><b>Word Count is:</b> <span style={cssProperty}>{ (textvalue) ? wordcount :lettercount }</span><b>Character Count is:</b> <span style={cssProperty}>{lettercount}</span></p>
       <p>Preview: <br /> <b>{textvalue?textvalue:'Write to something to preview!'}</b></p> 
      </div>     

    </>
    
  )
}

export default TextUtility