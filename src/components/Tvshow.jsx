import axios from 'axios'
import React, {  useEffect, useState } from 'react';
import './tvshow.css'
export default function Tvshow() {
  const imgsrc = "https://image.tmdb.org/t/p/w500";
  let [tv , setTv]= useState([]);
  async function getTv(){
    let {data} = await axios.get(`https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc&api_key=4e9cb7ba8e1cd4622ec904b6930440d7`)
    setTv(data.results);
    } 
    useEffect(()=>{  getTv() },[]);
  return (
    <div>
      <div className="container p-5">
        <div className="row">
          {tv.map((item , index)=> <div className='col-md-4' key={index}>
            <figure className='parent-tv'>
              <img src={imgsrc +item.backdrop_path} alt="" className='w-100 rounded'/>
              <figcaption className='child-tv'>
                <h3> {item.name} </h3>
              </figcaption>
            </figure>
          </div> )  }
        </div>
      </div>
      
    </div>
  )
}
