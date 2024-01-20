import React from 'react';
import { ChatEngine, ChatFeed, ChatList } from 'react-chat-engine';

const Chat = ({ isLoggedIn, organizations, onClose }) => {
  // Crează un array de utilizatori
  const users = [
    { userName: 'aduca.mihaila', userSecret: 'cioco123' },
    { userName: 'alecsandra', userSecret: 'cioco123' },
    // Adaugă cât mai mulți utilizatori dorești în același format
  ];

  return (
    <ChatEngine
      projectID="abe257a9-9892-427b-b09d-d9111dd5e443"
      userName="aduca.mihaila" // Poate fi oricare din utilizatorii adăugați
      userSecret="cioco123" // Poate fi oricare din secretele utilizatorilor adăugați
      users={users} // Proprietatea care adaugă utilizatorii
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      renderChatList={(chatAppProps) => <ChatList {...chatAppProps} />}
    />
  );
};

export default Chat;