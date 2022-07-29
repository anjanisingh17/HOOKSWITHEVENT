import React, { useState } from 'react'
import './Accordian.css';
import questions from './api';
import MyAccordian from './MyAccordian';
import ReactPaginate from 'react-paginate';


function Accordian() {

 const [data, setData] = useState(questions);   
 const [currentPage, setCurrentPage] = useState(0);
 const [show,setShow] = useState({id:'',status:false});
  let currentPageData = [];
  const PER_PAGE = 3;
  let pageCount = 0;
const offset = currentPage * PER_PAGE;
const showAns = (id) =>{
  if(show.id != id){
    setShow({id, status : true})
  }else{
    setShow({id, status : !show.status})
  }
  console.log({id, status : !show.status})
}
function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
  }


  {
    pageCount = Math.ceil(data.length / PER_PAGE)
}
 return (
       <>
       <div className='accordian_mainDiv'>
            <h2 className='accordian_heading'>React Interview Question</h2>
        <section>
            {
                    currentPageData = data          
                    .slice(offset, offset + PER_PAGE).map((val)=>{
                   return(
<>              <div className='accordian_question_section'>


                   <h3 onClick={() => showAns(val.id)}><i>{(show.id === val.id && show.status) ?"-":"+"}</i>
                      <span > {val.question} </span>
                   </h3>


                   {(show.id === val.id && show.status) ? <MyAccordian key={val.id} {...val} /> : null}
                   </div>   
                   </>
                   )  
                   
                })  }
            
         </section> 
         <ReactPaginate
          previousLabel={"← Previous"}
          nextLabel={"Next →"}
          pageCount={pageCount}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          previousLinkClassName={"pagination__link"}
          nextLinkClassName={"pagination__link"}
          disabledClassName={"pagination__link--disabled"}
          activeClassName={"pagination__link--active"}
        />  
            </div>  
       </>

  )
}

export default Accordian;