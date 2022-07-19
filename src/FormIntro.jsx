import { useState } from 'react';
import './App.css';

function FormIntro() {

    const [val,setval] = useState(); 
    const [fulname,setFulname] = useState(); 
   
   
   function onChangeFunction(event){
     let userName = event.target.value;
     setval(userName);
   }

   function onSubmitFunction(){
     setFulname(val);
   }

    return(
        <>
         <div className='formIntroBody1'>
            <h1>Forms in React</h1>
            <h2>Hello {fulname}</h2>
            <input type='text' placeholder='Enter Your Name' value={val} onChange={onChangeFunction} />
            <br />
            <button onClick={onSubmitFunction}>Click me</button>
         </div>
        </>
    )
}

export default FormIntro;