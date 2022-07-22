import React from 'react'
import { saveAs } from "file-saver";


function RandomImage(props) {

  const imgsrc = `https://source.unsplash.com/720x1080/?${props.name}`;
  const imgsrc2 = `https://source.unsplash.com/1020x1080/?${props.name}`;
  const imgsrc3 = `https://source.unsplash.com/900x1260/?${props.name}`;
//   const alttext = props.name + " image";  

    const hrefname = imgsrc+'.jpg';
    console.log(imgsrc);
    
 return (
        <>
           <img src={imgsrc} alt='image' className='randomimage1' />
           <img src={imgsrc2} alt='image2' className='randomimage2' />
           <img src={imgsrc3} alt='image3' className='randomimage3' />
      
        </>
  )
}

export default RandomImage;