import React, { useState, useEffect } from "react";
import { useI18next } from 'gatsby-plugin-react-i18next';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarController, BarElement, LinearScale, Title, CategoryScale } from 'chart.js';

import ServiceStatus from "./ServiceStatus.js"


ChartJS.register(BarController, BarElement, LinearScale, CategoryScale, Title);

const PopularityChart = ({ location }) => {
  const current = new Date()
  const [selectedOption, setSelectedOption] = useState('');
	const [hdata, setData] = useState({
                                "message": null,
                                "data": {},
                                "sensor": null,
                              });

  const [popularity, setPopularity] = useState({
                                        "count": 0,
                                        "time": `${current.getHours()}:${current.getMinutes()}`,
                                        "sensor": null,
                                        "time_to_display": null,
                                      });
  
  const apiURL = "https://katsura-backend.onrender.com";

  useEffect(() => {
    console.log("Fetching data...")
    fetch(`${apiURL}/day_average/${location}`)
     .then(res => res.json())
     .then(json => setData(json))
     .catch(error => console.error(error))
  }, [location])
  
  useEffect(() => {
    console.log("Counting users...");
    fetch(`${apiURL}/service-level-api/${location}`)
    .then(res => res.json())
    .then(json => setPopularity(json))
  }, [location])


  console.log(`${apiURL}/day_average/${location}`)
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

    const bins = hdata.data.map(function(label) {
      label = label.time;
      label = label.slice(0,5);
      return label;
    });

    console.log("Labels: ", labels)
    console.log("bins: ", bins)
    
    const data = hdata.data.map(function(e) {
      return e.count;
    });

    var liveData = Array(labels.length).fill(0);
    var timeNow = popularity.time
    var i = bins.indexOf(timeNow);
    console.log("i: ", i)

    timeNow = convertTimeToString(timeNow);
    timeNow = timeNow.split(" ")[0]
    console.log("TimeNow: ", timeNow)
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
          borderRadius: 5,
        },
        {
          label: 'Historical Average',
          data: data,
          barPercentage: 1,
          backgroundColor: hist_background_colors,
          borderWidth: 1,
          borderRadius: 5,
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
      service_status = <ServiceStatus count={liveData[i]} average_count={data[i]} apiURL={apiURL} location={location}/>
    } else {
      service_status = ""
    }
  }

  const { t } = useI18next();
  const language = t('CURRENT_LOCALE')
  
  const time = new Date();
  var dateToDisplay = time.toLocaleDateString(language, { weekday:"long", year:"numeric", month:"long", day:"numeric"})

  return (
    <div>
      <div className="grid gap-2 p-4 bg-gray-100 rounded-lg">
        <h2 className="text-md text-gray-500 font-medium" style={{color:'black'}}>{dateToDisplay}</h2>
        <div>
          {displayBarChart}          
        </div>
        {service_status}
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
