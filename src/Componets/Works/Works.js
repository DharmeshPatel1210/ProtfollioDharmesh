import React from 'react'
import './Works.css';
import Upwork from '../../img/Upwork.png';
import Fiverr from '../../img/fiverr.png';
import Amazon from '../../img/amazon.png';
import Shopify from '../../img/Shopify.png';
import Facebook from '../../img/Facebook.png';

const Works = () => {
  return (
    <div className="works">
         <div className="awesome">
            <span>Works for All these</span>
            <span>Branded & Clients</span>
            <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry.             
            <br/>
            Lorem Ipsum is simply dummy text of the printing
            <br/>
            Lorem Ipsum is simply dummy text of the printing
            <br/>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.     
            </span>
            <button className="button s-button">Hire Me</button>
            <div className="blur s-blur1" style={{background:'#ABF1FF94'}}></div>
        </div>        
        <div className="w-right">
            <div className="w-mainCircle">
                <div className="w-secCircle">
                    <img src={Upwork} alt="Upwork"/>
                </div>
                <div className="w-secCircle">
                    <img src={Fiverr} alt="Upwork"/>
                </div>
                <div className="w-secCircle">
                    <img src={Amazon} alt="Upwork"/>
                </div>
                <div className="w-secCircle">
                    <img src={Shopify} alt="Upwork"/>
                </div>
                <div className="w-secCircle">
                    <img src={Facebook} alt="Upwork"/>
                </div>
            </div>
            <div className="w-backCircle blueCircle"></div>
            <div className="w-backCircle yellowCircle"></div>
        </div>
    </div>
  )
}

export default Works