import * as React from 'react';

const notice_sensors = ["AMPM18-KJ010", "AMPM18-KJ016", "AMPM18-KJ017"];

const DescriptionBox = ({ location }) => {
  if (notice_sensors.includes(location)) {
    return (
      <div className="grid gap-4 py-4 mt-16 items-center border-y-2">
        <p className="prose max-w-none text-base text-gray-800 text-justify font-medium">Cafeteria Selene is open for lunch from 11:00 AM to 2:00PM on weekdays and is located at B cluster with; a variety of seating arrangements for both individuals and groups, coupled with a delicately imposing natural scenery which will both relax and inspire you. <a href='https://west2-univ.jp/sp/index.php?t=650120'>See today's menu here.</a></p>
      </div>
    )
  } else if (location == "AMPM18-KJ008") { 
    return (
      <div className="grid gap-2 py-4 mt-16 items-center border-y-2">
        <p className="prose max-w-none text-base text-gray-800 text-justify font-medium">C Cluster Administration office is the administrative office of C Cluster and is open from 8:30 AM to 5:00 pm. Adjuscent to it, is Cafeteria Soleil which opens for lunch from 11:00 AM to 2:00 PM. The graphical display here shows the general level of busyness at the C Cluster office during the day but may also highlight the general level of busyness at the near by Cafeteria during operational hours.</p>
      </div>
    ) 
 } else if (location == "AMPM18-KJ009") { 
    return (
      <div className="grid gap-2 py-4 mt-16 items-center border-y-2">
        <p className="prose max-w-none text-base text-gray-800 text-justify font-medium">The Departments of Civil and EarthResources Engineering, Urban Management and Environmental Engineering are found in the C1 Building located on the left wing of C Cluster. The C1 Entrance Building Entrance is open from 8:00AM to 6:00PM and can be accessed via electronic card  identification after 6:00PM. The graphical display shown here shows the arrival and departure patterns of staff and students but may also capture vehicular arrival and departure patterns at the near by parking lot during the day.</p>
      </div>
    ) 
  } else if (location == "AMPM18-KJ011") { 
    return (
      <div className="grid gap-2 py-4 mt-16 items-center border-y-2">
        <p className="prose max-w-none text-base text-gray-800 text-justify font-medium">B Administration office is the main administration office related to student and staff support on Katsura Campus and is open from 9:00 AM to 5:00 PM.  The foreign student support section is also located here and the latest scholarships information can be found here. The Graphical display shown here shows the general level of activity at the office during the day but may also capture the level of activity at the adjascent buildings i.e., the Funai Tetsuro Auditorium and the Main student Cafeteria (Cafeteria Selene).</p>
      </div>
    )
  } else if (location == "AMPM18-KJ012") { 
    return (
      <div className="grid gap-2 py-4 mt-16 items-center border-y-2">
        <p className="prose max-w-none text-base text-gray-800 text-justify font-medium">Katsura Main student Library is a modern and well facilitated library located at B Cluster, open from 9:00AM to 9:00PM. Along with a wide range of book collections and special collections of “Unique books”, the Library has  an ambient environment for study coupled with the magnificent view of the picturesque landscape of the Iconic Kyoto City. More information about the services offered by Katsura Main Library can be found <a href='https://www.t.kyoto-u.ac.jp/lib/en'> here.</a></p>
      </div>
    ) 
   } else if (location == "AMPM18-KJ013") { 
    return (
      <div className="grid gap-2 py-4 mt-16 items-center border-y-2">
        <p className="prose max-w-none text-base text-gray-800 text-justify font-medium">The departments of Molecular Engineering, Synthetic and Biological Chemistry and Chemical Engineering are found in A4 Building which is located at the extreme lower right of A cluster. The A4 Building Entrance is open from 8:30AM to 6:00PM and serves as the rear access to A Cluster via the Katsura innovation Park Mae Bus Stop for the Keihan and Kyoto City Buses. The graphical display shown here displays the general arrival and departure patterns of staff and students but may also capture vehicular arrival and departure patterns at the near by parking lot during the day.</p>
      </div> 
    )
   } else if (location == "AMPM18-KJ014") { 
    return (
      <div className="grid gap-2 py-4 mt-16 items-center border-y-2">
        <p className="prose max-w-none text-base text-gray-800 text-justify font-medium">P3B Parking is the main designated parking area at A Cluster located between Buildings A3 and A4, open for 24 hours from 6:00AM to 6:00PM. The Graphical display shown here may contain an interfusion of both the dynamic variation Human Crowd and Vehicle Traffic at the areas near and around the parking area during the day.</p>
      </div>    
    )
  } else if (location == "AMPM18-KJ015") {
    return (
      <div className="grid gap-2 py-4 mt-16 items-center border-y-2">
        <p className="prose max-w-none text-base text-gray-800 text-justify font-medium">Boulangerie Seri Bakery is open from 8:00 AM to 3:00 PM on weekdays and is located between the upper fringes of A cluster and the lower fringes of B cluster, adjascent to two(2) Bus stops i.e Katsura Campus Mae for the Keihan and Kyoto City Buses, which also serve as the pick and drop off points for the Kyoto University Shuttle Bus between Yoshida and Katsura. <a href='https://www.t.kyoto-u.ac.jp/en/access/katsura/bus_from-katsura'>See Kyoto University Bus Schedule.</a> The Graphical display shown here may contain an interfusion of both the dynamic variation of Human Crowd and Vehicle Traffic at the areas near and around the Bakery during the day.</p>
      </div>
    )
  }
 };
 
 export default DescriptionBox;
