// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EventsPage from './pages/EventsPage';
import HomePage from './pages/HomePage';
import NavbarRouter from "./components/NavBarRouter";
import LoginForm from "./components/LoginForm";

import EventDisplay from './components/events/EventDisplay';

export default function App() {
  const [currentContent, setCurrentContent] = useState("homepage");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const handleLogin = async (username, password) => {
    try {
      // ... (codul existent)
  
      // Setează informații despre utilizator în localStorage
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('username', username);
  
      // ... (restul codului existent)
    } catch (error) {
      // ... (codul existent)
    }
  };
  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
  };
  const handleNavigate = (content) => {
    setCurrentContent(content);
  };

  return (
    <div>
      <Router>
      <NavbarRouter />
        <Routes>
          <Route path="/evenimente" element={<EventsPage />} />
          <Route path="/evenimente/:name" element={<EventDisplay />} />

          <Route path="/" element={<HomePage />} />
          <Route path="/homepage" element={<HomePage />} />
          
          <Route path="/login" element={<LoginForm />} />
          
        </Routes>
      </Router>
    </div>
  );
}
