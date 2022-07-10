import React from 'react'
import './Intro.css'
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'

const Intro = () => {
  return (
    <div className="intro">
        <div className="i-left">
            <div className="i-name">
                <span>Hy! I Am</span>
                <span>Dharmesh Patel</span>
                <span>Frontend Developer with high level of experience in web designing and development, producting the Quality work</span>
            </div>
            <button className="button i-button">Hire me </button>
            <div className="i-icon">
                <img src={Github} alt="Github" />
                <img src={LinkedIn} alt="LinkedIn" />
                <img src={Instagram} alt="Instagram" />
            </div>
        </div>
        <div className="i-right">
            i right i righti righti right
        </div>
    </div>
  )
}

export default Intro;