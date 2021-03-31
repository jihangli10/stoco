const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const axios = require('axios');
const config = require('./config.js')
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

const port = 3000;
app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`)
})