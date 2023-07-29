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

function App() {
  return (
    <div className="App">
      <NavBar />
        <div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
            </Routes>
        </div>
      {/* <FooterBar /> */}
    </div>
  );
}

export default App;

library.add(far, fas, fab);
