import React from 'react';
import { Link, BrowserRouter, Route} from 'react-router-dom';
import './Details.css';
import GetCover from './Cover-get.js'

class Details extends React.Component {
  constructor() {
    super();
    this.state = {
      title: 'Hello',
      message: `The details about the movie will display here :)`,
      color: 'white'
    };
  }

  componentDidMount() {
    let movieId = this.props.match.params.movieId;
    let movie = GetCover().find(function (movie) {
      return movie.id === movieId;
    });
    let title = movie.name;
    this.setState({ 
      title: title
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
        <div>
          <h1>{this.state.title}</h1>
          <h2 style={{color: this.state.color}}>{this.state.message}</h2>
        </div>
        <div>
          <Link to="/" className="link">Back to home page</Link>
        </div>
      </div>
    );
  }
}

export default Details;