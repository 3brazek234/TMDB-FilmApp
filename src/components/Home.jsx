import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './home.css';
export default function Home() {
  let [movies , setMovies]=useState([]);
  let [tv , setTv]=useState([]);
  let [people , setPeople]=useState([]);
  const imgsrc ='https://image.tmdb.org/t/p/w500';
   async function getMovies(){
    let res= await axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=4e9cb7ba8e1cd4622ec904b6930440d7`);
   setMovies(res.data.results.slice(0,10));
 }
 async function getTvData(){
  let res= await axios.get(`https://api.themoviedb.org/3/trending/tv/day?api_key=4e9cb7ba8e1cd4622ec904b6930440d7`);
 setTv(res.data.results.slice(0,10));

}
async function getPeopleData(){
  let res= await axios.get(`https://api.themoviedb.org/3/trending/person/day?api_key=4e9cb7ba8e1cd4622ec904b6930440d7`);
 setPeople(res.data.results.slice(0,10));
}
useEffect(()=>{
  getMovies()
  getPeopleData()
  getTvData()
},[])
  return (

      <>
      <div className="container mt-5">
        <div className="row mt-5">
          <div className="col-md-4">
            <h2>Trending <br />Movies <br />To Watch Now</h2>
            <p className='text-muted'>Lorem ipsum dolor sit amet. </p>
          </div>
       {movies.map((element)=> <div className='col-md-2'>
      <figure className='parent'>
      <img src={imgsrc + element.poster_path} alt='image-photo' className='w-100 rounded'/>
      <figcaption className='child'>
      <h3>{element.title}</h3>
      </figcaption>
      </figure>
       </div>)}
        </div>
        <div className="row">
          <div className="col-md-4">
            <h2>Trending <br />TV <br />To Watch Now</h2>
            <p className='text-muted'>Lorem ipsum dolor sit amet. </p>
          </div>
       {tv.map((element)=> <div className='col-md-2'>
      <figure className='parent'>
      <img src={imgsrc + element.poster_path} alt='image-photo' className='w-100 rounded'/>
      <figcaption className='child'>
      <h3>{element.name}</h3>
      </figcaption>
      </figure>
       </div>)}
        </div>
        <div className="row">
          <div className="col-md-4">
            <h2>Person <br />Movies <br />To Watch Now</h2>
            <p className='text-muted'>Lorem ipsum dolor sit amet. </p>
          </div>
       {people.map((element)=> <div className='col-md-2'>
      <figure className='parent'>
      <img src={imgsrc + element.profile_path} alt='image-photo' className='w-100 rounded'/>
      <figcaption className='child'>
      <h3>{element.name}</h3>
      </figcaption>
      </figure>
       </div>)}
        </div>
      </div>
      </>

  )
}
