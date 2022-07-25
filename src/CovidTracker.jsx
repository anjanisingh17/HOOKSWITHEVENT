import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';




function CovidTracker() {

const [exactdata,setvalue] = useState([]);

async function getCovidData(){
    const response = await fetch('https://data.covid19india.org/data.json');
    const data = await response.json();
    setvalue(data.statewise);   
    console.log(data.statewise);
}

    
useEffect(()=>{
      
     getCovidData();
   
    
},[])


  return (
    <>
        <h2><center>Covid Tracker</center></h2>
        <table className="table">
  <thead>
    <tr>
      <th scope="col">Sno</th>
      <th scope="col">State</th>
      <th scope="col">Confirmed</th>
      <th scope="col">Recovered</th>
      <th scope="col">Death</th>
    </tr>
  </thead>
  <tbody>

 {
        exactdata.map((val,index)=>{
            
           return(

            <>
          
              <tr key={index}>
                <td >{index}</td>
                <td>{val.state}</td>
                <td>{val.confirmed}</td>
                <td>{val.recovered}</td>
                <td>{val.deaths}</td>
              </tr>
        
            </>

           )   
          
       
            
            


        })
    
 }

 


  </tbody>
</table>

    </>    
  )
}


export default CovidTracker;    