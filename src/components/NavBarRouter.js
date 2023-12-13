import React, { useState, useEffect } from 'react';
import { Link as ReactRouterLink, useNavigate } from 'react-router-dom';
import logo from "./logo.jpg";
import HomePage from '../pages/HomePage';
import AllEvents from './events/AllEvents.js';
import SearchOptions from './SearchOptions.js';
import SearchSuggestions from './SearchSuggestions.js';
import Chat from './Chat'; // Importați componenta Chat
import FullScreenChat from './FullScreenChat';


const NavbarRouter = ({ toggleTheme, darkTheme, onSearch }) => {
  const [searchInput, setSearchInput] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState(null);
  const [selectedSubOption, setSelectedSubOption] = useState(null);
  const [options, setOptions] = useState(['Categorie', 'Data', 'Locație']);
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const [profileImage, setProfileImage] = useState(null);
  const [selectedOrganization, setSelectedOrganization] = useState(null);

  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleOpenChat = () => {
    setIsChatOpen(true);
  };

  const handleCloseChat = () => {
    setIsChatOpen(false);
  };


const handleImageLoad = () => {
  console.log('Imagine încărcată cu succes!');
};

  
  
  useEffect(() => {
    // Verifică dacă utilizatorul este autentificat la încărcarea componentei
    const storedIsLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const storedUsername = localStorage.getItem('username');
    const storedProfileImage = localStorage.getItem('profileImage');

  if (storedIsLoggedIn && storedUsername) {
    setIsLoggedIn(true);
    setUsername(storedUsername);

    if (storedProfileImage) {
      setProfileImage(storedProfileImage);
    }
  }
  }, []);

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
    setUsername('');
    navigate('/'); // Întoarce utilizatorul la pagina principală după deconectare
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
      
            <span className="greeting">Hi, {username}! :) </span>
            <button className="logout-button" onClick={handleLogoutClick}>Logout</button>
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
          <li onClick={handleLoginClick}><ReactRouterLink to="/login" target="_self">Log in</ReactRouterLink></li>
          
        )}
      </ul>

        <span onClick={toggleTheme} className="button">
          💡
        </span>
      
      </div>
    </div>
    
  );
};

export default NavbarRouter;
