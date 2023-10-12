import React, { useEffect, useState } from 'react';
import '../styles/navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { Dropdown, Menu, MenuButton } from '@mui/base';
import { StyledListbox, StyledMenuItem } from '../common/MUIStyledComponent';
import { Box, Divider, Drawer, List, ListItem, ListItemButton, Typography } from '@mui/joy';
import { getCurrentUser, logout } from '../services/authService';
import { Customer } from '../models/Customer';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface DrawerItem{
  icon: IconProp,
  text: string
}

export default function NavBar(){
  const [open, setOpen] = useState(false);
  const [customer, setCustomer] = useState<Customer | null>();
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  let drawerItems: DrawerItem[] = [
    {
      icon: 'user',
      text: 'Profile'
    },
    {
      icon: 'cart-shopping',
      text: 'My Cart'
    },
    {
      icon: 'history',
      text: 'Transaction History'
    },
    {
      icon: 'phone',
      text: 'Support'
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
    getCustomerDetails();
  },[]);

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
        <Drawer open={open} onClose={toggleDrawer(false)}>
          <Box
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
            sx={{margin: '50px 20px 20px 20px'}}
          > 
            <div className='user-info-drawer'>
              <div>
                {/* <span className="user-info-circle"></span> */}
                <img src='/images/icons/man.png' style={{height: '45px', width: '45px'}}/>
              </div>
              <div className="user-info" style={{display: 'block', paddingLeft: '10px'}}>
                <div style={{fontWeight: 'bold'}}>{customer?.firstName} {customer?.lastName}</div>
                <div style={{fontSize: '12px'}}>{customer?.applicationUser.email}</div>
              </div>
            </div>
            <List sx={{left: '-22px', marginTop: '40px'}}>
              {drawerItems.map((drawerItem) => (
                <ListItem 
                  key={drawerItem.text} 
                  sx={{margin: '0 0 18px 0', display: 'grid', gridTemplateColumns: '50px 200px'
                  }}
                >
                  <FontAwesomeIcon icon={drawerItem.icon} style={{fontSize: '20px', margin: 'auto'}} />
                  <ListItemButton sx={{fontWeight: '600'}}>{drawerItem.text}</ListItemButton>
                </ListItem>
              ))}
            </List>
            <List sx={{left: '-2px', bottom: '40px', position: 'absolute'}}>
              <ListItem
                sx={{margin: '0 0 18px 0', display: 'grid', gridTemplateColumns: '50px 200px'
                }}
              >
                  <FontAwesomeIcon icon='address-card' style={{fontSize: '20px', margin: 'auto'}} />
                  <ListItemButton sx={{fontWeight: '600'}}>Logout</ListItemButton>
              </ListItem>
            </List>
          </Box>
        </Drawer>
      </div>
    </nav>
  );
}

