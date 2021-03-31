import React, {useState} from 'react';

const DataSelector = ({
  setData1Type, setData2Type,
  stock1, stock2,
  setStock1, setStock2,
  startDate, endDate,
  setStartDate, setEndDate,
  setShowResult, handleSubmit}) => {
  const [showSymbol1, setShowSymbol1] = useState(true);
  const [showSymbol2, setShowSymbol2] = useState(true);

  const handleData1Change = (e) => {
    setShowSymbol1(e.target.value === 'stock');
    setData1Type(e.target.value);
  }
  const handleData2Change = (e) => {
    setShowSymbol2(e.target.value === 'stock');
    setData2Type(e.target.value);
  }
  const handleStock1Change = (e) => {
    setStock1(e.target.value);
  }
  const handleStock2Change = (e) => {
    setStock2(e.target.value);
  }
  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  }
  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  }
  return (
    <div className="container data-selector">
    <p>Stoco calculates the correlations coefficient between two chronological data.</p>
    <p>Please choose two data</p>
    <div className="row">
      <div className="data-type">
        <label htmlFor="data1">Data 1</label>
        <select className="input-box" name="data1" id="data1" onChange={handleData1Change}>
          <option value="stock">Stock Price</option>
          <option value="Dow Jones Index">Dow Jones Index</option>
          <option value="US GDP">US GDP</option>
          <option value="House Price">House Price</option>
          <option value="Oil Price">Oil Price</option>
          <option value="Global Temperature">Global Temperature</option>
          <option value="CO2 Concentration">CO2 Concentration</option>
        </select>
      </div>
      {showSymbol1? <div className="stock-symbol">
        <label htmlFor="symbol1">Stock Symbol</label>
        <input className="input-box" type="text" id="symbol1" value={stock1} onChange={handleStock1Change}/>
      </div> : null}
    </div>
    <div className="row">
      <div className="data-type">
        <label htmlFor="data2">Data 2</label>
        <select className="input-box" name="data2" id="data2" onChange={handleData2Change}>
          <option value="stock">Stock Price</option>
          <option value="Dow Jones Index">Dow Jones Index</option>
          <option value="US GDP">US GDP</option>
          <option value="House Price">House Price</option>
          <option value="Oil Price">Oil Price</option>
          <option value="Global Temperature">Global Temperature</option>
          <option value="CO2 Concentration">CO2 Concentration</option>
        </select>
      </div>
      {showSymbol2? <div className="stock-symbol">
        <label htmlFor="symbol2">Stock Symbol</label>
        <input className="input-box" type="text" id="symbol2" value={stock2} onChange={handleStock2Change}/>
      </div> : null}
    </div>
    <div className="row">
      <div className="date-input">
        <label htmlFor="start">Start Date:</label>
        <input className="input-box" type="date" id="start" name="start"
         value={startDate}
         min="1970-01-01" max="2021-04-02"
         onChange={handleStartDateChange}/>
      </div>
      <div className="date-input">
        <label htmlFor="end">End Date:</label>
        <input className="input-box" type="date" id="end" name="end"
         value={endDate}
         min="1970-01-01" max="2021-04-02"
         onChange={handleEndDateChange}/>
       </div>
    </div>
    <button className="row" onClick={handleSubmit}>Submit</button>
  </div>
  )
};

export default DataSelector;
