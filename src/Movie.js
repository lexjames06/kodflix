import React from 'react'
import Cover from './Cover.js';
import { BrowserRouter, Route, Link } from 'react-router-dom'

export default function Movie(props) {
    return (
      <div className='movie-cover'>
        <Link to="/details"><img src={props.cover} alt={`${props.name} movie cover`} /></Link>
        <div className="movie-title">
          <h2>{`${props.name} (${props.year})`}</h2>
        </div>
      </div>
    );
  }