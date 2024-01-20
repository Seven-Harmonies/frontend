import React from 'react';
import { ChatEngine, ChatFeed, ChatList } from 'react-chat-engine';
import './Chat.css';

const Chat = ({ isLoggedIn, organizations, onClose }) => {
  // Crează un array de utilizatori
  const users = [
    { userName: 'mada', userSecret: 'test' },
    { userName: 'rares', userSecret: '1234' },
    { userName: 'marius4452', userSecret: '4321' },
    { userName: 'filip', userSecret: 'abc123' }
    // Adaugă cât mai mulți utilizatori dorești în același format
  ];

  return (
    <ChatEngine
      projectID="f91decd0-0119-46cc-bc63-8d2cf6ee9597"
      userName="mada" // Poate fi oricare din utilizatorii adăugați
      userSecret="test" // Poate fi oricare din secretele utilizatorilor adăugați
      users={users} // Proprietatea care adaugă utilizatorii
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      renderChatList={(chatAppProps) => <ChatList {...chatAppProps} />}
    />
  );
};

export default Chat;