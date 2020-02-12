import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import './Details.css';

class Details extends React.Component {
  constructor() {
    super();
    this.state = { shows: [], movie: '', loaded: false };
  }

  checkMovieId() {
    let movieId = this.props.match.params.movieId;
    let movie = this.state.shows.find((movie) => movie.id === movieId)
    this.setState({ movie });
    return movie;
  }

  componentDidMount() {
    fetch('/rest/movies')
            .then(response => response.json())
            .then(shows => this.setState({ shows: shows }))
            .then(() => this.checkMovieId())
            .then(() => this.setState({ loaded: true }));
  }

  content() {
    let { movie } = this.state;
    if (movie === undefined || '') {
      return <Redirect to='/not-found' />
    } else {
      return (
        <div>
          <div className="synopsis-image" id="synopsis-image">
            <img src={require(`../../assets/synopsis covers/${movie.id}.jpg`)} alt="" />
          </div>
          <div className="description">
            <h1 className="movie-title">{movie.name}</h1>
            <h2 className="year">({movie.year})</h2>
            <h2 className="details">{movie.synopsis}</h2>
          </div>
          <div className="link-div">
            <Link to="/kodflix" className="link">Back to homepage</Link>
          </div>
        </div>
      );
    }
  }

  render() {
    return this.state.loaded ? this.content() : <div></div>;
  }
    
}

export default Details;