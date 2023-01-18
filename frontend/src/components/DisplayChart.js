import React, { useState } from 'react';
import { Link } from "gatsby"
import PopularityChart from "./PopularityChart.js"
import DescriptionBox from "./DescriptionBox"

function MyDropdown({admin}) {
  const [selectedOption, setSelectedOption] = useState('AMPM18-KJ016');

  function handleChange(event) {
    setSelectedOption(event.target.value);
  }

  if (admin == "TRUE"){
    return (
      <div className='grid gap-2'>
        <div classname='flex'>
          <select value={selectedOption} onChange={handleChange}>
            <option value="AMPM18-KJ008">C Cluster Admnistration Office</option>
            <option value="AMPM18-KJ009">C1 Entrance</option>
            <option value="AMPM18-KJ010">Inside Main Cafeteria</option>
            <option value="AMPM18-KJ011">B Cluster Administration Office</option>
            <option value="AMPM18-KJ012">Katsura Library</option>
            <option value="AMPM18-KJ013">A1 Entrance</option>
            <option value="AMPM18-KJ014">A2 Park Mae</option>
            <option value="AMPM18-KJ015">Boulangerie Seri Bakery</option>
            <option value="AMPM18-KJ016">Main Cafeteria Entrance</option>
            <option value="AMPM18-KJ017">Main Cafeteria Exit</option>
          </select>
        </div>
        
        {/*<Notice location={selectedOption}/>*/}
        <PopularityChart location={selectedOption}/>

        <div className='flex gap-2'>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLScU2ZbhWCi0iWpxQf8SrkZn0OopxQ14FeHZs0MaDCwGQ1qmrg/viewform?usp=sf_link">
            <button className="bg-primary hover:bg-gray-600 text-white text-sm sm:text-md font-medium py-2 px-4 rounded-lg">
              Participate in online survey
            </button>
          </a>

          <Link to="/acknowldgements">
            <button className="hover:bg-gray-100 border-2 border-gray-200 text-primary text-sm sm:text-md font-medium py-2 px-4 rounded-lg">
              Project Explanations &  Acknowledgements
            </button>
          </Link>
        </div>

        <DescriptionBox location={selectedOption} />
      </div>
    );
  } else {
    return (
      <div className='grid gap-2'>
        <div classname='flex'>
          <select value={selectedOption} onChange={handleChange}>
            <option value="AMPM18-KJ012">Katsura Library</option>
            <option value="AMPM18-KJ010">Inside Main Cafeteria</option>
            <option value="AMPM18-KJ016">Main Cafeteria Entrance</option>
          </select>
        </div>
        
        {/*<Notice location={selectedOption}/>*/}
        <PopularityChart location={selectedOption}/>

        <div className='flex gap-2'>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLScU2ZbhWCi0iWpxQf8SrkZn0OopxQ14FeHZs0MaDCwGQ1qmrg/viewform?usp=sf_link">
            <button className="bg-primary hover:bg-gray-600 text-white text-sm sm:text-md font-medium py-2 px-4 rounded-lg">
              Participate in online survey
            </button>
          </a>

          <Link to="/acknowldgements">
            <button className="hover:bg-gray-100 border-2 border-gray-200 text-primary text-sm sm:text-md font-medium py-2 px-4 rounded-lg">
              Project Explanations &  Acknowledgements
            </button>
          </Link>
        </div>

        <DescriptionBox location={selectedOption} />
      </div>
    );
  }
  
}

export default MyDropdown;
