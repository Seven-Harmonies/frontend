// EventsPage.js
import React, { useState } from 'react';
import EventProfile from '../components/EventProfile';
import NavbarRouter from '../components/NavBarRouter';

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

  const events = [
    {
      id: 1,
      name: 'Proiectul Orizont Verde',
      date: '25 Mai 2024',
      location: 'Alba-Iulia',
      description: 'Motto: "Un gest mic, un impact mare - plantați un copac astăzi!" Proiectul Orizont Verde reprezintă o inițiativă de voluntariat dedicată transformării comunității noastre într-un mediu mai verde și mai sănătos. În cadrul acestui eveniment de voluntariat, ne propunem să aducem împreună oameni pasionați de protejarea mediului înconjurător pentru a lucra în echipă și a realiza schimbări palpabile în comunitatea noastră.',
      
    },
    {
      id: 2,
      name: 'Mâini pentru Curățenie',
      date: '13 Martie 2024',
      location: 'Parcul Central, Cluj-Napoca',
      description: '"Fiecare palmă murdară este o investiție în frumusețea viitoare."',
      //participants: 30,
      
    },
    {
      id: 3,
      name: 'Tutoriat pentru Elevii din Zone Defavorizate',
      date: '20 februarie 2024',
      location: 'Cluj-Napoca',
      description: '"Fiecare copil merită șansa unei educații de calitate."',
      //participants: 30,
    },
    {
      id: 4,
      name: 'Ziua În care Ne Întâlnim în Diversitate',
      date: '15 aprilie 2024',
      location: 'Cluj-Napoca',
      description: '"Fiecare zâmbet aduce lumina în viața noastră."',
      //participants: 30,
    },
    {
      id: 5,
      name: 'Dar din Inimă: Colectare de Alimente pentru Familii Nevoiașe',
      date: '3 iulie 2024',
      location: 'City Park',
      description: '"O simplă donație poate aduce bucurie în inimile celor aflați în nevoie."',
      //participants: 30,
    },
    // Adaugă alte evenimente aici
  ];
  
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
