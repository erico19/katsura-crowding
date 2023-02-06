import React, { useState, useEffect } from "react";
import LiveIcon from "../images/live-icon.svg"

function ServiceStatus({count, average_count, apiURL, location}) {
	const [status, setStatus] = useState();

  var message = null;
  var percent_diff = (count - average_count)/average_count

  if (Math.abs(percent_diff) <= 0.05){
    message = "As busy as usual."
  }
  else if (percent_diff > 0.05 && percent_diff <= 0.50) {
    message = "Busier than usual."
  }
  else if (percent_diff > 0.50) {
    message = "Much busier than usual."
  }
  else if (percent_diff < -0.05 && percent_diff >= -0.50){
    message = "Less busier than usual."
  }
  else if (percent_diff < -0.50) {
    message = "Much less busier than usual."
  } else {
    message = ""
  }

  if (status !== 0) {
    return (
      <div className="flex gap-1 items-center">
        <img
          className="inline h-4"
          src={LiveIcon}
          alt="Live"
        />
        {/*<span className="text-sm text-gray-800 font medium">{"Busy message goes here"}</span>*/}
        <span className="text-sm text-gray-800 font medium">{message}</span>
      </div>
    )
  } else {
    return (
      <div></div>
    )
  } 

 }; 
 
 export default ServiceStatus;
