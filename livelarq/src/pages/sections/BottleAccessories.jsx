import React from 'react'
import {Swiper, SwiperSlide} from "swiper/react"
import acces1 from "../../assets/images/acces1.png"
import acces2 from "../../assets/images/acces2.png"
import acces3 from "../../assets/images/acces3.png"
import acces4 from "../../assets/images/acces4.png"
import acces5 from "../../assets/images/acces5.png"
import acces6 from "../../assets/images/acces6.png"

export const BottleAccessories = () => {
  return (
   <section className="accessories">
    <div className="container">
        <div className="row">
            <Swiper className="accessoriesContainer"
            slidesPerView={4}>
                <SwiperSlide className="accessoriesItem">
                    <div className="accessoriesImage">
                        <img src={acces1} alt="" />
                    </div>
                    <div className="accessoriesName">
                    Travel Sleeve
                    </div>
                    <span className="price">65$</span>
                </SwiperSlide>
                <SwiperSlide className="accessoriesItem">
                    <div className="accessoriesImage">
                        <img src={acces2} alt="" />
                    </div>
                    <div className="accessoriesName">
                    Travel Sleeve
                    </div>
                    <span className="price">65$</span>
                </SwiperSlide>
                <SwiperSlide className="accessoriesItem">
                    <div className="accessoriesImage">
                        <img src={acces3} alt="" />
                    </div>
                    <div className="accessoriesName">
                    Travel Sleeve
                    </div>
                    <span className="price">65$</span>
                </SwiperSlide>
                <SwiperSlide className="accessoriesItem">
                    <div className="accessoriesImage">
                        <img src={acces4} alt="" />
                    </div>
                    <div className="accessoriesName">
                    Travel Sleeve
                    </div>
                    <span className="price">65$</span>
                </SwiperSlide>
                <SwiperSlide className="accessoriesItem">
                    <div className="accessoriesImage">
                        <img src={acces5} alt="" />
                    </div>
                    <div className="accessoriesName">
                    Travel Sleeve
                    </div>
                    <span className="price">65$</span>
                </SwiperSlide>
                <SwiperSlide className="accessoriesItem">
                    <div className="accessoriesImage">
                        <img src={acces6} alt="" />
                    </div>
                    <div className="accessoriesName">
                    Travel Sleeve
                    </div>
                    <span className="price">65$</span>
                </SwiperSlide>
            </Swiper>
        </div>
    </div>
   </section>
  )
}
