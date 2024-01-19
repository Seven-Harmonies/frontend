// EventDisplay.js
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import allEvents from './AllEventsFromDatabase';
import './EventDisplay.css';
import NavbarRouter from '../NavBarRouter';

const EventDisplay = () => {
  const { name } = useParams();
  const lowercaseName = name.toLowerCase();
  const [event, setEvent] = useState(null);
  const [isJoined, setIsJoined] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEventByName = async () => {
      try {
        const eventsArray = await allEvents();
        const foundEvent = eventsArray.find((event) =>
          event.name.toLowerCase() === lowercaseName
        );

        if (foundEvent) {
          console.log(foundEvent);
          setEvent(foundEvent);
          setSelectedImage(foundEvent.photoUrl);
        } else {
          console.log('Event not found');
        }
      } catch (error) {
        console.error('Error fetching events:', error.message);
      }
    };

    fetchEventByName();
  }, [lowercaseName]);

  const handleJoinClick = () => {
    setIsJoined(!isJoined);
  };

  const handleThumbnailClick = (image) => {
    setSelectedImage(image);
  };

  const handleSearch = (term) => {
    navigate(`ResultsPage?search=${term}`);
  };

  if (!event) {
    return <p>Evenimentul nu a fost găsit.</p>;
  }

  return (
    <div>
      <NavbarRouter onSearch={handleSearch} />

      <div className="event-display">
        <div className="eventdisplay-left">
          <div className="productdisplay-img-list">
            {event.images.split(',').map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Event ${index + 1}`}
                className={image === selectedImage ? 'active-thumbnail' : 'thumbnail'}
                onClick={() => handleThumbnailClick(image)}
              />
            ))}
          </div>
          <div className="eventdisplay-img">
            {selectedImage && (
              <img
                className="eventdisplay-main-img"
                src={selectedImage}
                alt={`Main Event`}
              />
            )}
          </div>
        </div>
        <div className="eventdisplay-right">
          <h2>{event.name}</h2>
          <p>Date: {event.eventDate}</p>
          <p>Location: {event.location}</p>
          <p>Description: {event.description}</p>
          <p>Organizer: {event.organizer}</p>
          <p>Category: {event.category}</p>
          <p>Participants: {event.participanti || 'N/A'}</p>
          <button
            className={`action-button ${isJoined ? 'joined' : 'join'}`}
            onClick={handleJoinClick}
          >
            {isJoined ? 'Joined' : 'Join'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventDisplay;
