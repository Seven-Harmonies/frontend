import React from "react";
import logo from "./logo.jpg";
import { Link as ReactRouterLink } from 'react-router-dom';


function NavBar({ handleLoginClick, toggleTheme }) {
  return (
    <div className="navbar">
      <img src={logo} alt="VolunTeamHub Logo" className="logo-image" />
      <div className="title">VolunTeamHub</div>
      <div className="search-bar">
        <input type="text" placeholder="Type here" className="search-input" />
        <button className="search-button">Search</button>
      </div>
       <div>
        <span onClick={handleLoginClick} className="button">
          Log In
        </span>
    
        <span className="button">
          <select className="custom-select">
            <option value="button">Home</option>
            <option value="button">About us</option>
            <option value="button">Organizations</option>
            <option value="button">Leave a review</option>
            <option value="button">Chat</option>
            <option value="button">Contact</option>
          </select>
        </span>
        <span onClick={toggleTheme} className="button">
        💡
        </span>
      </div>
    </div>
  );
}

export default NavBar;