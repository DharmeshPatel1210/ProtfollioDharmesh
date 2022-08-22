import React from 'react'
import './Services.css'
import HeartEmoji from '../../img/heartemoji.png';
import Glasses from '../../img/glasses.png';
import Humble from '../../img/humble.png';
import Card from '../Card/Card';
import Resume from '../../pdf/resume.pdf';


const Services = () => {
  return (
    <div className="Services">
        <div className="awesome">
            <span>My Awesome</span>
            <span>Services</span>
            <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span>
            <a href={Resume} download><button className="button s-button">Download CV</button></a>
            <div className="blur s-blur1" style={{background:'#ABF1FF94'}}></div>
        </div>
        <div className="cards">
            <div style={{left:'14rem'}}>
                <Card
                    emoji = {HeartEmoji}
                    heading = {'Design'}
                    detail = {'Figam, Sketch, Photoshop, Adobe AI, Adobe HD'}
                />
            </div>
            <div style={{top:'12rem',left:'-4rem'}}>
                <Card
                    emoji = {Glasses}
                    heading = {'Developer'}
                    detail = {'HTML, CSS, SASS, Jquery, Javascript, React Js'}
                />
            </div>
            <div style={{top:'19rem',left:'12rem'}}>
                <Card
                    emoji = {Humble}
                    heading = {'UI/UX'}
                    detail = {'It is a long established fact that a reader a page when looking at its layout.'}
                />
            </div>
        </div>
    </div>
  )
}

export default Services;