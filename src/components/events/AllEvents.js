/*import React from 'react';

const AllEvents = ({ events }) => {
  return (
    <div>
      <h2>All Events</h2>
      {events.map((event) => (
        <div key={event.id}>
          <p>Name: {event.name}</p>
          <p>Date: {event.date}</p>
          <p>Location: {event.location}</p>
          <p>Category: {event.category}</p>
          <p>Description: {event.description}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default AllEvents;*/


const AllEvents = [
  {
    id: 1,
    name: 'Proiectul Orizont Verde',
    date: '25 Mai 2024',
    location: ' ',
    description: 'Motto: "Un gest mic, un impact mare - plantați un copac astăzi!" Proiectul Orizont Verde reprezintă o inițiativă de voluntariat dedicată transformării comunității noastre într-un mediu mai verde și mai sănătos. În cadrul acestui eveniment de voluntariat, ne propunem să aducem împreună oameni pasionați de protejarea mediului înconjurător pentru a lucra în echipă și a realiza schimbări palpabile în comunitatea noastră.',
    participants: 30,
    images: ['/images/copaci.jpg', '/images/maini-planta.jpg', '/images/planting2.png'],
    organizer: 'lotto romania',
    category: 'natura',
    coverPhoto: "/images/copii-padure.jpg"
  },
  {
    id: 2,
    name: 'Mâini pentru Curățenie',
    date: '13 Martie 2024',
    location: 'Parcul Central, Cluj-Napoca',
    description: '"Fiecare palmă murdară este o investiție în frumusețea viitoare."',
    participants: 30,
    images: ['/images/curat-maini.jpg', '/images/clean.png', '/images/maini.jpg'],
    organizer: 'nu se stie',
    category: 'curatenie',
    coverPhoto: "/images/curat-doamna.jpg"
  },
  {
    id: 3,
    name: 'Tutoriat pentru Elevii din Zone Defavorizate',
    date: '20 februarie 2024',
    location: 'Cluj-Napoca',
    description: '"Fiecare copil merită șansa unei educații de calitate."',
    participants: 30,
    images: ['/images/elevi-clasa.jpg', '/images/discutie.jpg', '/images/elevi.jpg'],
    organizer: 'Rotaru SRL',
    category: 'educatie',
    coverPhoto: "/images/tutoriat.jpg"

  },
  {
    id: 4,
    name: 'Ziua În care Ne Întâlnim în Diversitate',
    date: '15 aprilie 2024',
    location: 'Cluj-Napoca',
    description: '"Fiecare zâmbet aduce lumina în viața noastră."',
    participants: 30,
    images: ['/images/diversitate-poster.jpg', '/images/diza1.png', '/images/diversitate-grupfete.jpg'],
    organizer: "Asociatia Diversity",
    category: 'diversitate',
    coverPhoto: "/images/diversitate-maini.jpg"
  },
  {
    id: 5,
    name: 'Dar din Inimă: Colectare de Alimente pentru Familii Nevoiașe',
    date: '3 iulie 2024',
    location: 'City Park',
    description: '"O simplă donație poate aduce bucurie în inimile celor aflați în nevoie."',
    participants: 30,
    images: ['/images/alimente-pungimancare.jpg', '/images/alimente.jpg', '/images/alimente-distribuire.jpg'],
    organizer: 'Alba-Ca-Zapada',
    category: "alimente",
    coverPhoto: "/images/10.jpg"
  },
  // Adaugă alte evenimente aici
];

export default AllEvents;