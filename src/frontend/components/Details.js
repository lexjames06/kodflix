import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import GetCover from './Cover-get.js'
import Header from './Header'
import './Details.css';

class Details extends React.Component {
  constructor() {
    super();
    this.state = {
      movie: '',
      message: `The details about the movie will display here :)`,
      color: 'grey'
    };
  }

  componentDidMount() {
    let movieId = this.props.match.params.movieId;
    let movie = GetCover().find((movie) => movie.id === movieId);
    this.setState({ movie });
    setTimeout(() => {
      this.setState({
        message: `Coming Soon!`,
        color: 'red'
      });
    }, 3000);
  }

  render() {
    if (this.state.movie === undefined) {
      return <Redirect to='/not-found' />
    } else {
      return (
        <div>
          <Header />
          <div>
            <h1>{this.state.movie.name}</h1>
            <h2 className="year">({this.state.movie.year})</h2>
            <h2 style={{ color: this.state.color }} className="details">{this.state.message}</h2>
          </div>
          <div className="link-div">
            <Link to="/kodflix" className="link">Back to home page</Link>
          </div>
        </div>
      );
    }
  }
}

export default Details;