import React from 'react'
import icon1 from "../../assets/images/icon1.svg"
import icon2 from "../../assets/images/icon2.svg"
import icon3 from "../../assets/images/icon3.svg"

export const Article = () => {
  return (
  <section className="article">
    <div className="container">
        <div className="row">
            <div className="articleCard">
                <div className="card-icon">
                    <img src={icon1} alt="icon" />
             
                </div>
                <h1 className="cardTitle">
                Say yes to refills
                </h1>
                <p className="cardContent">
                Save money and make single-use water bottles a thing of the past.
                </p>
            </div>
            <div className="articleCard">
                <div className="card-icon">
                    <img src={icon2} alt="icon" />
                </div>
                <h1 className="cardTitle">
                A smart way to sip
                </h1>
                <p className="cardContent">
                PureVis™ and Nano Zero technology improves water quality for a brilliant hydration experience on the go.
                </p>
            </div>
            <div className="articleCard">
                <div className="card-icon">
                    <img src={icon3} alt="icon" />
                </div>
                <h1 className="cardTitle">
                Say yes to refills
                </h1>
                <p className="cardContent">
                A portion of proceeds supports environmental and clean water projects worldwide.
                </p>
            </div>
        </div>
    </div>
  </section>
  )
}
