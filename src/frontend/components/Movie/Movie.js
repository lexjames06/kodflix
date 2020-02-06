import React from 'react'
import { Link } from 'react-router-dom'
import './Movie.css'

export default function Movie({ id, cover, name, year }) {
  let url = `/${id}`;
  return (
    <div className='movie-cover-container'>
      <div className='movie-cover'>
        <Link to={url}><img src={cover} alt={`${name} movie cover`} /></Link>
        {/* <div className="title-overlay">
          <h2>{`${name} (${year})`}</h2>
        </div> */}
      </div>
      <div className='movie-wall'>
        <div className="title-overlay">
          <h2>{`${name} (${year})`}</h2>
        </div>
      </div>
    </div>
  );
}