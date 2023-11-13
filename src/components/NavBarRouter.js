import React, {useState} from 'react';
import { Link as ReactRouterLink, useNavigate } from 'react-router-dom';
import logo from "./logo.jpg";
import HomePage from '../pages/HomePage';


const NavbarRouter = ({ toggleTheme, darkTheme, onSearch }) => {
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState('');

  const handleLoginClick = () => {
    // Redirecționează către pagina de login
    navigate('/login');
  };

  const handleSearchChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleSearchClick = () => {
    // Apelarea funcției de căutare din App.js
    onSearch(searchInput);
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
          <li><ReactRouterLink to="/resultspage" target="_self">ResultsPage</ReactRouterLink></li>
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
          />
          <button className="search-button" onClick={handleSearchClick}>
            Search
          </button>
        </div>
        <ul>
            {/* Adaugă onClick pentru a gestiona acțiunea de login */}
            <li onClick={handleLoginClick}><ReactRouterLink to="/login" target="_self">Log in</ReactRouterLink></li>
            {/*<li><ReactRouterLink to="/login" target="_self">Login</ReactRouterLink></li>*/}
        </ul>

        <span onClick={toggleTheme} className="button">
        💡
        </span>
      </div>
    </div>
  );
};

export default NavbarRouter;