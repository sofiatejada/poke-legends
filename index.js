//servers send responses and receive requests (from clients/front-end)
//imports in node look like this!
//one of the onlyr eal differences in syntax between node and javascript
const app = require('./pokelegends.js');
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});


