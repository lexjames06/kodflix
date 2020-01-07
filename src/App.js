import React from 'react';
import coolRunnings from './movie covers/cool runnings.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Welcome to Kodflix</h1>
      <img src={coolRunnings}
        alt="cool runnings movie cover"
        className="movie-cover"
      />
    </div>
  );
}

export default App;
