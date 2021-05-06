import React, {useState} from 'react';
import DataSelector from './DataSelector.jsx';
import Result from './Result.jsx';
import ajax from '../lib/ajax.js';
import corr from '../lib/correlation.js';

const App = () => {
  const [data, setData] = useState({ data1: [], data2: [] });
  const [data1Type, setData1Type] = useState('stock');
  const [data2Type, setData2Type] = useState('stock');
  const [stock1, setStock1] = useState('AAPL');
  const [stock2, setStock2] = useState('TSLA');
  const [startDate, setStartDate] = useState('2016-01-01');
  const [endDate, setEndDate] = useState('2021-05-05');
  const [showResult, setShowResult] = useState(false);
  const [correlation, setCorrelation] = useState(0);

  const handleSubmit = e => {
    e.preventDefault();
    handleGet(data1Type, stock1, (rawData1) => {
      handleGet(data2Type, stock2, (rawData2) => {
        let [data1, data2] = filterDate(rawData1, rawData2);
        let data1Array = data1.map(item => {return item.y;});
        let data2Array = data2.map(item => {return item.y;});
        setCorrelation(corr(data1Array, data2Array));
        setData({data1, data2});
        setShowResult(true);
      })
    });
  };

  const handleGet = (dataType, stock, callback) => {
    if (dataType === 'stock') {
      ajax.getStock(stock, data => {
        callback(data);
      })
    } else if (dataType === 'Oil Price') {
      ajax.getOil(data => {
        callback(data);
      })
    } else if (dataType === 'CO2 Concentration') {
      ajax.getCO2(data => {
        callback(data);
      })
    } else if (dataType === 'Temperature Anomalies') {
      ajax.getTemp(data => {
        callback(data);
      })
    } else if (dataType === 'Dow Jones') {
      ajax.getDji(data => {
        callback(data);
      })
    } else if (dataType === 'Interest Rate') {
      ajax.getIr(data => {
        callback(data);
      })
    }
  }

  const filterDate = (data1, data2) => {
    var start = findMaxDate(data1[data1.length - 1].x, data2[data2.length - 1].x, startDate);
    var end = findMinDate(data1[0].x, data2[0].x, endDate);
    var filteredData1 = data1.filter(data => {
      var timestamp = (new Date(data.x)).getTime();
      return (timestamp >= start && timestamp <= end)
    });
    var filteredData2 = data2.filter(data => {
      var timestamp = (new Date(data.x)).getTime();
      return (timestamp >= start && timestamp <= end)
    });
    return [filteredData1, filteredData2];
  }

  const findMaxDate = (...arg) => {
    var numDates = arg.map(item => {
      return (new Date(item)).getTime();
    });
    return Math.max(...numDates);
  }

  const findMinDate = (...arg) => {
    var numDates = arg.map(item => {
      return (new Date(item)).getTime();
    });
    return Math.min(...numDates);
  }

  return (
    <div className="App">
    <header className="header">
      <h2>stoco.</h2>
    </header>
    <main>
      <DataSelector
        setData1Type={setData1Type} setData2Type={setData2Type}
        stock1={stock1} stock2={stock2}
        setStock1={setStock1} setStock2={setStock2}
        startDate={startDate} endDate={endDate}
        setStartDate={setStartDate} setEndDate={setEndDate}
        setShowResult={setShowResult} handleSubmit={handleSubmit}
      />
      {showResult? <Result
        data={data}
        data1Type={data1Type} data2Type={data2Type}
        stock1={stock1} stock2={stock2}
        startDate={startDate} endDate={endDate}
        correlation={correlation}
      /> : null}
    </main>
    </div>
  )
};

export default App;
