import React from "react";
import { Link } from "react-router-dom";
//?Images
import faqImg1 from "../assets/images/faq1.svg";
import faqImg2 from "../assets/images/faq2.svg";
import faqImg3 from "../assets/images/faq3.svg";
import faqImg4 from "../assets/images/faq4.svg";
import faqImg5 from "../assets/images/faq5.svg";
import faqImg10 from "../assets/images/faq10.svg";
import faqImg7 from "../assets/images/faq7.svg";
import faqImg8 from "../assets/images/faq8.svg";
import faqImg9 from "../assets/images/faq9.svg";

export const Faq = () => {
  return (
    <section className="faq">
      <div className="container">
       
        <div className="row">
        <h1 className="sectionTitle">Have questions? We’ve got the FAQs.</h1>
          <div className="faqContainer">
            <div className="grid-item">
              <Link className="faqNavigator">
                <div className="faqImgContainer">
                  <img src={faqImg1} alt="faq" />
                </div>
                <div className="menuItemTitle">LARQ Bottle PureVis™</div>
              </Link>
            </div>
            <div className="grid-item">
              <Link className="faqNavigator">
                <div className="faqImgContainer">
                  <img src={faqImg2} alt="faq" />
                </div>
                <div className="menuItemTitle">LARQ Bottle Filtered</div>
              </Link>
            </div>
            <div className="grid-item">
              <Link className="faqNavigator">
                <div className="faqImgContainer">
                  <img src={faqImg3} alt="faq" />
                </div>
                <div className="menuItemTitle">LARQ Pitcher PureVis™</div>
              </Link>
            </div>
            <div className="grid-item">
              <Link className="faqNavigator">
                <div className="faqImgContainer">
                  <img src={faqImg4} alt="faq" />
                </div>
                <div className="menuItemTitle">Drinkware</div>
              </Link>
            </div>
            <div className="grid-item">
              <Link className="faqNavigator">
                <div className="faqImgContainer">
                  <img src={faqImg5} alt="faq" />
                </div>
                <div className="menuItemTitle">Accessories</div>
              </Link>
            </div>
            <div className="grid-item">
              <Link className="faqNavigator">
                <div className="faqImgContainer">
                  <img src={faqImg9} alt="faq" />
                </div>
                <div className="menuItemTitle">Personalization</div>
              </Link>
            </div>
            <div className="grid-item">
              <Link className="faqNavigator">
                <div className="faqImgContainer">
                  <img src={faqImg7} alt="faq" />
                </div>
                <div className="menuItemTitle">Subscription</div>
              </Link>
            </div>
            <div className="grid-item">
              <Link className="faqNavigator">
                <div className="faqImgContainer">
                  <img src={faqImg8} alt="faq" />
                </div>
                <div className="menuItemTitle">Shipping & Returns</div>
              </Link>
            </div>

            <div className="grid-item">
              <Link className="faqNavigator">
                <div className="faqImgContainer">
                  <img src={faqImg10} alt="faq" />
                </div>
                <div className="menuItemTitle">Warranty</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
