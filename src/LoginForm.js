import React, { useState } from "react";

const LoginForm = ({ isShowLogin }) => {
  const [showVolunteerModal, setShowVolunteerModal] = useState(false);
  const [showOrganizationModal, setShowOrganizationModal] = useState(false);

  const openVolunteerModal = () => {
    setShowVolunteerModal(true);
  };

  const openOrganizationModal = () => {
    setShowOrganizationModal(true);
  };

  const closeModals = () => {
    setShowVolunteerModal(false);
    setShowOrganizationModal(false);
  };

  return (
    <div className={`${isShowLogin ? "active" : ""} show`}>
      <div className="login-form">
        <div className="form-box solid">
          <button onClick={openVolunteerModal} className="closeModal">
            Log In as Volunteer
          </button>
          <button onClick={openOrganizationModal} className="closeModal">
            Log In as Organization
          </button>
        </div>

        {showVolunteerModal && (
          <div className="modal">
            <h2>Log In as Volunteer</h2>
            <form>
              <h1 className="login-text">Log In</h1>
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
            <button onClick={closeModals}>Close</button>
          </div>
        )}

        {showOrganizationModal && (
          <div className="modal">
            <h2>Log In as Organization</h2>
            <form>
              <h1 className="login-text">Log In</h1>
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
            <button onClick={closeModals}>Close</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginForm;
