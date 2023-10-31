import React from 'react';
import NavBar from './NavBar';

// import the library
import { library } from '@fortawesome/fontawesome-svg-core';

// import fontawesome icons
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { Routes, Route} from "react-router-dom";
import Services from './Services';
import Home from './Home';
import LoginPage from './LoginPage';
import Products from './products/Products';
import { CssVarsProvider, StyledEngineProvider } from '@mui/joy';
import createTheme from '@mui/material/styles/createTheme';
import RequireAuth from '../common/RequireAuth';
import PageNotFound from './PageNotFound';

function App() {
  const theme = createTheme();
  
  return (
    <StyledEngineProvider injectFirst>
    <CssVarsProvider>
      <div className="App">
        <NavBar />
          <div>
              <Routes>
                <Route path="/*" element={<PageNotFound />} />
                <Route path='/login' element={<LoginPage />} />
                <Route path="/" element={<Home />} />
                <Route 
                  path="/services" 
                  element={
                    <RequireAuth>
                      <Services />
                    </RequireAuth>
                  } />
                <Route 
                  path='/services/products' 
                  element={
                    <RequireAuth>
                      <Products />
                    </RequireAuth>
                  } />
              </Routes>
          </div>
        {/* <FooterBar /> */}
      </div>
    </CssVarsProvider>
    </StyledEngineProvider>
  );
}

export default App;

library.add(far, fas, fab);
