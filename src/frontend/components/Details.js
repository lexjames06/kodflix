import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import GetCover from './Cover-get.js'
import './Details.css';

class Details extends React.Component {
  constructor() {
    super();
    this.state = {
      movie: '',
      synopsis: `The details about the movie will display here :)`,
    };
  }

  componentDidMount() {
    let movieId = this.props.match.params.movieId;
    let movie = GetCover().find((movie) => movie.id === movieId);
    this.setState({ movie });
    fetch('/rest/movies')
        .then(response => response.json())
        .then(data => console.log('here is: ', data));
  }

  render() {
    if (this.state.movie === undefined) {
      return <Redirect to='/not-found' />
    } else {
      return (
        <div>
          <div className="synopsis-image" id="synopsis-image">
            <img src={this.state.movie.synopsisCover} alt="" />
          </div>
          <div className="description">
            <h1 className="movie-title">{this.state.movie.name}</h1>
            <h2 className="year">({this.state.movie.year})</h2>
            <h2 className="details">{this.state.movie.synopsis}</h2>
          </div>
          <div className="link-div">
            <Link to="/kodflix" className="link">Back to homepage</Link>
          </div>
        </div>
      );
    }
  }
}

export default Details;