//servers send responses and receive requests (from clients/front-end)
//imports in node look like this!
//one of the onlyr eal differences in syntax between node and javascript
const express = require('express');
const legends = require('./data.js');
const app = express();
const port = 4852;

//our first ENDPOINT / ROUTE
//node will listen for requests at the home path: '/'
// app.get('/some-route', (req, res) => {
    //when it receives a request at this path, it will respond....
    //with hello world!
//   res.send('Smello World!')
});
// app.get('/other-route', (req, res) => {
    //when it receives a request at this path, it will respond....
    //with hello world!
//   res.send('Other thing! By the way!!!')
// });

//wait for me to make requests to this

// app.get('/pokemon', (req, res) => {
    
//     const legends = {

//     };


//     res.json(legends);
// });

// app.get('/2/', (req, res) => {
    
//     const legends = {

//     };

//     const id = 2;

//     const pokemon2 = legends.results.find((singleLegendaryPoke) => singleLegendaryPoke.id === id);


//     res.json(pokemon2);
// });

app.get('/legends/:id', (req, res) => {
    const legends = {

    };
    const id = Number(req.params.id);

    const pokemon = legends.results.find((singlePokemon) => singlePokemon.id === id);

    res.json(pokemon);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});


