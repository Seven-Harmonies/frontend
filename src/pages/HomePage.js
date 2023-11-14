import '../App.css'
import React, { useState, useNavigate } from 'react';
import Body from "../Body";
import ImageCarousel from "../components/ImageCarousel";
import NavbarRouter from '../components/NavBarRouter';
import EventsPage from './EventsPage';


const HomePage = () =>{
  const [darkTheme, setDarkTheme] = useState(false);


  const toggleTheme = () => {
    setDarkTheme(prevDarkTheme => !prevDarkTheme);
    const body = document.querySelector("body");
    body.style.backgroundColor = darkTheme ? "#fff" : "#333";
  };
  /*
  const handleLoginClick = () => {
    setIsShowLogin((isShowLogin) => !isShowLogin);
  };*/
 
  const openNewTab = (url) => {
      window.open(url, '_blank');
    };
    return (

    /*</div>
    <NavBar handleLoginClick={handleLoginClick} toggleTheme={toggleTheme} darkTheme={darkTheme}>
    <LoginForm isShowLogin={isShowLogin} />*/
    <div className={'App ${darkTheme ? "dark-theme" : "light-theme"}'}>
    <div>
    <NavbarRouter toggleTheme={toggleTheme} darkTheme={darkTheme}  />
    <ImageCarousel />

     {/* Adaugă un link către pagina de evenimente */}
     <EventsPage />
     

    
    <Body />
    </div>
    </div> );
}
export default HomePage;