// App.js
import React, { useState } from 'react';
import { Link as ReactRouterLink, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EventsPage from './pages/EventsPage';
import HomePage from './pages/HomePage';
import ResultsPage from "./pages/ResultsPage";
import NavbarRouter from "./components/NavBarRouter";
import Body from "./Body";
import ImageCarousel from "./components/ImageCarousel";
import LoginForm from "./components/LoginForm";
import Event1 from './components/events/Event1';

export default function App() {
  const [currentContent, setCurrentContent] = useState("homepage");

  const handleNavigate = (content) => {
    setCurrentContent(content);
  };

  return (
    <div>
      <Router>
        <NavbarRouter handleNavigate={handleNavigate}/>
        <Routes>
          <Route path="/evenimente" element={<EventsPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/resultspage" element={<ResultsPage />} />
          <Route path="/login" element={<LoginForm />} />
        </Routes>
      </Router>


    </div>
  );
}