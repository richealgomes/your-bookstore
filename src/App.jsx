import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './Componenets/NavBar/NavBar';

const App = () => {
  return (
   <div>
      {/* header */}
      <NavBar></NavBar>
      <Outlet></Outlet>
      {/* Footer */}
   </div>
  );
};

export default App;