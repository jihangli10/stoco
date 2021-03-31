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
    <div className="data-selector">
    <p>This web app calculates the correlations coefficient between two chronological data.</p>
    <p>Please choose any two data</p>
    <div>
      <label htmlFor="data1">Data 1</label>
      <select name="data1" id="data1" onChange={handleData1Change}>
        <option value="stock">Stock</option>
        <option value="market-index">Dow Jones Index</option>
        <option value="GDP">GDP of US</option>
        <option value="real-estate">Real Estate Price</option>
        <option value="global-temp">Global Temperature</option>
        <option value="co2">CO2 Concentration</option>
      </select>
      {showSymbol1? <div>
        <label htmlFor="symbol1">Stock Symbol</label>
        <input type="text" id="symbol1" />
      </div> : null}
    </div>
    <div>
      <label htmlFor="data2">Data 2</label>
      <select name="data2" id="data2" onChange={handleData2Change}>
        <option value="stock">Stock</option>
        <option value="market-index">Dow Jones Index</option>
        <option value="GDP">GDP of US</option>
        <option value="real-estate">Real Estate Price</option>
        <option value="global-temp">Global Temperature</option>
        <option value="co2">CO2 Concentration</option>
      </select>
      {showSymbol2? <div>
        <label htmlFor="symbol2">Stock Symbol</label>
        <input type="text" id="symbol2" />
      </div> : null}
    </div>
    <div>
      <label htmlFor="start">Start Date:</label>
      <input type="date" id="start" name="start"
       value="2016-01-01"
       min="1970-01-01" max="2021-04-02" />
      <label htmlFor="end">End Date:</label>
      <input type="date" id="end" name="end"
       value="2021-04-01"
       min="1970-01-01" max="2021-04-02" />
    </div>
    <button>Submit</button>
  </div>
  )
};

export default DataSelector;
