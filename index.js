const express = require('express');
const app = express();
const cors = require('cors')

const port = process.env.PORT || 80;
const bodyParser = require('body-parser');

app.use(cors())

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const routes = require('./routes');

const client = require('./wa-api');

client().then((client) => {
  routes(app, client);
})

app.listen(port);
console.log('RESTful API server started on: ' + port);