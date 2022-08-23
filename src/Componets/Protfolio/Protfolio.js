import React from 'react'
import './Protfolio.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import Sidebar from '../../img/sidebar.png';
import Ecommerce from '../../img/ecommerce.png';
import HOC from '../../img/hoc.png';
import MusicApp from '../../img/musicapp.png';
import 'swiper/css'

const Protfolio = () => {
  return (
    <div className="protfolio">
      <span>Recent project</span>
      <span>Protfolio</span>
      <Swiper
      spaceBetween={30}
      slidesPerView={3}
      grabCursor={true}
      className="protfolio-slider"
      >
        <SwiperSlide>
          <img src={Sidebar} alt="Sidebar"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Ecommerce} alt="Ecommerce"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={HOC} alt="HOC"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={MusicApp} alt="MusicApp"/>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Protfolio