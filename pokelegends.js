const express = require('express');
const legends = require('./data.js');
const cors = require('cors');
const app = express();

//our first ENDPOINT / ROUTE
//node will listen for requests at the home path: '/'
app.get('/pokelegends', (req, res) => {
    res.json(legends)
  });
  
  app.get('/pokelegends/:id', (req, res) => {
      const id = Number(req.params.id);
  
      const pokemon = legends.pokemon.find((singlePokemon) => singlePokemon.id === id);
  
      res.json(pokemon);
  });

  module.exports = app;