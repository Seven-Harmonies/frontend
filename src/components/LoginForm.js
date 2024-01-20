// LoginForm.tsx
import React, { useState } from 'react';
import handleSignUp from './handlers/SignupHandler.ts';
import handleLoginAsVolunteer from './handlers/LoginHandlerAsVolunteer.ts'
import handleLoginAsAssociation from './handlers/LoginHandlerAsAssociation.ts'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthentificationContext.js'


const LoginForm = ({ isShowLogin, userName }) => {
  // const { username, setUsername, login } = useAuth();

  const [username, setUsername] = useState('');

  const navigate = useNavigate();
  // const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

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
    setShowSignUpModal(false);
  };

  const handleLoginClickAsVolunteer = async (e) => {
    e.preventDefault()
    const response = await handleLoginAsVolunteer(username, password);
    if (response) {
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('username', username);
      localStorage.setItem('association', 'false')
    }
    navigate('/homepage');
  };

  const handleLoginClickAsAssociation = async (e) => {
    e.preventDefault()
    const response = await handleLoginAsAssociation(username, password);
    if (response) {
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('username', username);
      localStorage.setItem('association', 'true')
    }

    navigate('/homepage');

  };

  const handleSignUpClick = async () => {
    console.log("S-a apasat pe butonul de signup");
    try {
      const data = await handleSignUp(username, email, phoneNumber, password);
      console.log("Datele primite: ", data);
    } catch (error) {
      // Handle errors from handleSignUp
      console.error('Error in handleSignUp:', error);
    }
  };

  return (
    <div className={`${isShowLogin ? 'active' : ''} show`}>
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
              <input
                type="text"
                name="username"
                className="login-box"
                onChange={(e) => setUsername(e.target.value)}
              />
              <br />
              <label>Password</label>
              <br />
              <input
                type="password"
                name="password"
                className="login-box"
                onChange={(e) => setPassword(e.target.value)}
              />
              <br />
              <input
                type="submit"
                value="LOGIN"
                className="login-btn"
                onClick={handleLoginClickAsVolunteer}
              />
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
              <input
                type="text"
                name="username"
                className="login-box"
                onChange={(e) => setUsername(e.target.value)}
              />
              <br />
              <label>Password</label>
              <br />
              <input
                type="password"
                name="password"
                className="login-box"
                onChange={(e) => setPassword(e.target.value)}
              />
              <br />
              <input
                type="submit"
                value="LOGIN"
                className="login-btn"
                onClick={handleLoginClickAsAssociation}
              />
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
              <input
                type="text"
                name="username"
                className="login-box"
                onChange={(e) => setUsername(e.target.value)}
              />
              <br />
              <label>Email</label>
              <br />
              <input
                type="text"
                name="email"
                className="login-box"
                onChange={(e) => setEmail(e.target.value)}
              />
              <br />
              <label>Telephone Number</label>
              <br />
              <input
                type="text"
                name="phoneNumber"
                className="login-box"
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
              <br />
              <label>Password</label>
              <br />
              <input
                type="password"
                name="password"
                className="login-box"
                onChange={(e) => setPassword(e.target.value)}
              />
              <br />
              <input
                type="submit"
                value="SUBMIT"
                className="login-btn"
                onClick={handleSignUpClick}
              />
            </form>
            <button onClick={closeModal}>Close</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginForm;
