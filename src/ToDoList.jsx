import { useState } from 'react';
import './App.css';
import ToDoListComponent from './ToDoListComponent';

function ToDoList() {

    const [inputlist, setItems] = useState('');
    const[itemList, setItemList] = useState([]);

    const listitems = (event)=>{
      setItems(event.target.value);          
    }

    const showitemList = ()=>{
       setItemList((old_item_list)=>{
         return [...old_item_list, inputlist];  
              
       });
       setItems("");      
    }
  
    const deleteItems = (id)=>{
     setItemList((old_item_list)=>{
        return old_item_list.filter((arrElement, index)=>{
             return index !== id
        });             
      });
    }    

    return(        
       <>
       <div className='todolistOuterdiv'>
       <h1><center>To Do List App</center></h1>
        <div className='tolist_main_div'>
            <div className='tolist_center_div'>
                <h1>To Do List</h1>
                <input
                     type='text'
                     placeholder='Add your items'
                     value= {inputlist}
                     onChange={listitems}
                />
                <button onClick={showitemList}>+</button>
                <ul>
                    {/* <li>{inputlist}</li> */}
                   { itemList.map((value,index)=>{
                      return <ToDoListComponent
                               key = {index}
                               id = {index}  
                               text = {value}
                               onSelect = {deleteItems}
                             />
                    })}
                </ul>
            </div>
        </div>
        </div>
       </>
    )

}

export default ToDoList;