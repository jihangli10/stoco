import axios from 'axios';
import processor from './processor';
const ajax = {
  getStock: (symbol, callback) => {
    return axios.get('/stock', { params: { symbol } })
      .then(data => {
        processor.stockProcess(data.data, callback);
      })
      .catch(err => {
        throw new Error(err);
      })
  },
  getCrypto: (symbol, callback) => {
    return axios.get('/crypto', { params: { symbol } })
      .then(data => {
        processor.cryptoProcess(data.data, callback);
      })
      .catch(err => {
        throw new Error(err);
      })
  },
  getOil: (callback) => {
    return axios.get('/oil')
    .then(data => {
      callback(data.data.reverse());
    })
    .catch(err => {
      throw new Error(err);
    })
  },
  getCO2: (callback) => {
    return axios.get('/co2')
    .then(data => {
      callback(data.data.reverse());
    })
    .catch(err => {
      throw new Error(err);
    })
  },
  getTemp: (callback) => {
    return axios.get('/temp')
    .then(data => {
      callback(data.data.reverse());
    })
    .catch(err => {
      throw new Error(err);
    })
  },
  getDji: (callback) => {
    return axios.get('/dji')
    .then(data => {
      callback(data.data);
    })
    .catch(err => {
      throw new Error(err);
    })
  },
  getIr: (callback) => {
    return axios.get('/ir')
    .then(data => {
      callback(data.data.reverse());
    })
    .catch(err => {
      throw new Error(err);
    })
  }
}
export default ajax;