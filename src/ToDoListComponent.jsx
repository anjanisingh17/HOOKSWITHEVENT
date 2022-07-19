import React from 'react';
import './App.css';


const ToDoListComponent = (props) => {
    return (
      <>
        <div className='todolist_li_div'>             
          <li> <span 
                    className='todolist_cross_sign'
                    onClick= {()=>{
                            props.onSelect(props.id)
                         }}
                 >X</span>{props.text}</li>
        </div>
      </>
    )
}

export default ToDoListComponent;