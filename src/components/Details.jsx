import axios from 'axios'
import React, {  useState } from 'react'
import { useParams } from 'react-router-dom';
import './details.css'
export default function Details() {
    const {id}= useParams();
    const imgsrc = "https://image.tmdb.org/t/p/w500";
    let [team , setTeam]= useState({});
    async function getDetails(id) {
        let details= await axios.get(`https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=4e9cb7ba8e1cd4622ec904b6930440d7`);
        setTeam(details.data);}
    getDetails(id)
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
    
//     <div className="container p-4 vh-100">
//     <h1 className='text-center'> {team.original_title} </h1>
//     <div className="row">
//         <div className="col-md-5">
//             <img src={imgsrc +team.poster_path} className='w-75' />
//         </div>
//         <div className="col-md-7">
//             <p className='m-4'> {team.overview} </p>
//         </div>
//     </div>
// </div>
    