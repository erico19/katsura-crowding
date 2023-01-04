import React, { useState } from 'react';
import Notice from '../components/Notice';
import PopularityChart from "./PopularityChart"

function MyDropdown() {
  const [selectedOption, setSelectedOption] = useState('AMPM18-KJ016');

  function handleChange(event) {
    setSelectedOption(event.target.value);
  }

  return (
    <div>
      <select value={selectedOption} onChange={handleChange}>
        <option value="AMPM18-KJ008">C Cluster Admnistration Office</option>
        <option value="AMPM18-KJ009">C1 Entrance</option>
        <option value="AMPM18-KJ010">Inside Main Cafeteria</option>
        <option value="AMPM18-KJ011">B Cluster Administration</option>
        <option value="AMPM18-KJ012">Katsura Main Library</option>
        <option value="AMPM18-KJ013">A1 Entrance</option>
        <option value="AMPM18-KJ014">A2 Park Mae</option>
        <option value="AMPM18-KJ015">Bakery</option>
        <option value="AMPM18-KJ016">Cafeteria Entrance</option>
        <option value="AMPM18-KJ017">Cafeteria Exit</option>
      </select>
      <Notice location={selectedOption}/>
      <PopularityChart location={selectedOption}/>
    </div>
  );
}

export default MyDropdown;
