import React from 'react'
import { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';


function MaterialUI() {
  
  const [val, setval] = useState(0);


  const IncrementFunction = ()=>{
        setval(val+1);
  }  

  const DecrementFunction = ()=>{
    if(val > 0){
        setval(val-1);
    }else{
        setval(0);
    }

  }  

  return (
    <>
       <div className='materialUI_outerDiv'>
          <h1>Material UI App</h1>
        <div className='materialUI_centerDiv'>          
            <h2>{val}</h2>
            <div className='button_div'>
                <div className='button_div1'>
                    <Button onClick={DecrementFunction}><DeleteIcon /></Button>
                </div>
                <div className='button_div2'>
                    <Button onClick={IncrementFunction}><AddIcon /></Button>
                </div>
            </div>
        </div>  
       </div>
   </> 
  )
}

export default MaterialUI;
