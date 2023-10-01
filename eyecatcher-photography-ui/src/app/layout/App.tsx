import React from 'react';
import NavBar from './NavBar';

// import the library
import { library } from '@fortawesome/fontawesome-svg-core';

// import fontawesome icons
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Services from './Services';
import Home from './Home';
import FooterBar from './FooterBar';
import LoginPage from './LoginPage';
import Products from './products/Products';
import { ThemeProvider } from '@emotion/react';
import { CssVarsProvider } from '@mui/joy';
import createTheme from '@mui/material/styles/createTheme';

function App() {
  const theme = createTheme();
  
  return (
    <CssVarsProvider>
      <div className="App">
        <NavBar />
          <div>
              <Routes>
                <Route path='/login' element={<LoginPage />} />
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path='/services/products' element={<Products />} />
              </Routes>
          </div>
        {/* <FooterBar /> */}
      </div>
    </CssVarsProvider>
  );
}

export default App;

library.add(far, fas, fab);
