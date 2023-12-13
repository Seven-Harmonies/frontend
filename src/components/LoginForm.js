// LoginForm.tsx
import React, { useState } from 'react';
import handleLogin from './handlers/LoginHandler.ts';
import handleSignUp from './handlers/SignupHandler.ts';
import { useNavigate } from 'react-router-dom';


const LoginForm = ({ isShowLogin , onLogin, onSignUp}) => {
 

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const [showVolunteerModal, setShowVolunteerModal] = useState(false);
  const [showOrganizationModal, setShowOrganizationModal] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const [profileImage, setProfileImage] = useState(null);
  const navigate = useNavigate()
  

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
    console.log("ceva");
    setShowSignUpModal(true);
    setShowVolunteerModal(false); // Close the volunteer modal if it's open
    setShowOrganizationModal(false); // Close the organization modal if it's open
  };

  const closeModal = () => {
    setShowVolunteerModal(false);
    setShowOrganizationModal(false);
    setShowSignUpModal(false);
  };



// Exemplu simplu pentru handleSignUp
const handleSignUp = async (username, email, phoneNumber, password) => {
  try {
    // Implementează logica de înregistrare aici
    // Poate fi o solicitare către API pentru înregistrare
    console.log('SignUp logic goes here:', username, email, phoneNumber, password);

    // Setează informații despre utilizator în localStorage
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('username', username);

    // Salvează imagine în localStorage la înregistrare, dacă este disponibilă
    // Înlocuiește această linie cu logica ta de încărcare a imaginii pentru înregistrare
    const fakeImageUrl = 'https://example.com/fake-image.jpg';
    localStorage.setItem('profileImage', fakeImageUrl);

    // Apelează funcția onSignUp pentru acțiunile după înregistrare
    onSignUp();

    // Navighează către o altă pagină după înregistrare
    navigate('/success');
  } catch (error) {
    console.error('Error in handleSignUp:', error);
    // Tratează orice erori care pot apărea în timpul înregistrării
  }
};


  const handleLogin = async (username, password) => {
    try {
      // ... (codul existent)
  
      // Setează informații despre utilizator în localStorage
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('username', username);
      //localStorage.setItem('profileImage', profileImage ? URL.createObjectURL(profileImage) : '');

      // Salvare imagine în localStorage la logare
    if (profileImage) {
      const imageUrl = URL.createObjectURL(profileImage);
      localStorage.setItem('profileImage', imageUrl);
    }

/*    const formData = new FormData();
    formData.append('profileImage', profileImage);

    await fetch('http://localhost:3000/upload', {
      method: 'POST',
      body: formData,
    });*/

    // ... (restul codului existent)
  } catch (error) {
    console.error('Eroare în handleLogin:', error);
    // ... (codul existent)
  }
  };
  const handleLoginClick = async () => {
    try {
      await handleLogin(username, password);
      onLogin(username); // Apelează funcția onLogin cu numele utilizatorului
    } catch (error) {
      console.error('Error in handleLogin:', error);
    }
  };

  const handleSignUpClick = async () => {
    try {
      // Apelul la funcția de înregistrare (handleSignUp)
      await handleSignUp(username, email, phoneNumber, password);
  
      // Apelează funcția onSignUp pentru acțiunile după înregistrare
      onSignUp();
    } catch (error) {
      console.error('Error in handleSignUpClick:', error);
      // Tratează orice erori care pot apărea în timpul înregistrării
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
                onClick={handleLoginClick}
              />
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setProfileImage(e.target.files[0])}
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
                onClick={handleLoginClick}
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
