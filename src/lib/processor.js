const processer = {
  stockProcess: (stockData, callback) => {
    let valueArray = Object.values(stockData['Monthly Adjusted Time Series']).map(item => {
      return Number(item['5. adjusted close'])
    });
    let dateArray = Object.keys(stockData['Monthly Adjusted Time Series']);
    let data = dateArray.map((date, index) => {return {x:date, y:valueArray[index]}});
    callback(data);
  },
  cryptoProcess: (cryptoData, callback) => {
    let valueArray = cryptoData.map(item => {
      return item.price_close;
    }).reverse();
    let dateArray = cryptoData.map(item => {
      return item.time_period_end;
    }).reverse();
    let data = dateArray.map((date, index) => {return {x:date, y:valueArray[index]}});
    callback(data);
  }
}
export default processer;