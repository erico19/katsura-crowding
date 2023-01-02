import React, { useState, useEffect } from "react";

function ServiceStatus({count, average_count}) {
	const [status, setStatus] = useState();

	useEffect(() => {
		fetch(`http://127.0.0.1:5000/service_status?count=${count}&average_count=${average_count}`)
		.then((res) => res.json()
		.then((json) => setStatus(json))
		);
	}, []);

	console.log(`http://127.0.0.1:5000/service_status?count=${count}&average_count=${average_count}`)
  console.log("Service status: ", status)

  if (status == 5) {
    return (
			"Much less busier than usual."
    )
  } else if (status == 4) {
    return (
			"Less busier than usual."
    )
  } else if (status == 3) {
    return (
			"Much busier than usual."
    )
  } else if (status == 2) {
    return (
			"Busier than usual."
    )
  } else if (status == 1) {
    return (
			"As busy as usual."
    )
  } 
 }; 
 
 export default ServiceStatus;