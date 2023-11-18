import React, { useState } from 'react';
import './SearchOptions.css';

const SearchOptions = ({  onSelect }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [options, setOptions] = useState(['Categorie', 'Data', 'Locație']);

  const handleSelect = (option) => {
    setSelectedOption(option);
    onSelect(option);
  };

  return (
    <div className="dropdown">
      <button className="dropdown-button">{selectedOption || 'Selectează'}</button>
      <div className="dropdown-content">
        {options.map((option) => (
          <div key={option} onClick={() => handleSelect(option)} className="dropdown-item">
            {option}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchOptions;

