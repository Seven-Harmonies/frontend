import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EventsPage from './pages/EventsPage';
import HomePage from './pages/HomePage';
import NavbarRouter from "./components/NavBarRouter";
import LoginForm from "./components/LoginForm";
import AddEventsForm from './components/events/AddEventsForm';
import EventDisplay from './components/events/EventDisplay';
import { AuthProvider } from '../src/AuthentificationContext'

export default function App() {

  return (
    <AuthProvider>
      <div>
        <Router>
          <NavbarRouter />
          <Routes>
            <Route path="/evenimente" element={<EventsPage />} />
            <Route path="/evenimente/:name" element={<EventDisplay />} />

            <Route path="/" element={<HomePage />} />
            <Route path="/homepage" element={<HomePage />} />

            <Route path="/login" element={<LoginForm />} />
            <Route path="/addEvent" element={<AddEventsForm />} />

          </Routes>
        </Router>
      </div>
    </AuthProvider>

  );
}
