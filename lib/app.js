const express = require('express');

const app = express();

app.use('/cats', require('./controllers/cats.js'));

app.use('/', (req, res) => {
  res.send('hello world!');
});

module.exports = app;
