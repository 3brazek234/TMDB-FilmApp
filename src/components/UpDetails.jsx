import axios from 'axios'
import React, {  useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import './details.css'
export default function UpDetails() {
    const {more}= useParams();
    const imgsrc = "https://image.tmdb.org/t/p/w500";
    let [team , setTeam]= useState({});
    async function getDetails(id) {
        let details= await axios.get(`https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=4e9cb7ba8e1cd4622ec904b6930440d7`);
        setTeam(details.data);}
          useEffect(()=>{  getDetails(more)},[])
    return ( 
    <div className="container movdetails mt-5">
        <header className="header">
      <div className="header-content">
        
        <img
          src={imgsrc+team.poster_path}
          alt="Movie Poster"
          className="poster"
        /> 
        <div className="movie-info">
          <h1>{team.title} (2012)</h1>
          <p className="genre">Reality</p>
          <div className="user-score" >
            <span>68%</span>
            <p>User Score</p>
          </div>
          <p className="overview">
           {team.overview}
          </p>
        </div>
      
   
        </div>
        
       
    </header>
        <div className="row">
        </div>
    </div>

    )}

 

//   <div className='container '>
// <div className="card mb-3">
// <div className="row g-0">
//   <div className="col-md-6">
//     <img src={imgsrc+nod.poster_path} className="img-fluid rounded-start w-100" alt="..."/>
//   </div>
//   <div className="col-md-6">
//     <div className="card-body">
//       <h5 className="card-title">Card title</h5>
//       <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//       <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
//     </div>
//   </div>
// </div>
// </div>
//    </div>