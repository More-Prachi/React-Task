import React from 'react'
import './Footer.css';
import Rect2 from '../Assets/Rect2.png';
import nobrk from '../Assets/nobrk.png';
import Gplay from '../Assets/Gplay.png';
import Appstore from '../Assets/Appstore.png';

const Footer = () => {
  return (
    <>

      <div className='footer'>

        <div>
          <img src={nobrk} alt="app" />
        </div>
        <div className='info'>
          <h4> Find A New Home On Th Go</h4>
          <h6>Download our app</h6>
          <small>Where convinience is at your finger tip</small>
          <div className='apps'>
          <div className='gpay'>
            <img src={Gplay} alt="app" />
            <div  className='AppStore'>
            <img src={Appstore} alt="app" />
            </div>
            
          </div>
         
        </div>
        </div>
        
        </div>
        <div>
          <img src={Rect2} alt="footer" />
        </div>

    </>
  )
}

export default Footer;
