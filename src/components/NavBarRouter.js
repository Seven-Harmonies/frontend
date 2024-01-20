import React, { useState, useEffect } from 'react';
import { Link as ReactRouterLink, useNavigate } from 'react-router-dom';
import logo from "./logo.jpg";
import HomePage from '../pages/HomePage';
import AllEvents from './events/AllEvents.js';
import SearchOptions from './SearchOptions.js';
import SearchSuggestions from './SearchSuggestions.js';
import Chat from './Chat'; // Importați componenta Chat
import FullScreenChat from './FullScreenChat';
import './NavBarRouter.css';
import { isLoggedInAssociation, handleLoginAsAssociation } from './handlers/LoginHandlerAsAssociation.ts';


const NavbarRouter = ({ toggleTheme, darkTheme, onSearch }) => {
  const [searchInput, setSearchInput] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState(null);
  const [selectedSubOption, setSelectedSubOption] = useState(null);
  const [options, setOptions] = useState(['Categorie', 'Data', 'Locație']);
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [miniSearchInput, setMiniSearchInput] = useState('');

  const [showMiniSearch, setShowMiniSearch] = useState(false);

  const [showUsername, setShowUsername] = useState(false);


  const [profileImage, setProfileImage] = useState(null);
  const [selectedOrganization, setSelectedOrganization] = useState(null);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleCloseChat = () => {
    setIsChatOpen(false);
  };


  const handleImageLoad = () => {
    console.log('Imagine încărcată cu succes!');
  };



  // useEffect(() => {
  //   // Verifică dacă utilizatorul este autentificat la încărcarea componentei
  //   // const storedIsLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  //   // const storedUsername = localStorage.getItem('username');
  //   // const storedProfileImage = localStorage.getItem('profileImage');

  //   if (storedIsLoggedIn && storedUsername) {
  //     setIsLoggedIn(true);
  //     setUsername(storedUsername);

  //     if (storedProfileImage) {
  //       setProfileImage(storedProfileImage);
  //     }
  //   }
  // }, []);

  const handleOrganizationSelect = (organizationId) => {
    // Implementează logica pentru gestionarea selecției organizației și deschiderea chat-ului
    console.log(`Organizația selectată: ${organizationId}`);
    setSelectedOrganization(organizationId);
    setIsChatOpen(true);
  };




  const handleLoginClick = () => {
    navigate('/login');
  };


  const handleLogoutClick = () => {
    // Șterge informațiile despre utilizator din localStorage la deconectare
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('username');
    setIsLoggedIn(false);
    setProfileImage(null);
    setSelectedOrganization(null);
    setShowSuggestions(false);
    setUsername('');
    navigate('/'); // Întoarce utilizatorul la pagina principală după deconectare
  };

  //SEARCH DUPA NUME!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

  const handleSearchChangeName = (event) => {
    const searchTerm = event.target.value;
    setSearchInput(searchTerm);

    // Filter events based on the search term for name
    const filteredEvents = AllEvents.filter((event) =>
      event.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Update search suggestions
    setSuggestions(filteredEvents);

    // Show suggestions only when there is a search term
    setShowSuggestions(searchTerm !== '');
  };

  const handleSearchChangeDate = (event) => {
    const searchTerm = event.target.value;
    setSearchInput(searchTerm);

    // Filter events based on the search term for date
    const filteredEvents = AllEvents.filter((event) =>
      event.date.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Update search suggestions
    setSuggestions(filteredEvents);

    // Show suggestions only when there is a search term
    setShowSuggestions(searchTerm !== '');
  };

  const handleSearchChangeLocation = (event) => {
    const searchTerm = event.target.value;
    setSearchInput(searchTerm);

    // Filter events based on the search term for location
    const filteredEvents = AllEvents.filter((event) =>
      event.location.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Update search suggestions
    setSuggestions(filteredEvents);

    // Show suggestions only when there is a search term
    setShowSuggestions(searchTerm !== '');
  };

  const handleSearchChangeCategory = (event) => {
    const searchTerm = event.target.value;
    setSearchInput(searchTerm);

    // Filter events based on the search term for category
    const filteredEvents = AllEvents.filter((event) =>
      event.category.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Update search suggestions
    setSuggestions(filteredEvents);

    // Show suggestions only when there is a search term
    setShowSuggestions(searchTerm !== '');
  };




  const handleSearchClick = () => {
    // Check if there's a search input
    if (searchInput.trim() !== '') {
      // Use encodeURIComponent to handle special characters in the search input
      const encodedSearchTerm = encodeURIComponent(searchInput.trim());
      // Navigate to EventsPage with the search parameter
      navigate(`/evenimente?search=${encodedSearchTerm}`);
    } else {
      // If no search input, navigate to the default events page
      navigate('/evenimente');
    }
  };

  const handleMiniSearch = () => {
    // Check if there's a mini-search input
    if (miniSearchInput.trim() !== '') {
      // Use encodeURIComponent to handle special characters in the mini-search input
      const encodedMiniSearchTerm = encodeURIComponent(miniSearchInput.trim());

      // Navigate to EventsPage with the search parameter based on the selected filter
      navigate(`/evenimente?search=${encodedMiniSearchTerm}&filter=${selectedFilter}`);
    } else {
      // If no mini-search input, navigate to the default events page
      navigate('/evenimente');
    }
  };

  const handleFilterSelect = (filter) => {
    setSelectedFilter(filter);
    setSelectedSubOption(null); // Resetează sub-opțiunile atunci când se schimbă filtrele
    setMiniSearchInput('');
    setShowMiniSearch(true);
  };

  const handleSubOptionSelect = (subOption) => {
    setSelectedSubOption(subOption);
    // Implementează logica necesară pentru filtrare în funcție de sub-opțiunea selectată
    console.log(`Sub-opțiune selectată: ${subOption}`);
  };

  const handleSuggestionClickName = (selectedEvent) => {
    navigate(`/evenimente/${selectedEvent.name}`);
    // Clear the search query and suggestions when an event is selected
    setSearchInput("");
    setSuggestions([]);
    // Update state to indicate that an event is selected
    setShowSuggestions(false);
  };

  const handleSuggestionClickDate = (selectedEvent) => {
    navigate(`/evenimente/${selectedEvent.date}`);
    // Clear the search query and suggestions when an event is selected
    setSearchInput("");
    setSuggestions([]);
    // Update state to indicate that an event is selected
    setShowSuggestions(false);
  };

  const handleSuggestionClickCategory = (selectedEvent) => {
    navigate(`/evenimente/${selectedEvent.category}`);
    // Clear the search query and suggestions when an event is selected
    setSearchInput("");
    setSuggestions([]);
    // Update state to indicate that an event is selected
    setShowSuggestions(false);
  };

  const handleSuggestionClickLocation = (selectedEvent) => {
    navigate(`/evenimente/${selectedEvent.location}`);
    // Clear the search query and suggestions when an event is selected
    setSearchInput("");
    setSuggestions([]);
    // Update state to indicate that an event is selected
    setShowSuggestions(false);
  };

  // Definirea manuală a organizațiilor
  const organizations = [
    { id: 'org1', name: 'Organization 1' },
    { id: 'org2', name: 'Organization 2' },
    // Adaugă oricâte organizații dorești
  ];

  return (
    <div className="navbarrouter">
      <div className='flex-section'>
        <img src={logo} alt="VolunTeamHub Logo" className="logo-image-router" />
        <div className="titlu1">VolunTeamHub</div>
      </div>

      <div className='flex-section'>
        <ul>
          <li className="login-button">
            <ReactRouterLink to="/homepage" target="_self" className="login-link">Home</ReactRouterLink>
          </li>
          <li className="login-button">
            <ReactRouterLink to="/evenimente" target="_self" className="login-link"> Events</ReactRouterLink>
          </li>
          {isLoggedInAssociation && (
            <li className="login-button">
              <ReactRouterLink to="/addEvent" target="_self" className="login-link"> Add Events</ReactRouterLink>
            </li>
          )}
        </ul>
      </div>

      <div className='flex-section'>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Type here"
            className="search-input"
            value={searchInput}
            onChange={handleSearchChangeName}

          />


          {showSuggestions && suggestions.length > 0 && (
            <div className="suggestion-section">
              {suggestions.map((event) => (
                <div
                  key={event.id}
                  className="suggestion-item"
                  onClick={() => handleSuggestionClickName(event)}
                >
                  {event.name}
                </div>
              ))}
            </div>
          )}

          <button className="search-button" onClick={handleSearchClick}>
            Search
          </button>

          {/* Butonul pentru dropdown */}

          <div className="filter-dropdown">
            <button className="filter-button">☰</button>
            <div className="filter-content">
              <div onClick={() => handleFilterSelect('categorie')}>
                <button className={`filter-option-button ${selectedFilter === 'categorie' ? 'selected' : ''}`}>
                  Categorie
                </button>
              </div>

              {showMiniSearch && (
                <div className="sub-options-cat">
                  <input
                    type="text"
                    placeholder="Type here"
                    className="mini-search-input"
                    value={miniSearchInput}
                    onChange={(e) => setMiniSearchInput(e.target.value)}
                  />
                  <button className="mini-search-button" onClick={handleSearchChangeCategory}>
                    🔍
                  </button>
                </div>
              )}


              <div onClick={() => handleFilterSelect('data')}>
                <button className={`filter-option-button ${selectedFilter === 'data' ? 'selected' : ''}`}>
                  Data
                </button>
              </div>
              {showMiniSearch && (
                <div className="sub-options">
                  <input
                    type="text"
                    placeholder="Type here"
                    className="mini-search-input"
                    value={miniSearchInput}
                    onChange={(e) => setMiniSearchInput(e.target.value)}
                  />
                  <button className="mini-search-button" onClick={handleMiniSearch}>
                    🔍
                  </button>
                </div>
              )}


              <div onClick={() => handleFilterSelect('locatie')}>
                <button className={`filter-option-button ${selectedFilter === 'locatie' ? 'selected' : ''}`}>
                  Locație
                </button>
              </div>

              {showMiniSearch && (
                <div className="sub-options">
                  <input
                    type="text"
                    placeholder="Type here"
                    className="mini-search-input"
                    value={miniSearchInput}
                    onChange={(e) => setMiniSearchInput(e.target.value)}
                  />
                  <button className="mini-search-button" onClick={handleMiniSearch}>
                    🔍
                  </button>
                </div>
              )}



            </div>
          </div>

        </div>
        <ul>
          {isLoggedIn ? (
            <li>

              <div className="profile-section">
                {profileImage && (
                  <img
                    src={profileImage}
                    alt="Profile"
                    className="profile-image"
                    onLoad={handleImageLoad}
                  />

                )}

                <span className="greeting">Hi, {username}! : </span>
                <button className="logout-button" onClick={handleLogoutClick}>Log Out</button>
              </div>
              <div>
                {/* Adăugați iconița sau butonul de chat aici */}
                {/* Puteți folosi o iconiță sau un buton pentru a deschide fereastra de chat */}
                <button className="chat-button" onClick={() => handleOrganizationSelect(selectedOrganization)}>
                  🗨️ Chat
                </button>
                {/* Adăugare componenta FullScreenChat */}
                {isChatOpen && (
                  <FullScreenChat
                    isLoggedIn={isLoggedIn}
                    organizations={organizations}
                    onClose={handleCloseChat}
                  />
                )}

              </div>
            </li>

          ) : (
            <li className="login-button" onClick={handleLoginClick}>
              <ReactRouterLink to="/login" target="_self" className="login-link">Log In</ReactRouterLink>
            </li>)}
        </ul>

        <span onClick={toggleTheme} className="button">
          💡
        </span>

      </div>
    </div>

  );
};

export default NavbarRouter;
