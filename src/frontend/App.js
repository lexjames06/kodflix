import React from 'react';
import Cover from './components/Cover.js'
import Details from './components/Details.js'
import Welcome from './components/Welcome'
import { useLocation, BrowserRouter, Route } from 'react-router-dom'
import { useSpring, useTransition, animated } from 'react-spring';
import Kodflix from './assets/Logos/Kodflix Logo.png'
import './App.css';

function App() {
  return (
    <div className='App' >
      <img src={Kodflix} alt="Kodflix text logo" className="header-logo"></img>
      <BrowserRouter>
        <Route exact path="/" component={Cover} />
        <Route exact path="/:movieId" component={Details} />
        <Route exact path="/welcome" component={Welcome}/>
      </BrowserRouter>
    </div>
  );
}


export default App;
