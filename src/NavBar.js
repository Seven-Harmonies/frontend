import React from "react";

function NavBar({ handleLoginClick }) {
  const handleClick = () => {
    handleLoginClick();
  };
  return (
    <div className="navbar">
      <div>
        <span onClick={handleClick} className="loginicon">
          LOG IN
        </span>
      </div>
    </div>
  );
}

export default NavBar;
