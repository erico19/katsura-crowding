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
        <option value="AMPM18-KJ008">AMPM18-KJ008</option>
        <option value="AMPM18-KJ009">AMPM18-KJ009</option>
        <option value="AMPM18-KJ010">AMPM18-KJ010</option>
        <option value="AMPM18-KJ011">AMPM18-KJ011</option>
        <option value="AMPM18-KJ012">AMPM18-KJ012</option>
        <option value="AMPM18-KJ013">AMPM18-KJ013</option>
        <option value="AMPM18-KJ014">AMPM18-KJ014</option>
        <option value="AMPM18-KJ015">AMPM18-KJ015</option>
        <option value="AMPM18-KJ016">Cafeteria Entrance</option>
        <option value="AMPM18-KJ017">Cafeteria Exit</option>
      </select>
      <Notice location={selectedOption}/>
      <PopularityChart location={selectedOption}/>
    </div>
  );
}

export default MyDropdown;