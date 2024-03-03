import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import { VscStarFull } from "react-icons/vsc";
import { BsArrowRight } from "react-icons/bs";
import strategiest from "../../assets/images/strategist.png";
import oprah from "../../assets/images/oprah_Magazine.png";
import digitalTRends from "../../assets/images/digital_trends.png";
import bpLogo from "../../assets/images/BP-logo-black.png";
import { Link } from "react-router-dom";

export const HomeReview = () => {
  return (
    <section className="review">
      <div className="container">
        <div className="row">
          <div className="ratingTitle">
            <div className="titleLeft">
              <h1 className="ratingMainTitle"> Briliant</h1>
              <div className="customStar">
                <VscStarFull />
                <VscStarFull />
                <VscStarFull />
                <VscStarFull />
                <VscStarFull />
              </div>
              <p className="ratingText">based on 7307 reviews</p>
            </div>
            <Link to="" className="reviewsBtn">
              All reviews <BsArrowRight className="arrow" />
            </Link>
          </div>
          <div className="reviewItemQuoteContainer">
            <Swiper
              spaceBetween={40}
              pagination={{ clickable: true }}
              breakpoints={{
                1439: {
                  slidesPerView: 4,
                  spaceBetween: 40,
                },
              }}
              slidesPerView={4}
              modules={[Pagination]}
              className="mySwiper2"
            >
              <SwiperSlide className="mySwiperReview">
                <p className="reviewItemText">
                  What’s the Next Status Water Bottle? Three of our experts
                  named the LARQ bottle as one to watch.
                </p>
                <div className="reviewLogoContainer">
                  <img src={strategiest} alt="strategistLogo" />
                </div>
              </SwiperSlide>
              <SwiperSlide className="mySwiperReview">
                <p className="reviewItemText">
                  The result is that every glass of water tastes crisp and
                  fresh.
                </p>
                <div className="reviewLogoContainer">
                  <img src={oprah} alt="oprah" />
                </div>
              </SwiperSlide>
              <SwiperSlide className="mySwiperReview">
                <p className="reviewItemText">
                  LARQ's PureVis™ water pitcher erased my fears about drinking
                  water from the tap.
                </p>
                <div className="reviewLogoContainer">
                  <img src={digitalTRends} alt="digitalTRends" />
                </div>
              </SwiperSlide>
              <SwiperSlide className="mySwiperReview">
                <p className="reviewItemText">
                  You Should Ditch Your Old Water Dispenser For The High-Tech
                  LARQ Pitcher PureVis™.
                </p>
                <div className="reviewLogoContainer">
                  <img src={bpLogo} alt="BP Logo" />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};
