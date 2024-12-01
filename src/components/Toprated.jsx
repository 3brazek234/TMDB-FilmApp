import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './toprated.css'
import { Link } from 'react-router-dom';
export default function Toprated() {
  let pages =[1,2,3,4,5,6,7]
  const imgsrc ='https://image.tmdb.org/t/p/w500';
  let [info , setInfo]= useState([])
  async function getTop(number){
    let res= await axios.get(`https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=${number}&api_key=4e9cb7ba8e1cd4622ec904b6930440d7`)
    setInfo(res.data.results)
  }
  useEffect(()=>{  getTop(1); },[])
  return (
    <div >
      <div className="row p-4">
        {info.map((element )=> <div className='col-md-2'>
    <figure className='big'>
    <img src={imgsrc+element.poster_path} alt={element.overview} className='w-100 rounded'/>
    <figcaption className='small'>
      <h3>
        {element.title}
      </h3>
    </figcaption>
    </figure>
        </div>)}
      </div>
      <nav aria-label="Page navigation example mb-4">
  <ul className="pagination d-flex justify-content-center m-4">
    <li className="page-item">
      <a className="page-link" href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>
    {pages.map((number)=><li className="page-item" onClick={()=>{ getTop(number)}}>
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
