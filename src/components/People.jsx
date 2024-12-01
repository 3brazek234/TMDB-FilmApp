import axios from 'axios';
import React from 'react'
import { useState , useEffect } from 'react';
import './people.css';
import { Link } from 'react-router-dom';
export default function People() {
  const imgsrc ='https://image.tmdb.org/t/p/w500';
  let [ people , setPeople]= useState([]);
  async function getPeople(){
    let data = await axios.get('https://api.themoviedb.org/3/trending/person/day?language=en-US&api_key=4e9cb7ba8e1cd4622ec904b6930440d7')
    setPeople(data.data.results);
  }
useEffect(()=>{  getPeople()  },[])
  return (
    <div>
          <div className="container">
         <div className="row p-4">
          {people.map((person , index)=> <div className='col-md-3'>
       <Link to={`/peopledetails/${person.id}`} >
       <figure className='code'>
         <img src={imgsrc+ person.profile_path} alt="" className='w-100 rounded' />
         <figcaption className='codek'>
          <h3> {person.name} </h3>
         </figcaption>
         </figure>      
       </Link>
          </div>
        )}
         </div>
          </div>
    </div>
  )
}
