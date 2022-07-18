import { useState } from 'react';
import './App.css';

function DigitalClock() {

    let curtime = new Date().toLocaleTimeString();  
    const [curval, setval] = useState(curtime);
    
      const myTimerFun = ()=>{  
        curtime = new Date().toLocaleTimeString();  
        setval(curtime);       
      }
    
     setInterval(myTimerFun, 1000);
    
      return(
        <>
        <div className='DigitalClockBody'>
        <h1> Digital Clock</h1>
        <h1>{curval}</h1>
        {/* <button onClick={myTimerFun}>Click here</button> */}
        </div>
        </>
      );
    }


 export default DigitalClock;

