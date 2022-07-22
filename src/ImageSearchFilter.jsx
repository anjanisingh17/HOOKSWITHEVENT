import React, { useState } from 'react'
import './App.css';
import RandomImage from './RandomImage';
function ImageSearchFilter() {
 
const [inputVal, setInputVal] = useState('');

const inputTextFun = (event)=>{
    setInputVal(event.target.value);  
}

  return (
    <>
        <h1>Testing</h1>
        <div className='image_search_outer_div'>
            <input type='text' placeholder='Search Any Image' value={inputVal} onChange={inputTextFun} />
        </div>
        <div className='randomImageDiv'>
            {/* {(inputVal)?<RandomImage name={inputVal}/>:null} */}
            <RandomImage name={inputVal}/>
        </div>
    </>   

  )
}

export default ImageSearchFilter

