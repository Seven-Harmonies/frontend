// EventsPage.js
import React, { useState } from 'react';
import EventProfile from '../components/EventProfile';
import NavbarRouter from '../components/NavBarRouter';
import events from '../components/events/AllEvents';


const EventsPage = () => {
  const [darkTheme, setDarkTheme] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredEvents, setFilteredEvents] = useState(null);

  const toggleTheme = () => {
    setDarkTheme((prevDarkTheme) => !prevDarkTheme);
    const body = document.querySelector('body');
    body.style.backgroundColor = darkTheme ? '#fff' : '#333';
  };

  // Funcție pentru a actualiza starea de căutare
  const handleSearch = (term) => {
    setSearchTerm(term);

    // Filtrare evenimente
    const filtered = events.filter(
      (event) =>
        event.name.toLowerCase().includes(term.toLowerCase()) ||
        event.description.toLowerCase().includes(term.toLowerCase())
    );

    setFilteredEvents(filtered);
  };

  const openNewTab = (url) => {
    window.open(url, '_blank');
  };

  



  
  /*<div className='page-layout'>
      {events.map((event) => (
        <EventProfile key={event.id} event={event} />
      ))}

      </div> */


  const eventsToDisplay = filteredEvents || events;

  return (
    <div> <NavbarRouter toggleTheme={toggleTheme} darkTheme={darkTheme} onSearch={handleSearch} />
    
      <div className="page-layout">
        {/* Afișează profilurile evenimentelor */}
        {eventsToDisplay.map((event) => (
          <EventProfile key={event.id} event={event} />
        ))}
      </div>

    </div>
  );
};

export default EventsPage;
