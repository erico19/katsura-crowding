import * as React from 'react';

import Exclamation from "../images/exclamation.svg"

const Notice = () => {
  const time = new Date(2022,11,12,6,45);
  var hourNow = time.getHours();
  
  if (hourNow > 14 || hourNow < 11) {
    return (
      <div className="flex gap-1 p-2 bg-yellow-200 rounded-lg items-center">
        <img
          className="inline h-4"
          src={Exclamation}
          alt="Exclamation"
        />
        <p className="text-xs text-gray-800 font-medium">Cafeteria Soleil is open for lunch from 11:00 to 14:00</p>
      </div>
    )
  } else {
    return (
      <div></div>
    )
  } 
 };
 
 export default Notice;