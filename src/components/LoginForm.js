// LoginForm.tsx
import React, { useState } from 'react';
import handleLogin from './handlers/LoginHandler.ts';
import handleSignUp from './handlers/SignupHandler.ts';
import { useNavigate } from 'react-router-dom';
import './LoginForm.css';

// SIGN UP DE VOLUNTAR 
const SignUpVolunteerForm = ({ onCancel, onSubmit }) => {
  const [usernameV, setUsernameV]= useState('');
  const [lastNameV, setLastNameV] = useState('');
  const [firstNameV, setFirstNameV]=useState('');
  const [emailV, setEmailV] = useState('');
  const [phoneNumberV, setPhoneNumberV] = useState('');
  const [passwordV, setPasswordV] = useState('');
  const [repeatPasswordV, setRepeatPasswordV] = useState('');
  const [photosV, setPhotosV]=useState([]);

  //ce trb pt form de voluntari
  const handleSignUpClick = () => {
    console.log('Sign up as Volunteer:', { usernameV,lastNameV, firstNameV, emailV, phoneNumberV, passwordV, repeatPasswordV , photosV});
    onSubmit();
  };

  //pt poza de profil dar am pus sa fie posibil de pus mai multe poze, desp prin ","
  const handlePhotoChange = (e) => {
    const photos = e.target.value.split(',');
    setPhotosV(photos.map((photo) => photo.trim()));
  };

  return (
    <div className="left-content">
       <h2>Sign-Up as a Volunteer!</h2>
       
      <form>
        <label>Username</label>
        <br />
        <input type="text" name="username" onChange={(e) => setUsernameV(e.target.value)} />
        <br />

        <label>Last Name</label>
        <br />
        <input type="text" name="lastname" onChange={(e) => setLastNameV(e.target.value)} />
        <br />

        <label>First Name</label>
        <br />
        <input type="text" name="firstname" onChange={(e) => setFirstNameV(e.target.value)} />
        <br />

        <label>Email</label>
        <br />
        <input type="email" name="email" onChange={(e) => setEmailV(e.target.value)} />
        <br />
        <label>Phone Number</label>
        <br />
        <input type="tel" name="phoneNumber" onChange={(e) => setPhoneNumberV(e.target.value)} />
        <br />

        
        <label>Password</label>
        <br />

        <input type="password" name="password" onChange={(e) => setPasswordV(e.target.value)} />
        <br />
        <label>Repeat Password</label>
        <br />
        <input type="password" name="repeatPassword" onChange={(e) => setRepeatPasswordV(e.target.value)} />
        <br />
        <input
                type="file"
                accept="image/*"
                onChange={(e) => setProfileImage(e.target.files[0])}
              />
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button type="button" onClick={handleSignUpClick}>
          Submit
        </button>
      </form>
      
    </div>
  );
};


//SIGN UP ORGANISATION FORM 
const SignUpOrganisationForm = ({ onCancel, onSubmit }) => {
  const [usernameO, setUsernameO] = useState('');
  const [emailO, setEmailO] = useState('');
  const [phoneNumberO, setPhoneNumberO] = useState('');
  const [passwordO, setPasswordO] = useState('');
  const [repeatPasswordO, setRepeatPasswordO] = useState('');
  const [nameO, setNameO]=useState('');
  const [photoesO, setPhotoesO] = useState([]);

  const handleSignUpClick = () => {
    console.log('Sign up as Organisation:', { usernameO, emailO, phoneNumberO, passwordO, repeatPasswordO,nameO , photoesO});
    onSubmit();
  };

  //org pot pune mai multe poze, desp prin "," nvm 
  const handlePhotoChange = (e) => {
    const photos = e.target.value.split(',');
    setPhotoesO(photos.map((photo) => photo.trim()));
  };

  return (
    <div className="left-content">
      <h3>Sign-Up as an Organization! </h3>
  
    <form>
      <label>Username</label>
      <br />
      <input type="text" name="username" onChange={(e) => setUsernameO(e.target.value)} />
      <br />
      <label>Organisation name</label>
      <br />
      <input type="text" name="name" onChange={(e) => setNameO(e.target.value)} />
      <br />
      <label>Email</label>
      <br />
      <input type="email" name="email" onChange={(e) => setEmailO(e.target.value)} />
      <br />
      <label>Phone Number</label>
      <br />
      <input type="tel" name="phoneNumber" onChange={(e) => setPhoneNumberO(e.target.value)} />
      <br />
      
      <label>Password</label>
      <br />
      <input type="password" name="password" onChange={(e) => setPasswordO(e.target.value)} />
      <br />
      <label>Repeat Password</label>
      <br />
      <input type="password" name="repeatPassword" onChange={(e) => setRepeatPasswordO(e.target.value)} />
      <br />
      <input
                type="file"
                accept="image/*"
                onChange={(e) => setProfileImage(e.target.files[0])}
              />
      <button type="button" onClick={onCancel}>
        Cancel
      </button>
      <button type="button" onClick={ handleSignUpClick}>
        Submit
      </button>
    </form>
  </div>
);
};

const SignUpForm = ({ signUpType, onCancel, onSubmit }) => {
  const renderSignUpForm = () => {
    if (signUpType === 'volunteer') {
      return <SignUpVolunteerForm onCancel={onCancel} onSubmit={onSubmit} />;
    } else if (signUpType === 'organisation') {
      return <SignUpOrganisationForm onCancel={onCancel} onSubmit={onSubmit} />;
    } else {
      return (
        <div className="left-half">
          <div className="modal-title">Sign-Up as {typeof signUpType === 'string' ? signUpType.charAt(0).toUpperCase() + signUpType.slice(1) : ''}</div>
          <p className="modal-text">Choose your role:</p>
          <button onClick={() => handleSignUp('volunteer')}>Sign Up as Volunteer</button>
          <button onClick={() => handleSignUp('organisation')}>Sign Up as Organization</button>
          <button onClick={onCancel}>Cancel</button>
        </div>
      );
    }
  };

  return (
    <div>
      {renderSignUpForm()}
    </div>
  );
};

//FORM DE LOGIN
const LoginForm = ({ isShowLogin , onLogin, onSignUp}) => {
 

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const [showVolunteerModal, setShowVolunteerModal] = useState(false);
  const [showOrganizationModal, setShowOrganizationModal] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const [profileImage, setProfileImage] = useState(null);
  const [signUpType, setSignUpType] = useState('');
  const [showSignUpForm, setShowSignUpForm] = useState(false);
  const [showVolunteerSignupPopup, setShowVolunteerSignupPopup] = useState(false);
  const [showOrganisationSignupPopup, setShowOrganisationSignupPopup] = useState(false);


  const navigate = useNavigate()
  

  const openVolunteerModal = () => {
    setShowVolunteerModal(true);
    setShowOrganizationModal(false);
    setShowSignUpModal(false);
    setSignUpType('');
    setShowVolunteerSignupPopup(false); // Close volunteer signup popup if open
    setShowOrganisationSignupPopup(false); // Close organisation signup popup if open
  };


  const openOrganizationModal = () => {
    setShowOrganizationModal(true);
    setShowVolunteerModal(false);
    setShowSignUpModal(false);
    setSignUpType('');
    setShowVolunteerSignupPopup(false); // Close volunteer signup popup if open
    setShowOrganisationSignupPopup(false); // Close organisation signup popup if open
  };

  const openSignUpModal = (type) => {
    setSignUpType(type);
    setShowSignUpModal(true);
    setShowSignUpForm(true); // Set to true to show the signup form initially
    setShowVolunteerModal(false);
    setShowOrganizationModal(false);
    setShowVolunteerSignupPopup(false);
    setShowOrganisationSignupPopup(false);
  };

  const closeModal = () => {
    setShowVolunteerModal(false);
    setShowOrganizationModal(false);
    setShowSignUpModal(false);
    setSignUpType('');
    setShowVolunteerSignupPopup(false);
    setShowOrganisationSignupPopup(false);
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

  const handleSignUpClick = (type) => {
    // Close the login modals
    setShowVolunteerModal(false);
    setShowOrganizationModal(false);

    // Open the sign-up modal
    setSignUpType(type);
    setShowSignUpForm(false);
    setShowSignUpModal(true);
    setShowVolunteerSignupPopup(false);
    setShowOrganisationSignupPopup(false);
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
          <button onClick={() => openSignUpModal('')} className="closeModal">
            Sign-Up
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
          <div className="full-screen-modal">
            <div className="left-half">
              {signUpType ? (
                <SignUpForm signUpType={signUpType} onCancel={closeModal} onSubmit={() => setShowSignUpModal(false)} />
              ) : (
                <React.Fragment>
                  <div className="modal-title">Sign-Up as {typeof signUpType === 'string' ? signUpType.charAt(0).toUpperCase() + signUpType.slice(1) : ''}</div>
                  <p className="modal-text">Choose your role:</p>
                  <button onClick={() => handleSignUpClick('volunteer')}>Sign-Up as Volunteer</button>
                  <button onClick={() => handleSignUpClick('organisation')}>Sign-Up as Organization</button>
                  <button onClick={closeModal}>Cancel</button>
                </React.Fragment>
              )}
            </div>
            <div className="right-half">
              <img src="/images/9.jpg" alt="Your Photo" className="modal-photo" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};


export default LoginForm; 