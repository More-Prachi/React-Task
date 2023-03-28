import React from 'react';
import './Hotels.css';
import { BiLeftArrowAlt } from 'react-icons/bi';
import { BiRightArrowAlt } from 'react-icons/bi';
import { BsCurrencyRupee } from 'react-icons/bs';
import { AiFillStar } from 'react-icons/ai';


//=========import images=============

import israel from '../Assets/israel.jpg';
import maldives from '../Assets/maldives.jpg';
import southAfrica from '../Assets/southAfrica.jpg';
import singapore from '../Assets/singapore.jpg';
const Data = [
    {
        id: 1,
        imgSrc: israel,
        location: 'Isreal',
        distance: '56,401km away',
        date: '1-6 Nov',
        Price: '26,000'
    },

    {
        id: 2,
        imgSrc: southAfrica,
        location: 'South Africa',
        distance: '56,401km away',
        date: '5-11 May',
        Price: '25,000'
    },
    {
        id: 3,
        imgSrc: maldives,
        location: 'Maldives',
        distance: '56,401km away',
        date: '17-21 June',
        Price: '28,000'
    },
    {
        id: 4,
        imgSrc: singapore,
        location: 'Singapore',
        distance: '56,401km away',
        date: '7-12 April',
        Price: '30,000'
    }


]

const Hotels = () => {
    return (
        <section className='hotel section container'>
            <div className='secContainer'>
                <div className='secHeader flex'>
                    <div className="textDiv">
                        <h2 className='secTitle'>Trending Hotels</h2>
                    </div>
                    <h5 className='info'>
                        From historical cities to natural specteculars,
                        come see the best of the world !
                    </h5>
                    <div className="iconsDiv flex">
                        <BiLeftArrowAlt className="icon LeftIcon" />
                        <BiRightArrowAlt className="icon RightIcon" />

                    </div>
                </div>
                <div className="mainContent flex">

                    {
                        Data.map(({ id, imgSrc, location, Price, date, distance }) => {
                            return (
                                <div className="singleDestination">
                                    <div className="destImage">

                                        <img src={imgSrc} alt="Image title" />
                                        <div className="overlayInfo">
                                        </div>
                                    </div>
                                    <div className="destFooter">
                                        <div className="number">
                                            0{id}
                                            <p className="destText flex">{location}</p>
                                            <span className='status'>New<AiFillStar /> </span>

                                            {distance}
                                            <div>   {date}
                                            <p className='price'>Price: <BsCurrencyRupee />{Price} </p>

                                            </div>
                                        </div>

                                    </div>
                                </div>

                            )
                        })
                    }
                </div>
            </div>

        </section >

    );
}

export default Hotels;
