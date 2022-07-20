import React, { useState } from 'react'
import Accordian from './Accordian'

const MyAccordian = (props) =>{

    const [show, setShow] = useState(false);
    
    return(
          <>
          <div className='accordian_question_section'>
                <h3 onClick={() => setShow(!show)}><i>{show?"-":"+"}</i>
                   <span> {props.question} </span></h3>
                {show && <p className='answer_div'>{props.answer}</p>} 
          </div>
  
            
          </>  
    )           
}

export default MyAccordian