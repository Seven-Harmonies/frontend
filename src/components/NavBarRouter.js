import React, { useState } from 'react';
import { Link as ReactRouterLink, useNavigate } from 'react-router-dom';
import logo from "./logo.jpg";
import HomePage from '../pages/HomePage';
import AllEvents from './events/AllEvents.js';
import SearchSuggestions from './SearchSuggestions.js';


const NavbarRouter = ({ toggleTheme, darkTheme, onSearch }) => {
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  //const [categorySuggestions, setCategorySuggestions] = useState([]);

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

    // Extract unique categories from all events
    //const uniqueCategories = [...new Set(AllEvents.map((event) => event.category))];

    // Update category suggestions
    //setCategorySuggestions(uniqueCategories);
  };

  const handleSearchClick = () => {
    onSearch(searchInput);
  };

 /* const handleCategorySuggestionClick = (category) => {
    // Handle the selection of a category suggestion, e.g., navigate to the category page
    navigate(`/categories/${category}`);
  };*/

  const handleSuggestionClick = (selectedEvent) => {
    // Handle the selection of a suggestion, e.g., navigate to the event page
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
