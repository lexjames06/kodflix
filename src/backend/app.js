const express = require('express')
const movieList = require ('./movielist')

const listOfMovies = movieList;
const app = express()
const port = 3001
 
app.get('/rest/movies', (req, res) => {
  res.send(listOfMovies);
});
 
app.listen(port, );