import '../App.css'
import React, { useState, useNavigate } from 'react';
import Body from "../Body";
import ImageCarousel from "../components/ImageCarousel";
import NavbarRouter from '../components/NavBarRouter';
import EventsPage from './EventsPage';
import AllEvents from '../components/events/AllEvents';
import './HomePage.css';
import EventProfile from '../components/EventProfile';
import { Link as ReactRouterLink } from 'react-router-dom';
import EventDisplay from '../components/events/EventDisplay';



const HomePage = ({event}) =>{
/*
  const joinLink = `/evenimente/${event.name}`;

  const [isJoined, setIsJoined] = useState(false);
*/
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  
  const [darkTheme, setDarkTheme] = useState(false);


  const toggleTheme = () => {
    setDarkTheme(prevDarkTheme => !prevDarkTheme);
    const body = document.querySelector("body");
    body.style.backgroundColor = darkTheme ? "#fff" : "#333";
  };
  /*
  const handleLoginClick = () => {
    setIsShowLogin((isShowLogin) => !isShowLogin);
  };*/
 
  const openNewTab = (url) => {
      window.open(url, '_blank');
    };



    return (

    /*</div>
    <NavBar handleLoginClick={handleLoginClick} toggleTheme={toggleTheme} darkTheme={darkTheme}>
    <LoginForm isShowLogin={isShowLogin} />*/
    
    <div className={`App ${darkTheme ? 'dark-theme' : 'light-theme'}`}>
      <div>
        <NavbarRouter toggleTheme={toggleTheme} darkTheme={darkTheme} />
        <ImageCarousel />

        <div className="events-container">
          {AllEvents.map((event) => (
            <div key={event.id} className="event-card">
              
              <div className="event-details">
                <ReactRouterLink to={`/evenimente/${event.name}`} className="event-name">
                  {event.name}
                </ReactRouterLink>
                <p className="event-description">{event.description}</p>
                <p className="event-date">Date: {event.date}</p>
                {/* Add other event details as needed */}
              </div>
              <img src={event.coverPhoto} alt={event.name} className="event-image" />
            </div>
          ))}
        </div>

        <Body />
      </div>
    </div>
  );
};

export default HomePage;