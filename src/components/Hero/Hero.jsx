import React from 'react';
import Header from '../Header/Header';
import Heart from '../../assets/heart.png'
import hero_image from '../../assets/hero_image.png'
import hero_image_back from '../../assets/hero_image_back.png'
import Calories from '../../assets/calories.png'

import './Hero.css'
  const Hero = () => {
    return(
      <div className="hero">
          <div className="left-h">
            <Header />
      {/* the best add */}
            <div className="the-best-ad">
              <div></div>
              <span>the best fitness club in the town</span>
            </div>

            {/* Hero Headeing */}
            <div className="hero-text">
                <div>
                  <span className='stroke-text'>Shape </span>
                  <span>Your</span>
                </div>
                <div>
                  <span>Idea Body</span>
                </div>
                <div className='span'>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dicta excepturi atque voluptates eius ullam earum illum consequatur nobis a reprehenderit?</span>
                </div>
            </div>

            {/* figures */}
            <div className="figures">
              <div>
                <span>+ 140</span>
                <span>EXPERT COACHES</span>
              </div>
              <div>
                <span>+ 978</span>
                <span>MEMBERS JOINED</span>
              </div>
              <div>
                <span>+ 50</span>
                <span>FITNESS PROGRAMS</span>
              </div>
            </div>
            {/* end figures */}
            {/* hero buttons */}
            <div className="hero-buttons">
              <div className="btn">Get Started</div>
              <div className="btn">Learn More</div>
            </div>

          </div>
          <div className="right-h">
              <button className='btn'>Join Now</button>

              
              <div className="heart-rate">
                <img src={Heart} alt="" />
                <span>Heart Rate</span>
                <span>116 bpm</span>
              </div>

              {/* hero images */}
              <img src={hero_image} alt="" className='hero-image'/>
              <img src={hero_image_back} alt="" className='hero-image-back'/>
              {/* calories */}
              <div className="calories">
                <img src={Calories} alt="" />
                <div>

                <span>Calories Burned</span>
                <span>220 kcal</span>
                </div>
              </div>
          </div>
      </div>
    )
  }
export default Hero