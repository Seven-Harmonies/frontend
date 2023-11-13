
import React, { useState } from 'react';
import NavbarRouter from '../components/NavBarRouter';


const ResultsPage = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  const toggleTheme = () => {
    setDarkTheme(prevDarkTheme => !prevDarkTheme);
    const body = document.querySelector("body");
    body.style.backgroundColor = darkTheme ? "#fff" : "#333";
  };

  const openNewTab = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div>
    <NavbarRouter toggleTheme={toggleTheme} darkTheme={darkTheme} />
    <div className='page-layout'>
     
      <h1>ResultsPage</h1>
      <h5>Rezultatul 1</h5>
      <h4>Rezultatul 2</h4>
    </div>
    </div>
  );
};

export default ResultsPage;