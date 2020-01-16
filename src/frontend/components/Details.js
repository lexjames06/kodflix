import React from 'react';
import { Link } from 'react-router-dom';
import GetCover from './Cover-get.js'
import Header from './Header'
import './Details.css';

class Details extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
      message: `The details about the movie will display here :)`,
      color: 'grey'
    };
  }

  componentDidMount() {
    let movieId = this.props.match.params.movieId;
    let movie = GetCover().find(function (movie) {
      return movie.id === movieId;
    });
    let title = movie.name;
    let year = movie.year;
    this.setState({
      title: title,
      year: `(${year})`
    });
    console.log(this.state.title)
    setTimeout(() => {
      this.setState({
        message: `Coming Soon!`,
        color: 'red'
      });
    }, 3000);
  }

  render() {
    return (
      <div>
        <Header />
        <div>
          <h1>{this.state.title}</h1>
          <h2 className="year">{this.state.year}</h2>
          <h2 style={{ color: this.state.color }} className="details">{this.state.message}</h2>
        </div>
        <div className="link-div">
          <Link to="/kodflix" className="link">Back to home page</Link>
        </div>
      </div>
    );
  }
}

export default Details;