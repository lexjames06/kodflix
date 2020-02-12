import React from 'react'
import Movie from '../Movie/Movie.js'
import Header from '../Header/Header'
import './Cover.css'

export default class Cover extends React.Component {

    constructor() {
        super();
        this.state = { shows: [], loaded: false };
    }

    componentDidMount() {
        fetch('/rest/movies')
            .then(response => response.json())
            .then(shows => this.setState({ shows: shows }))
            .then(() => this.setState({ loaded: true }));
    }

    content() {
        let { shows } = this.state;
        return (
            <div>
                <div>
                    <Header />
                </div>
                <div className='movie-rows'>
                    {
                        shows.map(movie => (
                            <Movie
                                key={movie.id}
                                id={movie.id}
                                name={movie.name}
                                year={movie.year}
                                cover={movie.cover} 
                            />
                        ))
                    }
                </div>
            </div>
        );
    }

    render() {
        return this.state.loaded ? this.content() : <div></div>;
    }
}