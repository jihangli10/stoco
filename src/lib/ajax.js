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
  }
}
export default ajax;