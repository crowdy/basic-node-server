'use strict';

const PORT = process.env.PORT || 3000;

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const api = require('./api');

app.use(bodyParser.json({})) 
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use('/api', api.router);
app.use('/', express.static(__dirname + '/public'));

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}!`);
});