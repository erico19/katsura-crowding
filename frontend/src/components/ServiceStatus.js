import React, { useState, useEffect } from "react";
import LiveIcon from "../images/live-icon.svg"

function ServiceStatus({count, average_count, apiURL}) {
	const [status, setStatus] = useState();

	useEffect(() => {
		fetch(`${apiURL}/service_status?count=${count}&average_count=${average_count}`)
		.then((res) => res.json()
		.then((json) => setStatus(json))
		);
	}, [count]);

	console.log(`${apiURL}/service_status?count=${count}&average_count=${average_count}`)
  console.log("Service status: ", status)

  var message = null;

  if (status === 5) {
    message = "Much less busier than usual."
  } else if (status === 4) {
    message = "Less busier than usual."
  } else if (status === 3) {
    message = "Much busier than usual."
  } else if (status === 2) {
    message = "Busier than usual."
  } else if (status === 1) {
    message = "As busy as usual."
  } 

  console.log("Message: ", message)
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