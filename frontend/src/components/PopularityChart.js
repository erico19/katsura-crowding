import React, { useState, useEffect } from "react";
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarController, BarElement, LinearScale, Title, CategoryScale } from 'chart.js';

import LiveIcon from "../images/live-icon.svg"
import ServiceStatus from "../components/ServiceStatus"
import Notice from '../components/Notice';

import DropDown from "../components/SelectLocation"

ChartJS.register(BarController, BarElement, LinearScale, CategoryScale, Title);

function PopularityChart() {
  const current = new Date()
  const [selectedOption, setSelectedOption] = useState('');
	const [hdata, setData] = useState({
                                "message": null,
                                "data": {}
                              });

  const [popularity, setPopularity] = useState({
                                        "count": 0,
                                        "time": `${current.getHours()}:${current.getMinutes()}`,
                                        "sensor": null,
                                        "time_to_display": null,
                                      });
  

  useEffect(() => {
    console.log("Fetching data...")
    fetch(`http://127.0.0.1:5000/day_average`)
    .then(res => res.json())
    .then(json => setData(json))
  }, [])

  
  useEffect(() => {
    console.log("Counting users...");
    fetch(`http://127.0.0.1:5000/service-level-api`)
    .then(res => res.json())
    .then(json => setPopularity(json))
  }, [])


  console.log("hdata: ", hdata)
  console.log("Popularity: ", popularity)

  if (hdata.message == null) {
    displayBarChart = <div></div>
  } else if (hdata.message != 'SUCCESS') {
    displayBarChart = <div>The Cafeteria is closed today!</div>
  } else {
    const labels = hdata.data.map(function(label) {
      label = label.time;
      label = label.slice(0,5);
      label = convertTimeToString(label)
      label = label.split(' ')
      return label;
    });

    const bins = labels.map(label => label[0])
    console.log("Labels: ", labels)
    console.log("bins: ", bins)
    
    const data = hdata.data.map(function(e) {
      return e.count;
    });

    var liveData = Array(labels.length).fill(0);
    var timeNow = convertTimeToString(popularity.time);
    timeNow = timeNow.split(" ")[0]
    console.log("TimeNow: ", timeNow)
    
    var i = bins.indexOf(timeNow) + 1;
    if (i == 0){i = -1}
    console.log("i: ", i)
    liveData[i] = popularity.count;
    // liveData[i] = 800;
    console.log("Live data: ", liveData)

    var hist_background_colors = Array(labels.length).fill("rgba(0,32,96,1");
    var live_background_colors = Array(labels.length).fill("rgba(0,176,240,1");
    
    if (liveData[i] > data[i]) {
      live_background_colors = Array(labels.length).fill("rgba(0,176,240,0.5");
    }

    hist_background_colors[i] = "rgba(208,206,206,1)";

    const chartData = {
      labels: labels,
      datasets: [
        {
          label: 'Live Data',
          data: liveData,
          barPercentage: 1,
          backgroundColor: live_background_colors,
          borderWidth: 1,
        },
        {
          label: 'Historical Average',
          data: data,
          barPercentage: 1,
          backgroundColor: hist_background_colors,
          borderWidth: 1,
        },
      ]
    };

    const config = {
      scales: {
        x: {
          grid: {display: false},
          stacked: true,
          ticks: {color: 'black',
                  fontStyle: "bold",
                },
        },
        y: {
          grid: {display: false},
          beginAtZero: true,
          display: false,
        }
      }
    };
  
    var displayBarChart;
    if (labels) {
      displayBarChart = <Bar
                          type='bar'
                          data={chartData}
                          options={config}
                        />
    } else {
      displayBarChart= <Bar />;
    }

    var service_status;
    if ((popularity.count != null) && (i != -1)) {
      service_status = <ServiceStatus count={liveData[i]} average_count={data[i]}/>
    } else {
      service_status = ""
    }
  }
  
  if (popularity.time_to_display == null){
    const time = new Date();
    var dateToDisplay = time.toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"long", day:"numeric"})
  } else {
    var dateToDisplay = popularity.time_to_display
  }

  return (
    <div>
      <DropDown />
      <Notice/>
      <div className="grid gap-2 p-4 bg-gray-100 rounded-lg">
        <h2 className="text-md text-gray-500 font-medium" style={{color:'black'}}>{dateToDisplay}</h2>
        <div>
          {displayBarChart}          
        </div>
        <div className="flex gap-1 items-center">
          <img
            className="inline h-4"
            src={LiveIcon}
            alt="Live"
          />
          {/*<span className="text-sm text-gray-800 font medium">{"Busy message goes here"}</span>*/}
          <span className="text-sm text-gray-800 font medium">{service_status}</span>
        </div>
      </div>
    </div>
	);
}

export default PopularityChart

function convertTimeToString(time) {
  var arr = time.split(":")
  var hours = parseInt(arr[0])
  var minutes = parseInt(arr[1])
  var ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  return strTime;
}