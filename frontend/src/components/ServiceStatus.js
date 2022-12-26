import React, { useState, useEffect } from "react";

function ServiceStatus() {
	const [vdata, setdata] = useState({
		serviceLevel: 0,
	});

	useEffect(() => {
		fetch("http://127.0.0.1:5000/service-level-api").then((res) =>
			res.json().then((vdata) => {
				setdata({
					serviceLevel: vdata.serviceLevel,
				});
			})
		);
	}, []);

  console.log(vdata.serviceLevel)

  if (vdata.serviceLevel ==  5) {
    return (
			"Much less busier than usual."
    )
  } else if (vdata.serviceLevel ==  4) {
    return (
			"Less busier than usual."
    )
  } else if (vdata.serviceLevel ==  3) {
    return (
			"Much busier than usual."
    )
  } else if (vdata.serviceLevel ==  2) {
    return (
			"Busier than usual."
    )
  } else if (vdata.serviceLevel ==  1) {
    return (
			"As busy as it gets."
    )
  } 
 };
 
 
 export default ServiceStatus;