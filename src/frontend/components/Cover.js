import React from 'react'
import Movie from './Movie.js'
import GetCover from './Cover-get.js'
import './Cover.css'

export default function Cover(props) {
    return (
        <div>
            <div className='movie-rows'>
                {
                    GetCover().map(movie => (
                        <Movie
                        key = { movie.id }
                        id = { movie.id }
                        name = { movie.name }
                        year = { movie.year }
                        cover = { movie.cover } />
                    ))
                }
            </div>
        </div>
    );
}