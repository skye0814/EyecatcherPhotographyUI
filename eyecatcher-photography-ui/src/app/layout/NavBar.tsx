import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 
export default function NavBar(){
    // User dropdown function
    const [showUserDropdown, setShowUserDropdown] = useState(false);
    const toggleUserDropdown = () => {
        setShowUserDropdown(!showUserDropdown);
    }

    return(
        <nav className="navbar">
        {/* LOGO */}
        <div className="logo">
          <img className="logo-image" src='assets/images/logowhite.png' alt='logowhite' />
          <span style={{ fontSize: 15 }}>
            Eyecatcher
            <br /> Photography
          </span>
        </div>
        {/* NAVIGATION MENU */}
        <ul className="nav-links">
          <div className="menu">
            <li>
              <a href="/">Services</a>
            </li>
            <li>
              <a href="/">Cart</a>
            </li>
            <li>
              <a href="/">Support</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
          </div>
        </ul>

        <div className="right-nav">
          <div className="user-picture-div">
            <FontAwesomeIcon className="user-picture" icon="user-circle" onClick={toggleUserDropdown}></FontAwesomeIcon>

            {showUserDropdown && (<div className="user-picture-dropdown">
              <div className="user-dropdown-arrow">
                <FontAwesomeIcon icon="play" style={{color: "white"}}></FontAwesomeIcon>
              </div>
              <FontAwesomeIcon className="user-close" icon="close"></FontAwesomeIcon>
              <div
                style={{
                  textAlign: "justify",
                  textJustify: "inter-word",
                  fontSize: 15,
                  paddingTop: 13
                }}
              >
                You are not logged in. <b>Log in</b> or <b>Sign up</b> below.
              </div>
              <div className="login-buttons">
                <button className="btn btn-primary">LOGIN</button>
                <button className="btn btn-primary">SIGNUP</button>
              </div>
            </div>)}

          </div>
          <input type="checkbox" id="checkbox_toggle" />
          <label
            htmlFor="checkbox_toggle"
            className="hamburger"
            style={{ fontSize: 32 }}
          >
            ☰
          </label>
        </div>
      </nav>
    );
}