import React from 'react';
import './about.css';

import img1 from '../Assets/img1.png';
import img2 from '../Assets/img2.png';
import img3 from '../Assets/img3.png';
// import rect from '../Assets/rect.png';
import image from '../Assets/image.png';

const About = () => {
    return (
        <section className='about section'>
            <div className='secImgContainer '>
                
                <div className='rect'> 
                {/* <img src={rect} alt="" /> */}
                <h2 className="title">
                    What people thinking about us ?
                </h2>
                <div className="mainContent Container flex">
                
                    <div className="AboutItem">
                       
                        <img src={img3} alt="image name" />
                        <h3>Nidhi Sharma </h3>
                        <small>Indore,MP.</small>
                        <p>Travel to places you’ve only dreamt of exploring while staying in some of the world’s best hostels. Local guides will make sure you’re as immersed in local life as can be, plus you’ll have the flexibility of doing your own thing too. </p>
                    </div>

                    <div className="AboutItem">
                        <img src={img1} alt="image name" />
                        <h3>Any Watson </h3>
                        <small>Jaipur Rajasthan</small>
                        <p>Travel to places you’ve only dreamt of exploring while staying in some of the world’s best hostels. Local guides will make sure you’re as immersed in local life as can be, plus you’ll have the flexibility of doing your own thing too. </p>
                    </div>

                    <div className="AboutItem">
                        <img src={img2} alt="image name" />
                        <h3>Kapil Gupta </h3>
                        <small>Jaipur Rajasthan</small>
                        <p>Travel to places you’ve only dreamt of exploring while staying in some of the world’s best hostels. Local guides will make sure you’re as immersed in local life as can be, plus you’ll have the flexibility of doing your own thing too. </p>
                    </div>
                    
                </div>
                        </div>
                
                <div className="playstore">
                        <img src={image} alt="" />
                    </div>
            </div>
        </section>

    );
}

export default About;
