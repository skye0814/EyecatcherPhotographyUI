import React, { useEffect, useState } from 'react';
import '../styles/navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { Dropdown, Menu, MenuButton } from '@mui/base';
import { StyledListbox, StyledMenuItem } from '../common/MUIStyledComponent';
import { Box, Typography } from '@mui/joy';

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
            {/* <img className="logo-image" src='/images/logowhite.png' alt='logowhite' />
            <span style={{ fontSize: 15 }}>
              Eyecatcher
              <br /> Photography
            </span> */}
            <Typography
              fontWeight="md"
              textColor='white'
              startDecorator={
                <Box
                  component="span"
                  sx={{
                    width: '50px',
                    height: '50px',
                    backgroundImage: `url("/images/logowhite.png")`,
                    backgroundSize: "110%",
                    backgroundRepeat: "no-repeat"
                  }}
                />
              }
            >
              Eyecatcher <br/> Photography
            </Typography>
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
            <Dropdown>
              <MenuButton><FontAwesomeIcon className="user-picture" icon="user-circle" onClick={toggleUserDropdown}></FontAwesomeIcon></MenuButton>
              <Menu 
                slots={{ listbox: StyledListbox }} 
                style={{ zIndex: "999"}}
              >
                <StyledMenuItem onClick={() => window.location.href = '/login'}>
                  Profile
                </StyledMenuItem>
                <StyledMenuItem>
                  Settings
                </StyledMenuItem>
                <StyledMenuItem>
                  Log out
                </StyledMenuItem>
              </Menu>
            </Dropdown>

          </div>
          <input type="checkbox" id="checkbox_toggle" onClick={toggleMobileMenu}/>
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

