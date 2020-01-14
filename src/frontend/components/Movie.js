import React from 'react'
import { Link } from 'react-router-dom'
import './Movie.css'

export default function Movie(props) {
    return (
      <div className='movie-cover'>
        <Link to={props.id}><img src={props.cover} alt={`${props.name} movie cover`} /></Link>
        <div className="title-overlay">
          <h2>{`${props.name} (${props.year})`}</h2>
        </div>
      </div>
    );
  }