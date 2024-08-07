import React from 'react';
import bannerImg from "../assets/banner.webp"

const Banner = () => {

    return (
    
        <div className='banner'>
            <img src={bannerImg} alt="banner"></img>
            <div className='banner_container'>
                <p className='banner__text'>No fees.</p>
                <p className='banner__text'>No minimum deposit.</p>
                <p className='banner__text'>High interest rates.</p>
                <p className='banner__text'>Open a savings account with Argent Bank today!</p>
                </div>
        </div>
        
    )
}

export default Banner