import React from 'react'
import contentImage from "../../assets/images/content_section-purification.png"
export const ShopAllContentCardPurification = () => {
  return (
   <section className="shopAllContent">
    <div className="container">
        <div className="row">
         <div className="details">
            <p className="detailText">
            Portable purification
            </p>
            <h2 className="contentCardTitle">
            Make refills a breeze
            </h2>
            <p className="detailText">PureVis™ and Nano Zero technology improves water quality for a brilliant hydration experience on the go.</p>
         </div>
         <div className="cardMedia">
            <img src={contentImage} alt="" />
         </div>
        </div>
    </div>
   </section>
  )
}
