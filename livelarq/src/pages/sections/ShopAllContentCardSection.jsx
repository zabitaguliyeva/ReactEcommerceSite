import React from 'react'
import contentImage2 from "../../assets/images/content_section-home2.png"
export const ShopAllContentCardSection = () => {
  return (
   <section className="shopAllContent">
    <div className="container">
        <div className="row">
        <div className="details" style={{
  background: 'linear-gradient(41.11deg, rgb(233, 245, 246) 0%, rgba(235, 243, 249, 0) 100%)',
  backgroundImage: 'linear-gradient(41.11deg, rgb(233, 245, 246) 0%, rgba(235, 243, 249, 0) 100%)'
}}>
            <p className="detailText">
            At-home purification
            </p>
            <h2 className="contentCardTitle">
            Who said practical had to be boring?
            </h2>
            <p className="detailText">Nano Zero Filter technology delivers better-tasting coffee, tea, smoothies—everything—and looks good doing it.</p>
         </div>
         <div className="cardMedia">
            <img src={contentImage2} alt="" />
         </div>
        </div>
    </div>
   </section>
  )
}
