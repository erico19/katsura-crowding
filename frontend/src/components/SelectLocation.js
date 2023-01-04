import React, { useState } from 'react';

function MyDropdown() {
  const [selectedOption, setSelectedOption] = useState('AMPM18-KJ016');

  function handleChange(event) {
    setSelectedOption(event.target.value);
  }

  return (
    <select value={selectedOption} onChange={handleChange}>
      <option value="AMPM18-KJ008">C Cluster Administration Office</option>
      <option value="AMPM18-KJ009">C1 Entrance</option>
      <option value="AMPM18-KJ010">Cafeteria Inside</option>
      <option value="AMPM18-KJ011">B Administration Office</option>
      <option value="AMPM18-KJ012">Katsura Main Library</option>
      <option value="AMPM18-KJ013">A2 Parkmae</option>
      <option value="AMPM18-KJ014">A1 Entrance</option>
      <option value="AMPM18-KJ015">Bakery</option>
      <option value="AMPM18-KJ016">Cafeteria Entrance</option>
      <option value="AMPM18-KJ017">Cafeteria Exit</option>
    </select>
  );
}

export default MyDropdown;
