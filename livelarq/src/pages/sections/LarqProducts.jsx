import React from 'react'
import larqBottle from "../../assets/images/larq_bottles.png"
import larqBottleNew from "../../assets/images/larq_bottles_new.png"
import larqPitcher from "../../assets/images/larq_pitcher.png"

export const LarqProducts = () => {
  return (
 <section className="larqProducts">
    <div className="container">
    <h1 className="sectionTitle">Shop</h1>
        <div className="row">

            <div className="productCard">
            <div className="productCardImage">
                <img src={larqBottle} alt="" />
            </div>
            <h3 className="productPreviewTitle">Purification</h3>
            <span>Shop now</span>
            </div>

<div className="productCard">
            <div className="productCardImage">
                <img src={larqPitcher} alt="" />
            </div>
            <h3 className="productPreviewTitle">Home</h3>
            <span>Shop now</span>
            </div>
            <div className="productCard">
            <div className="productCardImage">
                <img src={larqBottleNew} alt="" />
            </div>
            <h3 className="productPreviewTitle">Drinkware</h3>
            <span>Shop now</span>
            </div>
        </div>
    </div>
 </section>
  )
}
