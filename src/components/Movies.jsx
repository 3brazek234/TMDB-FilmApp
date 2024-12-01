import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './movies.css'
export default function Movies() {
  let pages =[1,2,3,4,5,6,7]
  const imgsrc ='https://image.tmdb.org/t/p/w500';
  let [ movie , setMovie]= useState([]);
  async function getList(num){
    let data = await axios.get(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${num}&sort_by=popularity.desc&api_key=4e9cb7ba8e1cd4622ec904b6930440d7`)
    setMovie(data.data.results);
  }
  useEffect(()=>{   getList(1) },[])

  return (
    <div>
      <div className="container">
      <div className="row p-4">
        {movie.map((elem)=> <div className='col-md-2 '>
         <Link to={`/details/${elem.id}`}>
         <figure className='big-contain'>
            <img src={imgsrc + elem.poster_path} className='w-100' alt={elem.overview} />
            <figcaption className='contain'>
              <h3>{elem.title}</h3>
            </figcaption>
          </figure></Link>
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
    {pages.map((resu)=><li className="page-item" onClick={()=>{ getList(resu)}}>
      <a className='page-link'>{resu}</a>
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
