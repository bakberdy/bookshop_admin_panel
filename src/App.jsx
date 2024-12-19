import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import Dropdown from "./components/Dropdown";
import { FaBars } from "react-icons/fa";
import { toggleSidebar } from "./redux/features/sidebar/sidebarSlice";
import { useDispatch } from "react-redux";

const App = () => {
  const handleLogout = () => {
    console.log("User logged out");
  };

  const dispatch = useDispatch();

  return (
    <div className="app">
      <NavBar />
      <div className="app-body">
        <div className="app-bar">
          <button onClick={() => dispatch(toggleSidebar())}>
            <div className="menu-container">
              <div className="menu-icon">
                <FaBars size={30} color="#003F62" />
              </div>
            </div>
          </button>
          <div className="app-name">
              <h1>Book shop admin</h1>
            </div>
          <div className="right-side">
            
            <SearchBar />
            <Dropdown userName="Bakberdi" onLogout={handleLogout} />
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default App;
