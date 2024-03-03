import React from 'react'

import { BsArrowRight } from 'react-icons/bs';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import mission1 from "../../assets/images/mission-1.jpg"
import mission2 from "../../assets/images/mission-2.jpg"
import mission3 from "../../assets/images/mission-3.jpg"
import { Link } from 'react-router-dom';


export const HomeMission = () => {
  return (
   <section className="media">
    
    <div className="container">
        
        <div className="row">
          
<div className="mediaDetails">
<div className="mediaTitle">
Our mission
</div>
<h2 className="mediaHeading">
    Drink briliantly
</h2>
<div className="description">We make it easy to opt for the healthier and more sustainable hydration choice, anytime and anywhere.</div>
<Link to="/" className="learnMore">Learn more < BsArrowRight/></Link>
</div>
          <Swiper
           className="mediaSlider"
           spaceBetween={40}
           slidesPerView={3}
        
           centeredSlides="true"
           modules={[Pagination]}>
          <SwiperSlide className="mediaCard">
          <div className='mediacardImgDetails'>
         
          <img src={mission1} alt="" />
<div className="mediaCardDetails">

<h3 className="sliderCardHeadline">Award winning design</h3>
<span className="sliderCardDescription">When it comes to form and function, we’ve got it down.</span>
</div>

            </div>
          </SwiperSlide>
         <SwiperSlide className="mediaCard">
         <div className='mediacardImgDetails'>
<img src={mission2} alt="" />
<div className="mediaCardDetails"><h3 className="sliderCardHeadline">The future of hydration</h3>
<span className="sliderCardDescription">PureVis™ and Nano Zero technology improves water quality for a brilliant hydration experience.</span></div>
            </div>
         </SwiperSlide>
            <SwiperSlide className="mediaCard">
            <div className='mediacardImgDetails'>
<img src={mission3} alt="" />
<div className="mediaCardDetails">
<h3 className="sliderCardHeadline">Better for you and the planet</h3>
<span className="sliderCardDescription">A portion of every purchase helps restore our oceans and brings clean water to communities in need.</span>
</div>
            </div>
            </SwiperSlide>
          </Swiper>
        </div>
    </div>
   </section>
  )
}
