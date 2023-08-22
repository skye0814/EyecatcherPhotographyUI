import React, { useEffect, useState } from 'react';
import '../styles/navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { Transition } from 'semantic-ui-react';
import { Button, Collapse, SlideFade, Wrap, WrapItem } from '@chakra-ui/react';
 
export default function NavBar(){
    // User dropdown function
    const [showUserDropdown, setShowUserDropdown] = useState(false);
    const toggleUserDropdown = () => {
      setShowUserDropdown(!showUserDropdown);
    };
    // Mobile nav menu function
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const toggleMobileMenu = () => {
      setShowMobileMenu(!showMobileMenu);
    }

    useEffect(() => {
      // Logic for hiding nav when scroll down, showing nav when scroll up
      let navBar = document.getElementById("navbar") as HTMLElement;
      if (navBar){
        let prevScrollPos = window.scrollY;
        window.addEventListener('scroll', () => {
          let currentScrollPos = window.scrollY;
          prevScrollPos > currentScrollPos ? navBar.style.top = '0' : navBar.style.top = '-70px';
          prevScrollPos = currentScrollPos;
          setShowUserDropdown(false);
          setShowMobileMenu(false);
        });
      }
    },[]);

    return(
        <nav className="navbar" id='navbar'>
        {/* LOGO */}
        <div className="logo">
            <img className="logo-image" src='/images/logowhite.png' alt='logowhite' />
            <span style={{ fontSize: 15 }}>
              Eyecatcher
              <br /> Photography
            </span>
        </div>
        {/* NAVIGATION MENU */}
        <ul className="nav-links">
          <div className="menu" style={{display: showMobileMenu ? 'block' : 'none'}}>
            <li>
              {/* <a href="/">Services</a> */}
              <Link to="services" onClick={toggleMobileMenu}>Services</Link>
            </li>
            <li>
              <Link to="/" onClick={toggleMobileMenu}>Cart</Link>
            </li>
            <li>
              <Link to="/" onClick={toggleMobileMenu}>Support</Link>
            </li>
            <li>
              <Link to="/" onClick={toggleMobileMenu}>About</Link>
            </li>
          </div>
        </ul>

        <div className="right-nav">
          <div className="user-picture-div">
            <FontAwesomeIcon className="user-picture" icon="user-circle" onClick={toggleUserDropdown}></FontAwesomeIcon>
            <Collapse in={showUserDropdown}>
            <div className="user-picture-dropdown">
                <div className="user-dropdown-arrow">
                  <FontAwesomeIcon icon="play" style={{color: "white"}}></FontAwesomeIcon>
                </div>
                <div
                  style={{
                    textAlign: "justify",
                    textJustify: "inter-word",
                    paddingTop: 13
                  }}
                >
                  You are not logged in. <b>Log in</b> or <b>Sign up</b> below.
                </div>
                <Wrap>
                  <WrapItem>
                    <Button className='primary-btn' colorScheme='gray' onClick={() => window.location.href = '/login'}>Log in</Button>
                  </WrapItem>
                  <WrapItem>
                    <Button className='primary-btn' colorScheme='gray'>Sign up</Button>
                  </WrapItem>
                </Wrap>
              </div>
            </Collapse>
            {/* <Transition visible={showUserDropdown} animation='fade down' duration={3000}>
              
            </Transition> */}

          </div>
          <input type="checkbox" id="checkbox_toggle" onClick={toggleMobileMenu}/>
          <label
            htmlFor="checkbox_toggle"
            className="hamburger"
            style={{ fontSize: 32, paddingTop: '6px' }}
          >
            ☰
          </label>
        </div>
      </nav>
    );
}