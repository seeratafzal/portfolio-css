import React from 'react'
import Navbar from './Navbar'
import '../app/styles/hero.css  ';

function Hero() {
  return ( <div id="hero" className="hero-container">
     {/* <Navbar className="navbar"/>  */}
     <div className="hero-content">
       <div className='hidden lg:block'></div> 
       <div className="hero-text">
         <div className='hero-msin'> 
          <p data-aos="zoom-out-left">I am</p>
           <p data-aos="zoom-out-left">Seerat</p>
            <p data-aos="zoom-out-left">Afzal</p> 
            </div>
             </div>
              </div> 
              </div> 
              );
            };

export default Hero;

