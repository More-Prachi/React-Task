import React from 'react';
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import Home from './Component/Home/Home';
import Ab from './Component/About/Ab';
import Trending from './Component/Trending/Trending';
import Footer from './Component/Footer/Footer';

function App() {
  return (
    <>
      <Navbar/>
      <Home/>
      <Trending/>
      <Ab/>     
      <Footer/>
    </>
  );
}

export default App;
