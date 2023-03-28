import React from 'react';
import './Home.css';
import {BsCalendarDate} from 'react-icons/bs';
import{FiSearch} from 'react-icons/fi';


const Home = () => {
  return (

    <section className="home">
      <div className="secContainer container">
        <div className="homeText">
          <h1 className="title">
            Explore the new way of travel
          </h1>
        
    <div className="homeCard grid">
     <input type="text" placeholder="Search Your Destination "  className="placeholder"/>
     <BsCalendarDate className='Reacticon' /> 
     <FiSearch className="Reacticon" />

     
        
      </div>
      </div>
    </div>
  
    
    </section>

  )
}

export default Home;
