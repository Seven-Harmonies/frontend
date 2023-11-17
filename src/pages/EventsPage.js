// EventsPage.js
import React, { useState } from 'react';
import EventProfile from '../components/EventProfile';
import NavbarRouter from '../components/NavBarRouter';
import events from '../components/events/AllEvents';
import { useNavigate, Link } from 'react-router-dom';
import EventDisplay from '../components/events/EventDisplay';



const EventsPage = () => {
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
          {events.map((event) => (
            <div key={event.name}>
              <EventProfile event={event} />
              
             
              

            </div>
          ))}
        </div>
      </div>
  );
};

export default EventsPage;
