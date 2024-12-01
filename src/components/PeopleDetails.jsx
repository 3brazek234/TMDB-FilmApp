import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import './peopledet.css'
export default function PeopleDetails() {
  let {id}= useParams();
    const imgsrc ='https://image.tmdb.org/t/p/w500';
    let [use , setUse]=useState([])
    async function peopleDet(id){
        let {data} = await axios.get(`https://api.themoviedb.org/3/person/${id}?language=en-US&api_key=4e9cb7ba8e1cd4622ec904b6930440d7`)
        setUse(data);
        console.log(data);
    }
    useEffect(()=>{peopleDet (id) },[]);
  return (
    <div>
    <div className="container count">
   
         <div className="row der">
          <div className="col-md-4">
        
           <img src={imgsrc + use.profile_path} alt="" className='w-100 rounded' />     
       
         </div>
         <div className="col-md-8 text ">
          <p> {use.biography} </p>
         </div>
         </div>
        
       
        
    </div>
    </div>
  )
}
