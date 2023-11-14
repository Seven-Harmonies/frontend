import React, { useState, useEffect } from 'react';
import EventProfile from '../components/EventProfile';
import NavbarRouter from '../components/NavBarRouter';
import events from '../components/events/AllEvents';
import { useLocation } from 'react-router-dom';

const ResultsPage = () => {
  const [darkTheme, setDarkTheme] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredEvents, setFilteredEvents] = useState(null);
  const { search } = useLocation();

  /*
  useEffect(() => {
    const searchParams = new URLSearchParams(search);
    const term = searchParams.get('search') || '';
    setSearchTerm(term);
  
    // Aplică filtrarea pe evenimente atunci când se schimbă searchTerm
    const filtered = events.filter(
      (event) =>
        event.name.toLowerCase().includes(term.toLowerCase()) ||
        event.description.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredEvents(filtered);
  }, [search]);*/

  const toggleTheme = () => {
    setDarkTheme((prevDarkTheme) => !prevDarkTheme);
    const body = document.querySelector('body');
    body.style.backgroundColor = darkTheme ? '#fff' : '#333';
  };

  const openNewTab = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div>
      <NavbarRouter toggleTheme={toggleTheme} darkTheme={darkTheme} onSearch={() => {}} />

      <div className='page-layout'>
        {/* Afișează profilurile evenimentelor */}
        
      </div>
    </div>
  );
};

export default ResultsPage;