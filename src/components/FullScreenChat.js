// FullScreenChat.js
import React, { useState } from 'react';
import Chat from './Chat';
import './FullScreenChat.css';

const FullScreenChat = ({ isLoggedIn, organizations, onClose }) => {
  const [selectedOrganization, setSelectedOrganization] = useState(null);

  const handleOrganizationSelect = (organizationId) => {
    setSelectedOrganization(organizationId);
  };

  const handleGoToChatClick = () => {
    // Deschide fereastra de chat când se apasă butonul "Go to chat"
    setSelectedOrganization(organizations[0].id); // Setează prima organizație
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
            initialMessage="Send a text"
          />
        ) : (
          <div className="chat-organizations">

            {/* Înlocuiește lista cu un buton "Go to chat" */}
            <button className="go-to-chat-button" onClick={handleGoToChatClick}>
              Go to chat
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FullScreenChat;
