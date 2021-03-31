import React, {useState} from 'react';
import DataSelector from './DataSelector.jsx';

const App = () => {
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const [data1Type, setData1Type] = useState('stock');
  const [data2Type, setData2Type] = useState('stock');
  const [stock1, setStock1] = useState('');
  const [stock2, setStock2] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [showResult, setShowResult] = useState(false);

  return (
    <div className="App">
    <header className="header">
      <h2>stoco</h2>
    </header>
    <main>
      <DataSelector />
    </main>
    </div>
  )
};

export default App;
