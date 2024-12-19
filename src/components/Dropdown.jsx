import React, { useState } from 'react';
import '../css/Dropdown.css'; 

const Dropdown = ({ userName, onLogout }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="dropdown">
      <button className="dropdown__button" onClick={toggleDropdown}>
      <div className="dropdown-name">{userName}</div> ▼
      </button>
      {isOpen && (
        <div className="dropdown__menu">
          <button className="dropdown__item">{userName}</button>
          <button className="dropdown__item logout" onClick={onLogout}>
            Log Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
