import React from 'react';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './components/Layout/Header';

const App = () => {
  const location = useLocation();

  return (
    <>
      <Navbar />
      {location.pathname === "/" && <Header />}
      <Outlet />
      <Footer />
    </>
  );
};

export default App;

