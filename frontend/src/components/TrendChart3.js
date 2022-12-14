import React, { useState, useEffect } from "react";

import { Chart } from 'react-chartjs-2';
import { Chart as ChartJS, BarController, BarElement, LinearScale, Title, CategoryScale } from 'chart.js';
import myJson from '../data/historical-trend-data/December-Tue.json';

ChartJS.register(BarController, BarElement, LinearScale, CategoryScale, Title);

function App() {
	// usestate for setting a javascript
	// object for storing and using data
	const [vdata, setdata] = useState({
		time: "",
		count: 0,
	});

	// Using useEffect for single rendering
	useEffect(() => {
		// Using fetch to fetch the api from
		// flask server it will be redirected to proxy
		fetch("http://127.0.0.1:5000/api").then((res) =>
			res.json().then((vdata) => {
				// Setting a data from  (obj => obj.time == "12:55:00")
				setdata({
					time: vdata.time,
					count: vdata.count
				});
			})
		);
	}, []);

  console.log(vdata)

  const liveData = JSON.parse(JSON.stringify(myJson));

  var objIndex = liveData.findIndex((obj => obj.time == "12:45:00"));

  liveData[objIndex].count = vdata.count

  var labels = myJson.map(function(e) {
    return e.time;
  });
  var data = myJson.map(function(e) {
    return e.count;
  });
  var dataLive = liveData.map(function(e) {
    return e.count;
  });

  const configdata = {
    labels: labels,
    datasets: [{
      label: 'Historical Trend',
      data: data,
      backgroundColor: [
        '#E5E7EB'
      ],
      xAxisID: "bar-x-axis1",
    },  {
      label: 'Live Data',
      data: dataLive,
      backgroundColor: [
        '#FF0000'
      ],
      xAxisID: "bar-x-axis2",
    }
  ]
  };

  var options = {
    scales: {
      xAxes: [{
        stacked: false,
        id: "bar-x-axis1",
        barThickness: 30,
        display: false,
      }, {
        display: false,
        stacked: false,
        id: "bar-x-axis2",
        barThickness: 70,
        // these are needed because the bar controller defaults set only the first x axis properties
        type: 'category',
        categoryPercentage: 0.8,
        barPercentage: 0.9,
        gridLines: {
          offsetGridLines: true
        },
        offset: true,
        grid: {
          display: false
        }
      }],
      yAxes: [{
        stacked: false,
        grid: {
          display: false
        },
        display: false,
      }]

    }
  };


	return (
		<div className="App">
      <div>
        <Chart 
          type='bar'
          data={configdata}
          options={options}
        />
      </div>
		</div>
	);
}






export default App