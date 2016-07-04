'use strict';

const express = require('express');

let router = express.Router();

router.use((req, res, next) => {
  console.log(`Access to API. Route: ${req.path}`);
  next();
});

router.use('/gifs', require('./gifs').GifsRouter);

module.exports = { router };