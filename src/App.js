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

  const handleNavigate = (content) => {
    setCurrentContent(content);
  };

  return (
    <div>
      <Router>
        <NavbarRouter handleNavigate={handleNavigate} />
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
