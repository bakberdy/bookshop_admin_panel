import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleSidebar } from "../redux/features/sidebar/sidebarSlice";
import "../css/NavBar.css";

const NavBar = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const isSidebarOpen = useSelector((state) => state.sidebar.isSidebarOpen);

  const navItems = [
    { to: "/", text: "Home" },
    { to: "/products", text: "All products" },
    { to: "/orders", text: "Orders" },
    { to: "/users", text: "Users" },
  ];

  return (
    <div>
      <div className="navigation-bar">
        <div style={{ height: "60px" }}></div>
        {navItems.map((item) => {
          const isActive = location.pathname === item.to;
          return (
            <Link
              key={item.to}
              to={item.to}
              className={`navigation-bar__pagename ${
                isActive ? "selected" : ""
              }`}
            >
              <h1>{item.text}</h1>
            </Link>
          );
        })}
      </div>
      <div
        className={`mobile-navigation-bar-${isSidebarOpen ? `open` : `closed`}`}
      >
        <div style={{ height: "20px" }}></div>
        <button className="close-btn" onClick={() => dispatch(toggleSidebar())}>
          &times;
        </button>

        {navItems.map((item) => {
          const isActive = location.pathname === item.to;
          return (
            <Link
              key={item.to}
              to={item.to}
              className={`navigation-bar__pagename ${
                isActive ? "selected" : ""
              }`}
            >
              <h1>{item.text}</h1>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default NavBar;
