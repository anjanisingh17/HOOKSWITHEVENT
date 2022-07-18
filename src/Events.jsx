import { useState } from 'react';
import './App.css';

function Events() {

   const colorName = 'orange';

   let [bgcolor, setColorVal] = useState(colorName);
   let [name, setName] = useState('Click here to change color');
   let [btnbg,setBtnBg ] = useState('#000');
   const bgChangeFunction =()=>{
        let newBg = 'green';
        let newBtnBg = 'DodgerBlue';
        setColorVal(newBg);
        setName('Color Changed Successfully 😄');
        setBtnBg(newBtnBg);
   }

    return(
        <>
         <div className='EventsBody'>
           <h1> <center>Events Handling </center></h1>
           <div style={{backgroundColor:bgcolor}}>
               <button onClick={bgChangeFunction} style={{backgroundColor:btnbg}}>{name}</button>
           </div>
         </div> 
        </>
    )
}

export default Events;