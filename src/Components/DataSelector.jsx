import React, {useState} from 'react';

const DataSelector = () => {
  const [showSymbol1, setShowSymbol1] = useState(true);
  const [showSymbol2, setShowSymbol2] = useState(true);

  const handleData1Change = (e) => {
    setShowSymbol1(e.target.value === 'stock')
  }
  const handleData2Change = (e) => {
    setShowSymbol2(e.target.value === 'stock')
  }
  return (
    <div className="container data-selector">
    <p>Stoco calculates the correlations coefficient between two chronological data.</p>
    <p>Please choose any two data</p>
    <div className="row">
      <div className="data-type">
        <label htmlFor="data1">Data 1</label>
        <select className="input-box" name="data1" id="data1" onChange={handleData1Change}>
          <option value="stock">Stock Price</option>
          <option value="market-index">Dow Jones Index</option>
          <option value="GDP">US GDP</option>
          <option value="real-estate">Real Estate Price</option>
          <option value="global-temp">Global Temperature</option>
          <option value="co2">CO2 Concentration</option>
        </select>
      </div>
      {showSymbol1? <div className="stock-symbol">
        <label htmlFor="symbol1">Stock Symbol</label>
        <input className="input-box" type="text" id="symbol1" value="TSLA"/>
      </div> : null}
    </div>
    <div className="row">
      <div className="data-type">
        <label htmlFor="data2">Data 2</label>
        <select className="input-box" name="data2" id="data2" onChange={handleData2Change}>
          <option value="stock">Stock Price</option>
          <option value="market-index">Dow Jones Index</option>
          <option value="GDP">US GDP</option>
          <option value="real-estate">Real Estate Price</option>
          <option value="global-temp">Global Temperature</option>
          <option value="co2">CO2 Concentration</option>
        </select>
      </div>
      {showSymbol2? <div className="stock-symbol">
        <label htmlFor="symbol2">Stock Symbol</label>
        <input className="input-box" type="text" id="symbol2" value="AAPL"/>
      </div> : null}
    </div>
    <div className="row">
      <div className="date-input">
        <label htmlFor="start">Start Date:</label>
        <input className="input-box" type="date" id="start" name="start"
         value="2016-01-01"
         min="1970-01-01" max="2021-04-02" />
      </div>
      <div className="date-input">
        <label htmlFor="end">End Date:</label>
        <input className="input-box" type="date" id="end" name="end"
         value="2021-04-01"
         min="1970-01-01" max="2021-04-02" />
       </div>
    </div>
    <button className="row">Submit</button>
  </div>
  )
};

export default DataSelector;
