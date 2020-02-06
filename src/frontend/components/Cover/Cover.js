import React from 'react'
import Movie from '../Movie/Movie.js'
import GetCover from '../Cover-get/Cover-get.js'
import Header from '../Header/Header'
import { animated, useSpring } from 'react-spring'
import './Cover.css'

export default function Cover() {

    return (
        <div>
            <div>
                <Header />
            </div>
            <div className='movie-rows'>
                {
                    GetCover().map(movie => (
                        <Movie
                            key={movie.id}
                            id={movie.id}
                            name={movie.name}
                            year={movie.year}
                            cover={movie.cover} />
                    ))
                }
            </div>
        </div>
    );
}