// EventsPage.js
import React, { useState } from 'react';
import EventProfile from '../components/EventProfile';
import NavbarRouter from '../components/NavBarRouter';
import events from '../components/events/AllEvents';
import { useNavigate, Link , useLocation} from 'react-router-dom';
import EventDisplay from '../components/events/EventDisplay';
import './EventsPage.css';
import { Link as ReactRouterLink } from 'react-router-dom';
import queryString from 'query-string';




const EventsPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const location = useLocation();
  const queryParams = queryString.parse(location.search);
  const searchTerm = queryParams.search || ''; // Obține searchTerm din query string

  
  const [darkTheme, setDarkTheme] = useState(false);
  const navigate = useNavigate();


  const handleSearch = (term) => {
    // Redirecționează utilizatorul către pagina de rezultate
    navigate(`ResultsPage?search=${term}`);
  };

 
  const toggleTheme = () => {
    setDarkTheme((prevDarkTheme) => !prevDarkTheme);
    const body = document.querySelector('body');
    body.style.backgroundColor = darkTheme ? '#fff' : '#333';
  };


  const openNewTab = (url) => {
    window.open(url, '_blank');
  };
  
  /*<div className='page-layout'>
      {events.map((event) => (
        <EventProfile key={event.id} event={event} />
      ))}

      </div> */


 
      return (
        <div>
          <NavbarRouter toggleTheme={toggleTheme} darkTheme={darkTheme} onSearch={handleSearch} />
    
          <div className='page-layout'>
            {events
              .filter((event) => event.name.toLowerCase().includes(searchTerm.toLowerCase()))
              .map((filteredEvent) => (
                <div key={filteredEvent.name}>
                  <EventProfile event={filteredEvent} />
                  {/* Restul codului */}
                </div>
              ))}
          </div>
        </div>
      );
    };
    
    export default EventsPage;