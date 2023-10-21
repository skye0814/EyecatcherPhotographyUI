import React, { useEffect, useState } from 'react';
import '../styles/navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { Dropdown, Menu, MenuButton } from '@mui/base';
import { StyledListbox, StyledMenuItem } from '../common/MUIStyledComponent';
import { Box, Divider, Drawer, IconButton, ListItem, SvgIcon, Typography } from '@mui/joy';
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
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [customer, setCustomer] = useState<Customer | null>();
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  let drawerItemsAccount: DrawerItem[] = [
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
    // {
    //   icon: 'phone',
    //   text: 'Support',
    //   location: () => {
    //     window.location.href = ''
    //   }
    // }
  ];

  let drawerItemsNavigation: DrawerItem[] = [
    {
      icon: 'user',
      text: 'Services',
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
    }
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
    // Remove box shadow of navbar when at starting pos
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
      <nav className={`navbar ${scrolled ? 'with-box-shadow' : ''}`} id='navbar'>
      <div className="logo" onClick={()=>{window.location.href = '/'}}>
          <Typography
            fontWeight="bolder"
            textColor='black'
            fontFamily='Dancing Script'
            fontSize='20px'
            startDecorator={
              <Box
                component="span"
                sx={{
                  width: '50px',
                  height: '50px',
                  backgroundImage: `url("/images/logoblack.png")`,
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
        </div>
      </ul>

      <div className="right-nav">
        {/* <div className="user-picture-div">
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

        </div> */}

        {!isSmallScreen && 
        <>
          <IconButton size="sm" variant="plain" color="neutral" onClick={() => {window.open('https://www.facebook.com/eyecatchyou2020', '_blank');}}>
            <SvgIcon sx={{fontSize: '30px', color: 'black'}}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5Z"
                />
              </svg>
            </SvgIcon>
          </IconButton> 
          
          <IconButton size="sm" variant="plain" color="neutral" onClick={() => {window.open('https://www.instagram.com/eyecatcher.photography/', '_blank');}}>
            <SvgIcon sx={{fontSize: '30px', color: 'black'}}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12 6.865A5.135 5.135 0 1 0 17.135 12A5.135 5.135 0 0 0 12 6.865Zm0 8.469A3.334 3.334 0 1 1 15.334 12A3.333 3.333 0 0 1 12 15.334Z"
                />
                <path
                  fill="currentColor"
                  d="M21.94 7.877a7.333 7.333 0 0 0-.465-2.427a4.918 4.918 0 0 0-1.153-1.772a4.894 4.894 0 0 0-1.77-1.153a7.323 7.323 0 0 0-2.428-.464C15.058 2.012 14.717 2 12.001 2s-3.057.011-4.123.06a7.333 7.333 0 0 0-2.428.465a4.905 4.905 0 0 0-1.77 1.153A4.886 4.886 0 0 0 2.525 5.45a7.333 7.333 0 0 0-.464 2.427c-.05 1.066-.06 1.407-.06 4.123s.01 3.057.06 4.123a7.334 7.334 0 0 0 .464 2.427a4.888 4.888 0 0 0 1.154 1.772a4.917 4.917 0 0 0 1.771 1.153a7.338 7.338 0 0 0 2.428.464C8.944 21.988 9.285 22 12 22s3.057-.011 4.123-.06a7.333 7.333 0 0 0 2.427-.465a5.113 5.113 0 0 0 2.925-2.925a7.316 7.316 0 0 0 .465-2.427c.048-1.067.06-1.407.06-4.123s-.012-3.057-.06-4.123Zm-1.8 8.164a5.549 5.549 0 0 1-.343 1.857a3.311 3.311 0 0 1-1.898 1.898a5.522 5.522 0 0 1-1.857.344c-1.055.048-1.371.058-4.042.058s-2.986-.01-4.04-.058a5.526 5.526 0 0 1-1.857-.344a3.108 3.108 0 0 1-1.15-.748a3.085 3.085 0 0 1-.748-1.15a5.521 5.521 0 0 1-.344-1.857c-.048-1.054-.058-1.37-.058-4.04s.01-2.987.058-4.042a5.563 5.563 0 0 1 .344-1.857a3.107 3.107 0 0 1 .748-1.15a3.082 3.082 0 0 1 1.15-.748A5.523 5.523 0 0 1 7.96 3.86C9.014 3.81 9.331 3.8 12 3.8s2.987.011 4.042.059a5.564 5.564 0 0 1 1.857.344a3.31 3.31 0 0 1 1.898 1.898a5.523 5.523 0 0 1 .344 1.857c.048 1.055.058 1.37.058 4.041s-.01 2.986-.058 4.041ZM17.339 5.462Z"
                />
              </svg>
            </SvgIcon>
          </IconButton>

          <button className='sharp-button'>
            Contact
          </button>
        </>}

        <FontAwesomeIcon 
          icon='bars' 
          style={{
            fontSize: '30px', 
            color: 'black',
            cursor: 'pointer'
          }}
          onClick={toggleDrawer(true)}
        />
        <Drawer open={open} onClose={toggleDrawer(false)}>
          <Box
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
            sx={{
              margin: '50px 20px 20px 20px'
           }}
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

            <Typography className='drawer-list-title'>
              Account
            </Typography>
            <ul className='drawer-list-item'>
              {drawerItemsAccount.map((drawerItem) => {
                  return(
                    <ListItem 
                      key={drawerItem.text}
                      className="custom-list-item"
                      onClick={drawerItem.location}
                      sx={{
                        '&:hover': {
                          cursor: 'pointer'
                        }
                      }}
                    >
                      <FontAwesomeIcon icon={drawerItem.icon} style={{fontSize: '20px', margin: 'auto'}} />
                      <span style={{fontWeight: '600'}}>{drawerItem.text}</span>
                    </ListItem>
                  );
                })}
            </ul>
            <Divider sx={{margin: '40px 15px 0px 15px'}}/>
            <Typography className='drawer-list-title'>
              Navigation
            </Typography>
            <ul className='drawer-list-item' style={{position: 'absolute', bottom: '40px'}}>
              <ListItem
                className="custom-list-item"
                onClick={logout}
                sx={{
                  '&:hover': {
                    cursor: 'pointer'
                  }
                }}
              >
                  <FontAwesomeIcon icon='sign-out' style={{fontSize: '20px', margin: 'auto', width: '90%'}} />
                  <span style={{fontWeight: '600'}}>Logout</span>
              </ListItem>
            </ul>
          </Box>
        </Drawer>
      </div>
    </nav>
  );
}

