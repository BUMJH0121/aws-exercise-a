const express = require('express');
const app = express();
const ip = require('ip');

app.get('/', (req, res) => {
  res.send('Team5 옥해림, 이진희 범진현입니다. @' + ip.address());
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});

app.get('/health', (req, res) => {
  res.status(200).send();
});
