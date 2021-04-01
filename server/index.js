const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const axios = require('axios');
const config = require('./config.js');
const oil = require('./data/oil.json');
const co2 = require('./data/co2.json');
const temp = require('./data/temp.json');
const dji = require('./data/dji.json');
const ir = require('./data/ir.json');
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "../build")));

app.get('/stock', (req, res) => {
  const url = 'https://www.alphavantage.co/query';
  axios.get(url, { params: {
    symbol: req.query.symbol,
    function: 'TIME_SERIES_MONTHLY_ADJUSTED',
    apikey: config.stockToken
    }
  })
  .then(data => {
    res.status(200).send(data.data);
  })
});

app.get('/oil', (req, res) => {
  res.status(200).send(oil);
});

app.get('/co2', (req, res) => {
  res.status(200).send(co2);
});

app.get('/temp', (req, res) => {
  res.status(200).send(temp);
});

app.get('/dji', (req, res) => {
  res.status(200).send(dji);
});

app.get('/ir', (req, res) => {
  res.status(200).send(ir);
});

const port = 3000;
app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`)
})