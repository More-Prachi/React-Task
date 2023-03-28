import React, { useState } from 'react';
import './Navbar.css';
import { SiYourtraveldottv } from 'react-icons/si';
import { AiFillCloseCircle } from 'react-icons/ai';
import { TbGridDots } from 'react-icons/tb';

const Navbar = () => {
  //code to toggle/show navbar

  const [active, setActive] = useState('navBar')
  const showNav = () => {
    setActive('navBar  activeNavbar')
  }
  //code to remove navbar
  const removeNav = () => {
    setActive('navBar')
  }

  const[transparent, setTranspaent]=useState('header')
const addBg=()=>{
  if(window.scrollY >= 10)
  {
    setTranspaent('header activeHeader')
  }
  else{
    setTranspaent('header')
  }
}
window.addEventListener('scroll',addBg)


  return (

    <section className='navBarSection'>
      <div className={transparent}>

        <div className="logoDiv">

          <a href="#" className="logo"></a>
          <h1 className="flex"> Easy <SiYourtraveldottv className="icon" /></h1>
        </div>

        <div className={active}>

          <ul className="navLists flex">

            <li className="navItem">
              <a href="#" className="navLink">Home</a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">About Us</a>
            </li>

           
            <div className="headerBtns flex">
              <button className="btn registertn">
                <a href="#"> Register</a>
              </button>
            </div>

          </ul>
          <div onClick={removeNav} className="closeNavbar">
            <AiFillCloseCircle className="icon" />
          </div>

        </div>
        <div onClick={showNav} className="toggleNavbar">
          <TbGridDots className="icon" />
        </div>
      </div>
    </section>


  );
}

export default Navbar;
