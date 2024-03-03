import React from 'react'
import { Link } from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs';
import { useTranslation } from "react-i18next";
export const HomeHero = () => {
  const {t}=useTranslation()  
  return (
    <section className='homeHero'>
      <div className="heroBgImage"></div>
   <div className="container">
   
    <div className="row">
  <div className="heroArticle">
  <h1 className="heroTitle">
     <strong> <b>{t(`hero_heading`)}</b></strong>
      </h1>
      <p className="heroSubtitle">
      {t(`hero_detail`)}
      </p>
           <Link to="/shop"className='shopNow' >{t(`shop_btn`)}<BsArrowRight className='arrow'/> </Link>
  </div>
    </div>
   </div>
    </section>
  )
}
