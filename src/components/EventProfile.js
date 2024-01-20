import React, { useState } from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';
import '../EventProfile.css';

const EventProfile = ({ event }) => {
    const joinLink = `/evenimente/${event.name}`;

    const [isJoined, setIsJoined] = useState(false);

    const handleJoinClick = async (username) => {
      
      try {
      const response = await fetch('http://localhost:8081/api/joinEvent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ eventName: event.name, username }),
      });

      if (!response.ok) {
        console.error('Failed to join/leave event:', response.statusText);
        return;
      }

      setIsJoined((prevIsJoined) => !prevIsJoined);
    } catch (error) {
      console.error('Error during join/leave event:', error.message);
    }
  };

  const joinButtonText = isJoined ? 'Joined' : 'Join';
  const buttonClass = isJoined ? 'action-button joined' : 'action-button join';

  return (
    <div className="profile-page">
      <div
        className="profile-page"
        style={{
          backgroundImage: `url(${event.coverPhoto})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '50vh',
        }}
      />
      <div className="profile-content">
        <ReactRouterLink to={joinLink} className="event.name">
          {event.name}
        </ReactRouterLink>
        <button className={buttonClass} onClick={handleJoinClick}>
          {joinButtonText}
        </button>
      </div>
    </div>
  );
};

export default EventProfile;
