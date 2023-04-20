import React from 'react';
import './ab.css';
import img1 from '../Assets/img1.png';
import img2 from '../Assets/img2.png';
import img3 from '../Assets/img3.png';
import image from '../Assets/image.png';
import rect from '../Assets/rect.png';


const Data = [
    {
        id: 1,
        imgsrc: img1,
        Name: 'Anny Watson',
        city: 'Jaipur Rajasthan'

    },

    {
        id: 2,
        imgsrc: img2,
        Name: 'Kapil Gupta',
        city: 'Jaipur Rajasthan'

    },
    {
        id: 3,
        imgsrc: img3,
        Name: 'Nidhi Sharma',
        city: 'Jaipur Rajasthan'

    }
]

const Ab = () => {
    return (
        <section className='AboutContainerSection'>
            
            <div className="secContainer">
                <div className="secIntro">
                    <h2 className="secTitle">
                        What people thinking about us ?

                    </h2>
                </div>

                <div className="mainContent flex">
                    {
                        Data.map(({ imgsrc, Name, city }) => {
                            return (

                                <div className="singleitem ">
                                    <div className="Image flex">
                                        <img src={imgsrc} alt="Image Name" />
                                        <div className="Name ">
                                            {Name} 
                                            
                                        <div className='city'>{city}</div>

                                   
                                        </div>
                                    </div>
                                   
                                    <div className="Namebody flex">

                                        <div>
                                            <p className='saying'>Travel to places you’ve only dreamt of exploring while staying in some of the world’s best hostels. Local guides will make sure you’re as immersed in local life as can be, plus you’ll have the flexibility of doing your own thing too. </p>
                                        </div>

                                    </div>

                                </div>
                            )
                        })
                    }

                </div>
                
                
            </div>
            
        </section>
    );
}

export default Ab;
