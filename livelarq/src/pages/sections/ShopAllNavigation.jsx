import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import { Link } from "react-router-dom";
import blueblack from "../../assets/images/blackblue.png";
import bluepitcher from "../../assets/images/bluepitchershop.png";
import threeBottles from "../../assets/images/threecolors.png";
import gift from "../../assets/images/gift-sets_three.png";
export const ShopAllNavigation = () => {
  return (
    <section className="shopAllNavigation">
      <div className="container">
      <h1 className="sectionTitle">Shop All</h1>
        <p className="shopParagraph">Discover a world of brilliant hydration</p>
        <div className="row">
       
          <Swiper
            className="shopSwiper"
            slidesPerView={"auto"}
            spaceBetween={40}
            pagination={{ clickable: true }}
            modules={[Pagination]}
          >
            <SwiperSlide className="shopNavItem">
              <Link className="shopNavLink">
                <div className="shopNavImg">
                  <img src={blueblack} alt="blueblack" />
                </div>
                <div className="shopNavDetail">Purification</div>
              </Link>
            </SwiperSlide>
            <SwiperSlide className="shopNavItem">
              <Link className="shopNavLink">
                <div className="shopNavImg">
                  <img src={bluepitcher} alt="blueblack" />
                </div>
                <div className="shopNavDetail">Home</div>
              </Link>
            </SwiperSlide>
            <SwiperSlide className="shopNavItem">
              <Link className="shopNavLink">
                <div className="shopNavImg">
                  <img src={threeBottles} alt="blueblack" />
                </div>
                <div className="shopNavDetail">Drinkware</div>
              </Link>
            </SwiperSlide>
            <SwiperSlide className="shopNavItem">
              <Link className="shopNavLink">
                <div className="shopNavImg">
                  <img src={gift} alt="blueblack" />
                </div>
                <div className="shopNavDetail">Gift Sets</div>
              </Link>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};
