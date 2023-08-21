const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('./public'));

app.get('/api', (req, res) => {
  res.sendFile(path.resolve('./pages/index.html'));
  //res.end(`Item: 1111`);
});

module.exports = app;
