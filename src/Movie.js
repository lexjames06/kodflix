import React from 'react'
import Cover from './Cover.js';

export default function Movie(props) {
    return (
      <div className='movie-cover'>
        <img src={props.cover} alt={`${props.name} movie cover`} />
        <div className="movie-title">
          <h2>{`${props.name} (${props.year})`}</h2>
        </div>
      </div>
    );
  }