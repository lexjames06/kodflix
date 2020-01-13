import React from 'react';
import Cover from './Cover.js'
import Details from './Details.js'
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className='App'>
      <h1>Welcome to Kodflix</h1>
      <BrowserRouter>
        <Route exact path="/" component={Cover} />
        <Route exact path="/:id" component={Details} />
      </BrowserRouter>
    </div>
  );
}

export default App;
