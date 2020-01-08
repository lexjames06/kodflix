import React from 'react';
import Movie from './Movie.js';
import coolRunnings from './movie covers/cool runnings.jpg';
import soulPlane from './movie covers/soul plane.jpg';
import howHigh from './movie covers/how high.jpg';
import boyz from './movie covers/boyz.jpg';
import menace from './movie covers/menace.jpg';
import friday from './movie covers/friday.jpg';
import './App.css';

function App() {
  return (
    <div className='App'>
      <h1>Welcome to Kodflix</h1>
      <div className='movie-rows'>
          <Movie 
          name='Cool Runnings'
          year='1993'
          cover={coolRunnings}
          />
          <Movie 
          name='Soul Plane'
          year='2004'
          cover={soulPlane}
          />
          <Movie 
          name='How High'
          year='2001'
          cover={howHigh}
          />
      </div>
      <div className='movie-rows'>
        <Movie 
          name='Boyz N The Hood'
          year='1991'
          cover={boyz}
          />
          <Movie 
          name='Menace II Society'
          year='1993'
          cover={menace}
          />
          <Movie 
          name='Friday'
          year='1995'
          cover={friday}
          />
      </div>
    </div>
  );
}

export default App;
