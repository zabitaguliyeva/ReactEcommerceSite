import React from 'react'
import contentImage3 from "../../assets/images/content_section-drinkware.png"
export const ShopAllContentDrinkware = () => {
  return (
   <section className="shopAllContent">
    <div className="container">
        <div className="row">
        <div className="details" style={{
      background: 'linear-gradient(41.11deg, rgb(248, 238, 231) 0%, rgba(235, 243, 249, 0) 100%)'
}}>
            <p className="detailText">
            On-the-go hydration
            </p>
            <h2 className="contentCardTitle">
            Hydration never looked so good
            </h2>
            <p className="detailText">Stylish and sustainable. We'll drink to that.</p>
         </div>
         <div className="cardMedia">
            <img src={contentImage3} alt="" />
         </div>
        </div>
    </div>
   </section>
  )
}
