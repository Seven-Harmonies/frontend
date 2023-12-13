import React, { useState } from 'react';
import SearchSuggestions from './SearchSuggestions';

const EventFilter = ({ onSearch, onFilter }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState(null);
  const [selectedSubOption, setSelectedSubOption] = useState(null);
  const [options] = useState(['Categorie', 'Data', 'Locație']);
  const [suggestions, setSuggestions] = useState([]);

  const handleSearchChange = (event) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);
    onSearch(newSearchTerm);

    // Simulează sugestii pentru evenimente
    const eventSuggestions = [
      { id: 1, name: 'Electric' },
      { id: 2, name: 'Untold Elec' },
      // Adaugă alte sugestii...
    ];
    const filteredSuggestions = eventSuggestions.filter((event) =>
      event.name.toLowerCase().includes(newSearchTerm.toLowerCase())
    );
    setSuggestions(filteredSuggestions);
  };

  const handleFilterSelect = (filter) => {
    setSelectedFilter(filter);
    setSelectedSubOption(null);
    onFilter(filter); // Trimite filtrul către componenta părinte sau orice altă logică ai nevoie
  };

  const handleSubOptionSelect = (subOption) => {
    setSelectedSubOption(subOption);
    onFilter(subOption); // Trimite sub-opțiunea către componenta părinte sau orice altă logică ai nevoie
  };

  const handleSuggestionClick = (selectedEvent) => {
    setSearchTerm(selectedEvent.name);
    onSearch(selectedEvent.name);
    setSuggestions([]); // Ascunde sugestiile după selectare
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Type here"
        className="search-input"
        value={searchTerm}
        onChange={handleSearchChange}
      />

      {suggestions.length > 0 && (
        <SearchSuggestions suggestions={suggestions} onItemClick={handleSuggestionClick} />
      )}

      <div className="filter-dropdown">
        <button className="filter-button">☰</button>
        <div className="filter-content">
          {options.map((option) => (
            <div key={option} onClick={() => handleFilterSelect(option)}>
              {option}
              {selectedFilter === option && (
                <div className="sub-options">
                  {/* Aici poți adăuga sub-opțiunile corespunzătoare */}
                  {['Natura', 'Diversitate', 'Curățenie'].map((subOption) => (
                    <div key={subOption} onClick={() => handleSubOptionSelect(subOption)}>
                      {subOption}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventFilter;
