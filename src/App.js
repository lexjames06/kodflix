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
        <div className="movie-cover">
          <img src={coolRunnings} alt="cool runnings movie cover" />
          <div className="movie-title">
            <h3>Cool Runnings (1993)</h3>
          </div>
        </div>
        <div className="movie-cover">
          <img src={soulPlane} alt="soul plane movie cover" />
          <div className="movie-title">
            <h3>Soul Plane (2004)</h3>
          </div>
        </div>
        <div className="movie-cover">
          <img src={howHigh} alt="how high movie cover" />
          <div className="movie-title">
            <h3>How High (2001)</h3>
          </div>
        </div>
      </div>
      <div className="movie-rows">
        <div className="movie-cover">
          <img src={boyz} alt="boyz n the hood movie cover" />
          <div className="movie-title">
            <h3>Boyz N The Hood (1991)</h3>
          </div>
        </div>
        <div className="movie-cover">
          <img src={menace} alt="menace to society movie cover" />
          <div className="movie-title">
            <h3>Menace II Society (1993)</h3>
          </div>
        </div>
        <div className="movie-cover">
          <img src={friday} alt="friday movie cover" />
          <div className="movie-title">
            <h3>Friday (1995)</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
