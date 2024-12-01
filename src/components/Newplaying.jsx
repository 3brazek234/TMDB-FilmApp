import React, { useEffect, useState } from 'react'
import axios from 'axios'
export default function Newplaying() {
  let pages =[1,2,3,4,5,6,7]
  const imgsrc ='https://image.tmdb.org/t/p/w500';
  let [ now , setNow]= useState([]);
  async function getNow(number){
    let data = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${number}&api_key=4e9cb7ba8e1cd4622ec904b6930440d7`)
    setNow(data.data.results);
  }
  useEffect(()=>{   getNow(1) },[])

  return (
    <div>
      <div className="container">
      <div className="row p-4">
        {now.map((elem)=> <div className='col-md-3 '>
         
         <figure className='big-contain'>
            <img src={imgsrc + elem.backdrop_path} className='w-100' alt={elem.overview} />
            <figcaption className='contain'>
              <h3>{elem.title}</h3>
            </figcaption>
          </figure>
        </div> )}
      </div>
 </div>
 <nav aria-label="Page navigation example mb-4">
  <ul className="pagination d-flex justify-content-center m-4">
    <li className="page-item">
      <a className="page-link" href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>
    {pages.map((number)=><li className="page-item" onClick={()=>{ getNow(number)}}>
      <a className='page-link'>{number}</a>
    </li>
)}
    <li className="page-item">
      <a className="page-link" href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
  </ul>
</nav>
    </div>
  )
}
