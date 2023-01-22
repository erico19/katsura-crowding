import * as React from 'react';

const notice_sensors = ["AMPM18-KJ010", "AMPM18-KJ016", "AMPM18-KJ017"];

const DescriptionBox = ({ location }) => {
  if (notice_sensors.includes(location)) {
    return (
      <div className="grid gap-4 py-4 mt-16 items-center border-y-2">
        <p className="prose text-base text-gray-800 font-medium">Cafeteria Selene is open for lunch from 11:00 AM to 2:00PM on weekdays and is located at B cluster with; a variety of seating arrangements for both individuals and groups, coupled with a delicately imposing natural scenery juxtaposed against the iconic view of the Magnificent Kyoto City, which will both relax and inspire you. <a href='https://west2-univ.jp/sp/index.php?t=650120'>See today's menu here.</a></p>
      </div>
    )
  } else if (location == "AMPM18-KJ008") { 
    return (
      <div className="grid gap-2 py-4 mt-16 items-center border-y-2">
        <p className="text-base text-gray-800 font-medium"></p>
      </div>
    )  
  } else if (location == "AMPM18-KJ015") {
    return (
      <div className="grid gap-2 py-4 mt-16 items-center border-y-2">
        <p className="prose max-w-none">Boulangerie Seri Bakery is open from 8:00 AM to 3:00 PM on weekdays and is located between the upper fringes of A cluster and the lower fringes of B cluster, adjascent to two(2) Bus stops i.e Katsura Campus Mae for the Keihan and Kyoto City Buses, which also serve as the pick and drop off points for the Kyoto University Shuttle Bus between Yoshida and Katsura. <a href='https://www.t.kyoto-u.ac.jp/en/access/katsura/bus_from-katsura'>See Kyoto University Bus Schedule.</a> The Graphical display shown here may contain an interfusion of both the dynamic variation of Human Crowd and Vehicle Traffic at the areas near and around the Bakery during the day.</p>
      </div>
    )
  }
 };
 
 export default DescriptionBox;
