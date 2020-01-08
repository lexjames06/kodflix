import React from 'react'

export default function Movie(props) {
    return (
      <div className='movie-cover'>
        <img src={props.cover} alt={`${props.name} movie cover`} />
        <div className="movie-title">
          <h1>{`${props.name} (${props.year})`}</h1>
        </div>
      </div>
    );
  }