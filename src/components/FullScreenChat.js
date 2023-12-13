// FullScreenChat.js
import React, { useState } from 'react';
import Chat from './Chat';
import './FullScreenChat.css';

const FullScreenChat = ({ isLoggedIn, organizations, onClose }) => {
  const [selectedOrganization, setSelectedOrganization] = useState(null);

  const handleOrganizationSelect = (organizationId) => {
    setSelectedOrganization(organizationId);
  };

  return (
    <div className="full-screen-chat-overlay">
      <div className="full-screen-chat-container">
        <button className="close-button" onClick={onClose}>
          X
        </button>
        {selectedOrganization ? (
          <Chat
            isLoggedIn={isLoggedIn}
            organizations={organizations}
            selectedOrganization={selectedOrganization}
            onClose={onClose}
          />
        ) : (
          <div className="chat-organizations">
            <h2>Select an organization:</h2>
            <ul>
              {organizations.map((organization) => (
                <li
                  key={organization.id}
                  onClick={() => handleOrganizationSelect(organization.id)}
                >
                  {organization.name}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default FullScreenChat;
