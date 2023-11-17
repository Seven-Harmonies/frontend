// EventDisplay.js
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import AllEvents from './AllEvents';
import './EventDisplay.css';

const EventDisplay = () => {
  const { name } = useParams();
  const lowercaseName = name.toLowerCase();
  const event = AllEvents.find((event) => event.name.toLowerCase() === lowercaseName);

  const [isJoined, setIsJoined] = useState(false);
  const [selectedImage, setSelectedImage] = useState(event?.images[0]);

  const handleJoinClick = () => {
    setIsJoined(!isJoined);
  };

  const handleThumbnailClick = (image) => {
    setSelectedImage(image);
  };

  if (!event) {
    return <p>Evenimentul nu a fost găsit.</p>;
  }

  return (
    <div className="event-display">
      <div className="eventdisplay-left">
        <div className="productdisplay-img-list">
          {event.images.map((image, index) => (
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
        <p>Date: {event.date}</p>
        <p>Location: {event.location}</p>
        <p>Description: {event.description}</p>
        <p>Organizer: {event.organizer}</p>
        <p>Category: {event.category}</p>
        <p>Participants: {event.participants || 'N/A'}</p>
        <button className={`action-button ${isJoined ? 'joined' : 'join'}`} onClick={handleJoinClick}>
          {isJoined ? 'Joined' : 'Join'}
        </button>
      </div>
    </div>
  );
};

export default EventDisplay;
