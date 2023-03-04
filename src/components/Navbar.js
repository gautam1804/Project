import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import navbarCss from "../css/navbar.css";

const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <section className="navbar-bg">
        <nav className="navbar navbar-expand-lg navbar-light ">
          <div className="container">
            <NavLink className="navbar-brand" to="#">
             <span className="logo">Xception 4.0</span> 
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={() => setShow(!show)}>
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`collapse navbar-collapse ${show ? "show" : ""}`}>
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item navv">
                  <NavLink className="nav-link active list" aria-current="page" to="/">
                <span className="nn"> Home</span>        
                  </NavLink>
                </li>
                <li className="nav-item navv">
                  <NavLink className="nav-link" to="/service">
                    Sponsors
                  </NavLink>
                </li>
                <li className="nav-item navv">
                  <NavLink className="nav-link" to="/service">
                    Events
                  </NavLink>
                </li>
                <li className="nav-item navv">
                  <NavLink className="nav-link" to="/service">
                    Merchandise
                  </NavLink>
                </li>
                <li className="nav-item navv">
                  <NavLink className="nav-link" to="/about">
                    About
                  </NavLink>
                </li>
                <li className="nav-item navv">
                  <NavLink className="nav-link" to="/contact">
                    Contact Us
                  </NavLink>
                </li>
              
              </ul>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
};

export default Navbar;
