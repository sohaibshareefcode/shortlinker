// import React from 'react'
// // import Login from './pages/Login'

// // import Contact from './pages/Contact'
// // import Features from './pages/Features';
// // import LogoBar from './pages/LogoBar';
// import Home from './pages/Home';
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";

// // import { ThemeProvider } from '@emotion/react'
// // import { theme } from './pages/theme'
// // import Carousel from './pages/Carousel'
// import Contact from './pages/Contact';
// function App() {
//   return (
//     <div>
//     {/* <ThemeProvider theme={theme}> */}
    
//       {/* <Login/> */}
// {/* <Features/> */}
//     {/* <Carousel/> */}
//     {/* <Contact/> */}
// {/* <LogoBar/> */}
//     {/* </ThemeProvider> */}



//     </div>
//   )
// }

// export default App
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './pages/Header'; // Adjust the import path if needed
import Login from './pages/Login';   // Ensure the Login component is correctly defined
import Contact from './pages/Contact';  // Ensure the Contact component is correctly defined
import LogoBar from './pages/LogoBar';

import Feature from "./pages/Features"
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/logobar" element={<LogoBar />} />
    
       <Route path='/features' element={<Feature/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
