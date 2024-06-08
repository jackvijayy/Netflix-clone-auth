import React, { useEffect, useRef, useState } from 'react'
import './Titlecard.css'
import cards_data from '../../assets/cards/Cards_data'
import { Link } from 'react-router-dom'

export const Titlecard = ({title,category}) => {

  const [apidata,setapidata]=useState([])
 const cardsref=useRef();
 const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MDY2ZjVjMzdkNTA1NWMwM2RlNDBmYjZlZjYwZjg0MSIsInN1YiI6IjY2NWMyMjY5N2E3YzRiZmNiOGU4MWEzYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sVaOSe5pXW5nl4pdAwZXhiAU4OOWD15wKvuMOy8MKzs'
  }
};

 const handlewheel = (event)=>{
  event.preventDefault();
  cardsref.current.scrollLeft += event.deltaY;

 }
 useEffect(()=>{
  
fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
.then(response => response.json())
.then(response => setapidata(response.results))
.catch(err => console.error(err));



  cardsref.current.addEventListener('wheel',handlewheel)

 },[])

  return (
    <div className='titlecards'>
      <h2>{title?title:"Popular On Netflix"}</h2>
      <div className='card-list' ref={cardsref}>
       {apidata.map((card,index)=>{
        return <Link to={`/player/${card.id}`}><div className='card' key={index}>
          <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt="" />
          <p>{card.original_title}</p>

        </div>
          </Link>
       })}

      </div>

    </div>
  )
}
