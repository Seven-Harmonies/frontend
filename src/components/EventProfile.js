// EventProfile.js
import React from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';
import '../EventProfile.css';
import { useState } from 'react';

const EventProfile = ({ event }) => {

  const joinLink = `/evenimente/${event.name}`;

  const [isJoined, setIsJoined] = useState(false);

  const handleJoinClick = () => {
    setIsJoined((prevIsJoined) => !prevIsJoined);
  };

  const joinButtonText = isJoined ? 'Joined' : 'Join';
  const buttonClass = isJoined ? 'action-button joined' : 'action-button join';

  return (
    <div className="profile-page">
        <div className="profile-page" style={{ backgroundImage: `url(${event.coverPhoto})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '50vh' }}/>
      <div className="profile-content">
        <ReactRouterLink to={joinLink} className='event.name'>
          {event.name}
        </ReactRouterLink>

        {/* Restul codului rămâne neschimbat */}

      </div>
    </div>
  );
};

export default EventProfile;
