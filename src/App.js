import React from 'react';
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import Home from './Component/Home/Home';
import About from './Component/About/About';
import Trending from './Component/Trending/Trending';
import Footer from './Component/Footer/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Trending />
      <About />     
      <Footer />
    </>
  );
}

export default App;
