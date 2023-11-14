import React from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';
import '../EventProfile.css';
import { useState } from 'react';


const EventProfile = ({ event }) => {
  const joinLink = `/evenimente/${event.name}`;

  const [isJoined, setIsJoined] = useState(false);

  const handleJoinClick = () => {
    setIsJoined(prevIsJoined => !prevIsJoined);
  };

  const joinButtonText = isJoined ? 'Joined' : 'Join';
  const buttonClass = isJoined ? 'action-button joined' : 'action-button join';
  

  return (
    <div className="profile-page">
      <div className="cover-photo"></div>
      <div className="profile-content">
        <ReactRouterLink to={joinLink} className='event.name' >
          {event.name}
        </ReactRouterLink>
        <div className="event-details">
          <div className="date">Date: {event.date}</div>
          <div className="location">Location: {event.location}</div>
        </div>
        <div className="description">
          <p>{event.description}</p>
        </div>
        
        <button className={`action-button ${buttonClass}`} onClick={handleJoinClick}>
            {joinButtonText}
          </button>
       
      </div>
    </div>
  );
};

export default EventProfile;