// Chat.js
import React, { useState, useEffect } from 'react';
import './Chat.css';

import { useAuthState } from 'react-firebase-hooks/auth';
import { collection, addDoc, onSnapshot, orderBy, query, where } from 'firebase/firestore';
import { auth, firestore, timestamp } from '../firebase';

const Chat = ({ isLoggedIn, organizations, selectedOrganization, onClose }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [chatInput, setChatInput] = useState('');

  const messagesRef = collection(firestore, 'messages');
  const [authUser] = useAuthState(auth);

  useEffect(() => {
    if (selectedOrganization) {
      const unsubscribe = onSnapshot(
        query(messagesRef, where('organization', '==', selectedOrganization), orderBy('createdAt')),
        (snapshot) => {
          const data = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
          setMessages(data);
        }
      );

      return () => unsubscribe();
    }
  }, [messagesRef, selectedOrganization]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
  
    if (newMessage.trim() !== '' && selectedOrganization) {
      const username = authUser ? authUser.displayName: 'Anonymous'; // Verifică dacă există authUser
      await addDoc(messagesRef, {
        text: newMessage,
        createdAt: timestamp,
        username: username,
        organization: selectedOrganization,
      });
  
      setNewMessage('');
    }
  };

  return (
    <div className="full-screen-chat">
      {isLoggedIn && selectedOrganization && (
        <>
          <div className="chat-header">
            <h2>{organizations.find((org) => org.id === selectedOrganization)?.name}</h2>
            <button className="close-button" onClick={onClose}>
              X
            </button>
          </div>
          <div className="chat-container">
            <div className="chat-messages">
              {messages.map((message) => (
                <div key={message.id} className="message">
                  <strong>{message.username}:</strong> {message.text}
                </div>
              ))}
            </div>
            <div className="chat-input">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type your message..."
              />
              <button type="submit" onClick={handleSendMessage}>
                Send
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Chat;
