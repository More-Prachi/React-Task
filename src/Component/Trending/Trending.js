import React from 'react';
import { BsCurrencyRupee } from 'react-icons/bs';
import './Trending.css';
import { MdOutlineFavoriteBorder } from 'react-icons/md';
import { AiFillStar } from 'react-icons/ai';

import israel from '../Assets/israel.jpg';
import maldives from '../Assets/maldives.jpg';
import southAfrica from '../Assets/southAfrica.jpg';
import singapore from '../Assets/singapore.jpg';

const Data = [
    {
        id: 1,
        imgSrc: israel,
        location: 'Isreal',
        Price: '56,000night',
        distance: '56,401km away',
        date: '1-6 Nov'
    },

    {
        id: 2,
        imgSrc: southAfrica,
        location: 'South Africa',
        Price: '25,000 night',
        distance: '56,401km away',
        date: '5-11 May'
    },
    {
        id: 3,
        imgSrc: maldives,
        location: 'Maldives',
        Price: '28,000 night',
        distance: '56,401km away',
        date: '7-12 April'
    },
    {
        id: 4,
        imgSrc : singapore,
        location: 'Singapore',
        Price: '30,000 night.',
        distance: '56,401km away',
        date: '17-21 June'
    }


]

const Trending = () => {
    return (
        <section className='trending container section'>
            <div className="secContainer">
                <div className="secIntro">
                    <h2 className="secTitle">
                        Trending Hotels
                    </h2>
                    <h5 className='info'>
                        From historical cities to natural specteculars,
                        come see the best of the world !
                    </h5>
                </div>
                <a href='#' className='view'>view all</a>
                <div className="mainContent flex">    
                    {
                        Data.map(({ imgSrc , location, Price, distance, date }) => {
                            return (

                                <div className="singleOffer">
                                    <div className="destImage">
                                        <img src={imgSrc} alt="Image Name" />
                                        <span className="discount">
                                        </span>
                                    </div>
                                    <div className="offerbody">
                                        <div className="price flex">
                                            <h4 className='amount'>{location}<span>

                                            </span></h4>
                                            <span className='status'>New<AiFillStar /> </span>
                                        </div>

                                        <div className='info'>{distance}
                                            <div>{date}</div>
                                            <BsCurrencyRupee /> {Price}
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

export default Trending;
