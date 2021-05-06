const processer = {
  stockProcess: (stockData, callback) => {
    let valueArray = Object.values(stockData['Monthly Adjusted Time Series']).map(item => {
      return Number(item['5. adjusted close'])
    });
    let dateArray = Object.keys(stockData['Monthly Adjusted Time Series']);
    var data = dateArray.map((date, index) => {return {x:date, y:valueArray[index]}});
    callback(data);
  },
  cryptoProcess: (cryptoData, callback) => {
    // Wait for implementation
    callback(data);
  }
}
export default processer;