import React from 'react';
import Cover from './components/Cover.js'
import Details from './components/Details.js'
import Welcome from './components/Welcome'
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/kodflix" component={Cover} />
        <Route exact path="/movie/:movieId" component={Details} />
        <Route exact path="/" component={Welcome} />
      </BrowserRouter>
    </div>
  );
}

export default App;
