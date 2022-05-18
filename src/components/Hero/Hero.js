import React from 'react';
import Video from '../../assets/maldivesVideo.mp4';
import {AiOutlineSearch} from 'react-icons/ai';

import './Hero.css';


function Hero() {
  return (
    <div className='hero'>
        <video autoPlay muted loop id='video'>
            <source src={Video} type="video/mp4"/>
        </video>
        <div className='overlay'></div>
        <div className='content'>
            <h1>First Class Travel</h1>
            <h2>Top 1% Locations Worldwide</h2>
            <form className='form'>
                <div><input type="text" placeholder='Search Destinations'/></div>
                <div>
                    <button><AiOutlineSearch className="icon"/></button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Hero