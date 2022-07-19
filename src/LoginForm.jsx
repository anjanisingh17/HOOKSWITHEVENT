import { useState } from 'react';
import './App.css';

function LoginForm() {

    const [name,setval] = useState(); 
    const [lastname,setLastname] = useState(); 

    const [fulname,setFulname] = useState(); 

    const [lastNameNew,setlastNameNew] = useState(); 
   
   
   function onChangeFunction(event){
     let userName = event.target.value;
     setval(userName);
   }

   function onSubmitFunction(e){
    e.preventDefault();
     setFulname(name);
     setlastNameNew(lastname);
   }

   function onChangeFunction2(event){
    let lastName = event.target.value;
    setLastname(lastName);
  }

    return(
        <>
         <div className='formIntroBody2'>
            <h1>Login Form in React</h1>
            <form onSubmit={onSubmitFunction}>
            <h2>Hello {fulname} {lastNameNew}</h2>
            <input type='text' placeholder='Enter Your First Name' value={name} onChange={onChangeFunction} />
            <input type='text' placeholder='Enter Your Last Name' value={lastname} onChange={onChangeFunction2} />
            
            <br />
            <button>Click me</button>
            </form>
         </div>
        </>
    )
}

export default LoginForm;