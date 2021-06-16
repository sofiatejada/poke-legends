//servers send responses and receive requests (from clients/front-end)
//imports in node look like this!
//one of the onlyr eal differences in syntax between node and javascript
const express = require('express');
const legends = require('./data.js');
const app = express();
const port = 4852;

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

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});


