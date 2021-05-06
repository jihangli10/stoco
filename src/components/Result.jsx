import React from 'react';
import {Line} from 'react-chartjs-2';

const Result = React.memo(({data, data1Type, data2Type, stock1, stock2, startDate, endDate, correlation}) => {
  let label1;
  let label2;
  if (data1Type === 'stock' || data1Type === 'crypto') {
    label1 = stock1;
  } else {
    label1 = data1Type;
  }
  if (data2Type === 'stock' || data1Type === 'crypto') {
    label2 = stock2;
  } else {
    label2 = data2Type;
  }
  const chartData = {
    datasets: [
      {
        label: label1,
        yAxisID: 'stock1',
        fill: false,
        lineTension: 0,
        backgroundColor: 'rgba(0,0,0,1)',
        borderColor: 'rgba(16,10,126,1)',
        borderWidth: 2,
        pointRadius: 0,
        data: data.data1
      },
      {
        label: label2,
        yAxisID: 'stock2',
        fill: false,
        lineTension: 0,
        backgroundColor: 'rgba(192,60,60,1)',
        borderColor: 'rgba(192,60,60,1)',
        borderWidth: 2,
        pointRadius: 0,
        data: data.data2
      }
    ]
  };
  const options = {
    title:{
      display: true,
      text: `Historical data of ${label1} and ${label2}`,
      fontSize: 20
    },
    legend:{
      display: true,
      position: 'right'
    },

    scales: {
      xAxes: [{
          type: 'time',
          time: {
              unit: 'month'
          }
      }],
      yAxes: [{
        id: 'stock1',
        type: 'linear',
        position: 'left',
        gridLines: {
          display: true,
          drawBorder: true,
          drawOnChartArea: false,
        },
        ticks: {
          fontColor: 'rgba(16,10,126,1)'
        }
      }, {
        id: 'stock2',
        type: 'linear',
        position: 'right',
        gridLines: {
          display: true,
          drawBorder: true,
          drawOnChartArea: false
        },
        ticks: {
          fontColor: 'rgba(192,60,60,1)'
        }
      }]
    }
  };
  return (
   <div>
    <div className="result-header">
      Correlation between <b>{label1}</b> and <b>{label2}</b> is
    </div>
    <div>
      <h2>{correlation.toString().slice(0, 5)}</h2>
    </div>
    <div className="slider-container">
      <span>-1&nbsp;&nbsp;</span>
      <input type="range" min="-100" max="100" value={100*correlation} className="slider" id="myRange" />
      <span>&nbsp;&nbsp;1</span>
    </div>
    <Line
      data={chartData}
      options={options}
    />
   </div>
  )
}, (prevProp, nextProp) => {
  return prevProp.data === nextProp.data;
});

export default Result;
