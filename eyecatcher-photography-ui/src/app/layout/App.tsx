import React from 'react';
import NavBar from './NavBar';

// import the library
import { library } from '@fortawesome/fontawesome-svg-core';

// import your icons
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import {
  BrowserRouter,
  Routes, //replaces "Switch" used till v5
  Route,
  Router,
} from "react-router-dom";
import Services from './Services';

function App() {
  return (
    <div className="App">
      <NavBar />
        <div className='container'>
            <Routes>
              <Route path="/" element='' />
              <Route path="/services" element={<Services />} />
            </Routes>
        </div>
      
    </div>
  );
}

export default App;

library.add(far, fas, fab);
