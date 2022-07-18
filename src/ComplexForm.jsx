import { useState } from 'react';
import './App.css';

function ComplexForm() {

    const [fullname,setFullName] = useState({
        fname : '',
        lname : ''
    }); 

   function onSubmitFunction(e){
      e.preventDefault();
      alert('form submitted');
    }       
   
   function onChangeFunction(event){
     let userName = event.target.value;
     console.log(userName);
     console.log(event.target.name);

     const value = event.target.value;
     const name = event.target.name;

      setFullName((preValue)=>{
        console.log(preValue);

        if(name === 'fName'){
           return{
            fname : value,
            lname : preValue.lname
           }
        }else if(name === 'lName'){
          return{
            fname : preValue.fname,
            lname : value
           }
        }

      })

   }


    return(
        <>
         <div className='formIntroBody'>
            <h1>Login Form in React</h1>
            <form onSubmit={onSubmitFunction}>
            <h2>Hello {fullname.fname}  {fullname.lname} </h2>
            <input type='text' placeholder='Enter Your First Name' name='fName' 
            value={fullname.fname}  
            onChange={onChangeFunction} />
            <input type='text' placeholder='Enter Your Last Name' name='lName'
             value={fullname.lname} 
            onChange={onChangeFunction} />
            
            <br />
            <button>Click me</button>
            </form>
         </div>
        </>
    )
}

export default ComplexForm;