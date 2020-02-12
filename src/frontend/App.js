import React from 'react';
import Cover from './components/Cover/Cover'
import Details from './components/Details/Details'
import Welcome from './components/Welcome/Welcome'
import NotFound from './components/Not-Found/Not-Found'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/kodflix" component={Cover} />
          <Route exact path="/not-found" component={NotFound} />
          <Route exact path="/:movieId" component={Details} />
          <Route exact path="/" component={Welcome} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
