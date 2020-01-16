import React from 'react'
import Movie from './Movie.js'
import GetCover from './Cover-get.js'
import Header from './Header'
import { animated, useSpring } from 'react-spring'
import './Cover.css'

export default function Cover() {
    const props1 = useSpring({
        from: {
            opacity: 0,
            background: 0,
            transform: 'translate3d(10%,0,0)'
        },
        to: {
            opacity: 1,
            transform: 'translate3d(0,0,0)'
        },
        config: {
            duration: 500
        }
    });

    return (
        <div>
            <div>
                <Header />
            </div>
            <animated.div
                style={props1}
                className=""
            >
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
            </animated.div>
        </div>
    );
}