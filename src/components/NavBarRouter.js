import React, { useState } from 'react';
import { Link as ReactRouterLink, useNavigate } from 'react-router-dom';
import logo from "./logo.jpg";
import HomePage from '../pages/HomePage';
import AllEvents from './events/AllEvents.js';
import SearchOptions from './SearchOptions.js';
import SearchSuggestions from './SearchSuggestions.js';


const NavbarRouter = ({ toggleTheme, darkTheme, onSearch }) => {
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState(null);
  const [selectedSubOption, setSelectedSubOption] = useState(null);
  const [options, setOptions] = useState(['Categorie', 'Data', 'Locație']);


  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleSearchChange = (event) => {
    const searchTerm = event.target.value;
    setSearchInput(searchTerm);

    // Filter events based on the search term
    const filteredEvents = AllEvents.filter((event) =>
      event.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Update search suggestions
    setSuggestions(filteredEvents);
  };

  const handleSearchClick = () => {
    onSearch(searchInput);
  };

  const handleFilterSelect = (filter) => {
    setSelectedFilter(filter);
    setSelectedSubOption(null); // Resetează sub-opțiunile atunci când se schimbă filtrele
  };

  const handleSubOptionSelect = (subOption) => {
    setSelectedSubOption(subOption);
    // Implementează logica necesară pentru filtrare în funcție de sub-opțiunea selectată
    console.log(`Sub-opțiune selectată: ${subOption}`);
  };

  const handleSuggestionClick = (selectedEvent) => {
    navigate(`/evenimente/${selectedEvent.name}`);
  };

  return (
    <div className="navbarrouter">
      <div className='flex-section'>
        <img src={logo} alt="VolunTeamHub Logo" className="logo-image-router" />
        <div className="titlu1">VolunTeamHub</div>
      </div>

      <div className='flex-section'>
        <ul>
          <li><ReactRouterLink to="/homepage" target="_self">HomePage</ReactRouterLink></li>
          <li><ReactRouterLink to="/evenimente" target="_self">Evenimente</ReactRouterLink></li>
          
        </ul>
      </div>

      <div className='flex-section'>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Type here"
            className="search-input"
            value={searchInput}
            onChange={handleSearchChange}
           // onClick={() => setCategorySuggestions([...new Set(AllEvents.map((event) => event.category))])}
            //onFocus={() => setCategorySuggestions([...new Set(AllEvents.map((event) => event.category))])}
          />
          {/*
          {categorySuggestions.length > 0 && (
            <div className="suggestion-section">
              {categorySuggestions.map((category) => (
                <div key={category} className="suggestion-item" onClick={() => handleCategorySuggestionClick(category)}>
                  {category}
                </div>
              ))}
            </div>
              )}*/}

          {/* Search suggestions */}
          {suggestions.length > 0 && (
            <SearchSuggestions suggestions={suggestions} onItemClick={handleSuggestionClick} />
          )}

          

          <button className="search-button" onClick={handleSearchClick}>
            Search
          </button>

          {/* Butonul pentru dropdown */}
          <div className="filter-dropdown">
            <button className="filter-button">☰</button>
            <div className="filter-content">
              {/* Opțiuni pentru dropdown */}
              <div onClick={() => handleFilterSelect('categorie')}>
                Categorie
                {selectedFilter === 'categorie' && (
                  <div className="sub-options">
                    <div onClick={() => handleSubOptionSelect('natura')}>Natura</div>
                    <div onClick={() => handleSubOptionSelect('diversitate')}>Diversitate</div>
                    <div onClick={() => handleSubOptionSelect('curatenie')}>Curățenie</div>
                    {/* Alte opțiuni... */}
                  </div>
                )}
              </div>
              <div onClick={() => handleFilterSelect('data')}>Data</div>
              <div onClick={() => handleFilterSelect('locatie')}>Locație</div>
              {/* Alte opțiuni... */}
            </div>
          </div>
          

          
        </div>
        <ul>
          <li onClick={handleLoginClick}><ReactRouterLink to="/login" target="_self">Log in</ReactRouterLink></li>
        </ul>

        <span onClick={toggleTheme} className="button">
          💡
        </span>
      </div>
    </div>
  );
};

export default NavbarRouter;
