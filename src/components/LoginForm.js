import React, { useState } from "react";
import ImageCarousel from "./ImageCarousel";

const LoginForm = ({ isShowLogin }) => {
  const [showVolunteerModal, setShowVolunteerModal] = useState(false);
  const [showOrganizationModal, setShowOrganizationModal] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const openVolunteerModal = () => {
    setShowVolunteerModal(true);
    setShowOrganizationModal(false); // Close the organization modal if it's open
    setShowSignUpModal(false); // Close the sign-up modal if it's open
  };
  
  const openOrganizationModal = () => {
    setShowOrganizationModal(true);
    setShowVolunteerModal(false); // Close the volunteer modal if it's open
    setShowSignUpModal(false); // Close the sign-up modal if it's open
  };
  
  const openSignUpModal = () => {
    setShowSignUpModal(true);
    setShowVolunteerModal(false); // Close the volunteer modal if it's open
    setShowOrganizationModal(false); // Close the organization modal if it's open
  };
  const closeModal = () => {
    setShowVolunteerModal(false);
    setShowOrganizationModal(false);
    setShowSignUpModal()
  };

  const openLoginModal = () => {
    // Deschide modalul corespunzător pentru autentificare
    setShowVolunteerModal(true);
    setShowOrganizationModal(false);
    setShowSignUpModal(false);
  };
  
  return (
    
    <div className={`${isShowLogin ? "active" : ""} show`}>
      <h2 style={{ color: "var(--text-color)" }}></h2>
      <div className="login-form">
        <div className="form-box solid">
          <button onClick={openVolunteerModal} className="closeModal">
            Log In as Volunteer
          </button>
          <button onClick={openOrganizationModal} className="closeModal">
            Log In as Organization
          </button>
          <button onClick={openSignUpModal} className="closeModal">
            Sign Up
            </button>
          
        </div>

        {showVolunteerModal && (
          <div className="modal">
            
            <form>
              <h1 className="login-text">Hello Volunteer!</h1>
              <label>Username</label>
              <br />
              <input type="text" name="username" className="login-box" />
              <br />
              <label>Password</label>
              <br />
              <input type="password" name="password" className="login-box" />
              <br />
              <input type="submit" value="LOGIN" className="login-btn" />
            </form>
            <button onClick={closeModal}>Close</button>
          </div>
        )}

        {showOrganizationModal && (
          <div className="modal">
            
            <form>
              <h1 className="login-text">Hello Organization!</h1>
              <label>Username</label>
              <br />
              <input type="text" name="username" className="login-box" />
              <br />
              <label>Password</label>
              <br />
              <input type="password" name="password" className="login-box" />
              <br />
              <input type="submit" value="LOGIN" className="login-btn" />
            </form>
            <button onClick={closeModal}>Close</button>
          </div>
        )}
        {showSignUpModal && (
  <div className="modal">
    
    <form>
      <h1 className="login-text">Sign Up</h1>
      <label>Username</label>
      <br />
      <input type="text" name="username" className="login-box" />
      <br />
      <label>Email</label>
      <br />
      <input type="text" name="username" className="login-box" />
      <br />
      <label>Telephone Number</label>
      <br />
      <input type="text" name="username" className="login-box" />
      <br />
      <label>Password</label>
      <br />
      <input type="password" name="password" className="login-box" />
      <br />
      <input type="submit" value="SUBMIT" className="login-btn" />
    </form>
    <button onClick={closeModal}>Close</button>
  </div>
)}

        
      </div>
    </div>
  );
};

export default LoginForm;