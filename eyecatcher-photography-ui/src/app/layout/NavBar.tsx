import React, { useEffect, useState } from 'react';
import '../styles/navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { Dropdown, Menu, MenuButton } from '@mui/base';
import { StyledListbox, StyledMenuItem } from '../common/MUIStyledComponent';
import { Box, Drawer, ListItem, Typography } from '@mui/joy';
import { getCurrentUser, logout } from '../services/authService';
import { Customer } from '../models/Customer';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface DrawerItem{
  icon: IconProp,
  text: string,
  location: () => void
}

export default function NavBar(){
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);
  const [open, setOpen] = useState(false);
  const [customer, setCustomer] = useState<Customer | null>();
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  let drawerItems: DrawerItem[] = [
    {
      icon: 'user',
      text: 'Profile',
      location: () => {
        window.location.href = ''
      }
    },
    {
      icon: 'cart-shopping',
      text: 'My Cart',
      location: () => {
        window.location.href = ''
      }
    },
    {
      icon: 'history',
      text: 'Transaction History',
      location: () => {
        window.location.href = ''
      }
    },
    {
      icon: 'phone',
      text: 'Support',
      location: () => {
        window.location.href = ''
      }
    },
    
  ]

  const getCustomerDetails = async () => {
      try{
        const response = await getCurrentUser();
        setCustomer(response?.data);
      }
      catch(error){
        console.log(error);
      }
  }

  const toggleDrawer = (inOpen: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setOpen(inOpen);
  };

  const toggleUserDropdown = () => {
    setShowUserDropdown(!showUserDropdown);
  };

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
      });
    }
  },[]);

  useEffect(() => {
    // Get app user details
    if (window.location.pathname !== '/login'){
      getCustomerDetails();
    }
  },[]);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  },[])

  return(
      <nav className="navbar" id='navbar'>
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
      <ul className="nav-links">
        <div className="menu">
          <li>
            <Link to="services">Services</Link>
          </li>
          <li>
            <Link to="/">Cart</Link>
          </li>
          <li>
            <Link to="/">Support</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
        </div>
      </ul>

      <div className="right-nav">
        <div className="user-picture-div">
          <Dropdown>
            <MenuButton>
              <FontAwesomeIcon className="user-picture" icon="user-circle" onClick={toggleUserDropdown}></FontAwesomeIcon>
            </MenuButton>
            <Menu 
              slots={{ listbox: StyledListbox }} 
              style={{ zIndex: "999"}}
            >
              <StyledMenuItem>
                Profile
              </StyledMenuItem>
              <StyledMenuItem>
                Settings
              </StyledMenuItem>
              <StyledMenuItem onClick={() => logout()}>
                Log out
              </StyledMenuItem>
            </Menu>
          </Dropdown>

        </div>
        <input type="checkbox" id="checkbox_toggle" onClick={toggleDrawer(true)}/>
        <label
          htmlFor="checkbox_toggle"
          className="hamburger"
          style={{ fontSize: 32 }}
        >
          ☰
        </label>
        {isSmallScreen && <Drawer open={open} onClose={toggleDrawer(false)}>
          <Box
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
            sx={{margin: '50px 20px 20px 20px'}}
          > 
            <div className='user-info-drawer'>
              <div>
                <img src='/images/icons/man.png' alt='user' style={{height: '45px', width: '45px'}}/>
              </div>
              <div className="user-info" style={{display: 'block', paddingLeft: '10px'}}>
                <div style={{fontWeight: 'bold'}}>{customer?.firstName} {customer?.lastName}</div>
                <div style={{fontSize: '12px'}}>{customer?.applicationUser.email}</div>
              </div>
            </div>
            <ul className='drawer-list-item'>
              {drawerItems.map((drawerItem) => {
                  return(
                    <ListItem 
                      key={drawerItem.text}
                      className="custom-list-item"
                      onClick={drawerItem.location}
                    >
                      <FontAwesomeIcon icon={drawerItem.icon} style={{fontSize: '20px', margin: 'auto'}} />
                      <span style={{fontWeight: '600'}}>{drawerItem.text}</span>
                    </ListItem>
                  );
                })}
            </ul>
            <ul className='drawer-list-item' style={{position: 'absolute', bottom: '40px'}}>
              <ListItem
                className="custom-list-item"
                onClick={logout}
              >
                  <FontAwesomeIcon icon='sign-out' style={{fontSize: '20px', margin: 'auto'}} />
                  <span style={{fontWeight: '600'}}>Logout</span>
              </ListItem>
            </ul>
          </Box>
        </Drawer>}
      </div>
    </nav>
  );
}

