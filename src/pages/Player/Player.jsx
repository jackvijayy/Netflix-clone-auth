import React, { useEffect, useState } from 'react'
import './Player.css'
import backarrow from '../../assets/back_arrow_icon.png'
import { Link, useParams } from 'react-router-dom'

export const Player = () => {
  

  const{id}=useParams();

  const [apidata,setapidata]=useState({
    name:"",
    key:"",
    published_at:"",
    type:"",

  })
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MDY2ZjVjMzdkNTA1NWMwM2RlNDBmYjZlZjYwZjg0MSIsInN1YiI6IjY2NWMyMjY5N2E3YzRiZmNiOGU4MWEzYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sVaOSe5pXW5nl4pdAwZXhiAU4OOWD15wKvuMOy8MKzs'
    }
  };
   useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(response => response.json())
    .then(response => setapidata(response.result[0]))
    .catch(err => console.error(err));
   },[])
  return (
    <div className='Player'>
      <Link to={'/'}><img src={backarrow} alt="" /></Link>
      <iframe src={`https://www.youtube.com/embed/${apidata.key}`} frameBorder='0' width='90%' 
      height='90%' title='trailer' allowFullScreen></iframe>
      <div className='player-info'>
        <p>{apidata.published_at}</p>
       <p>{apidata.name}</p>
       <p>{apidata.type}</p>
       
      </div>
      

    </div>
  )
}
