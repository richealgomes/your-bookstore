import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './Componenets/NavBar/NavBar';
import Footer from './Componenets/Footer/Footer';

const App = () => {
  return (
   <div>
      {/* header */}
      <NavBar></NavBar>
      <div><Outlet></Outlet></div>
      {/* Footer */}
      <Footer></Footer>
   </div>
  );
};

export default App;