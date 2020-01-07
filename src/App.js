import React from 'react';
import coolRunnings from './movie covers/cool runnings.jpg';
import soulPlane from './movie covers/soul plane.jpg';
import howHigh from './movie covers/how high.jpg';
import boyz from './movie covers/boyz.jpg';
import menace from './movie covers/menace.jpg';
import friday from './movie covers/friday.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Welcome to Kodflix</h1>
      <div className="movie-rows">
        <img src={coolRunnings}
          alt="cool runnings movie cover"
          className="movie-cover"
        />
        <img src={soulPlane}
          alt="soul plane movie cover"
          className="movie-cover"
        />
        <img src={howHigh}
          alt="how high movie cover"
          className="movie-cover"
        />
      </div>
      <div className="movie-rows">
        <img src={boyz}
          alt="boyz in the hood movie cover"
          className="movie-cover"
        />
        <img src={menace}
          alt="menace to society movie cover"
          className="movie-cover"
        />
        <img src={friday}
          alt="friday movie cover"
          className="movie-cover"
        />
      </div>
    </div>
  );
}

export default App;
