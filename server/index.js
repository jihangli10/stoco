const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const axios = require('axios');
// const config = require('./config.js');
const oil = require('./data/oil.json');
const co2 = require('./data/co2.json');
const temp = require('./data/temp.json');
const dji = require('./data/dji.json');
const ir = require('./data/ir.json');
const app = express();
require('dotenv').config();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "../build")));

app.get('/stock', (req, res) => {
  const url = 'https://www.alphavantage.co/query';
  axios.get(url, { params: {
    symbol: req.query.symbol,
    function: 'TIME_SERIES_MONTHLY_ADJUSTED',
    apikey: process.env.stockToken
    }
  })
  .then(data => {
    res.status(200).send(data.data);
  })
});

app.get('/crypto', (req, res) => {
  const url = `https://rest.coinapi.io/v1/ohlcv/${req.query.symbol}/USD/history`;
  axios.get(url, { params: {
    asset_id: req.query.symbol,
    period_id: '1MTH',
    time_start: '2009-01-09T00:00:00',
    apikey: process.env.cryptoToken
    }
  })
  .then(data => {
    res.status(200).send(data.data);
  })
  .catch(err => {
    console.log(err);
    res.sendStatus(500);
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

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`)
})