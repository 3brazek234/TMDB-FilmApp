import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function Upcoming() {
  let pages =[1,2,3,4,5,6,7]
  let [ups , setUps]=useState([])
  const imgsrc ='https://image.tmdb.org/t/p/w500';
  async function upData(number){
    let {data} = await axios.get(`https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=${number}&api_key=4e9cb7ba8e1cd4622ec904b6930440d7`)
    setUps(data.results);
    console.log(ups)
  }
  useEffect(()=>{upData(1) },[])
  return (
    <div className='container'>
      <div className="row p-4 ">
      {ups.map((item , index)=><div className="col-md-4 p-3 " key={index}>
      <div className="card">
  <img src={imgsrc + item.backdrop_path} className="card-img-top " alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{item.title}</h5>
    <p className="card-text">{item.release_date}</p>
    <Link to={`/upDetails/${item.id}`} class="btn btn-primary">More Details</Link>
    
  </div>
</div> 
      </div>)}
</div>
<nav aria-label="Page navigation example mb-4">
  <ul className="pagination d-flex justify-content-center m-4">
    <li className="page-item">
      <a className="page-link" href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>
    {pages.map((number)=><li className="page-item" onClick={()=>{ upData(number)}}>
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


