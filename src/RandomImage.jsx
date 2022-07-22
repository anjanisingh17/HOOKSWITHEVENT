import React from 'react'


function RandomImage(props) {

  const imgsrc = `https://source.unsplash.com/720x1080/?${props.name}`;
  const imgsrc2 = `https://source.unsplash.com/1020x1080/?${props.name}`;
  const imgsrc3 = `https://source.unsplash.com/900x1260/?${props.name}`;

    
 return (
        <>
           <img src={imgsrc} alt='myintrastruct1' className='randomimage1' />
           <img src={imgsrc2} alt='myintrastruct21' className='randomimage2' />
           <img src={imgsrc3} alt='myintrastruct3' className='randomimage3' />
      
        </>
  )
}

export default RandomImage;