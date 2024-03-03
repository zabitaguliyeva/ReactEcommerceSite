import React from 'react';
//Swiper
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
//React-icons
import { BsArrowRight } from 'react-icons/bs';
//Images
import img1 from "../../assets/images/larq_pitcher_on_table.png"
import img2 from "../../assets/images/New_york_view.png"
import img3 from "../../assets/images/environment_plastic.png"
import img4 from "../../assets/images/dished_with_food.png"
import img5 from "../../assets/images/larq_bottle_on_the_water.jpg"
import img6 from "../../assets/images/interior_design.jpg"
import img7 from "../../assets/images/environment_plastic.png"
export const HomeMagazine = () => {
    return (
        <section className="magazine">
            <div className="container">
                <div className="row">
                    <div className="flexGroup">
                        <div>
                            <h1 className="sectionTitle">
                                basq magazine
                            </h1>

                            <p className='magazineTitle'>Take a peek at our online magazine where we cover everything from water to travel and wellness.</p>
                        </div>
                        <Link to="/" className="basqBtn">Explore basq <BsArrowRight /></Link >
                    </div>
                    <div className="magazineCardContainer">
                        <Swiper
                            spaceBetween={20}
                            slidesPerView={3}
                            pagination={{
                                clickable: true,
                            

                            }}
                            loop={true}
                            modules={[Pagination]}
                            className="mySwiper"

                        >

                            <SwiperSlide className="magazineCard"><div >
                                <div className="magazineCardImg">
                                    <img src={img1} alt="larq-pitcher-on-table" />
                                </div>
                                <p className="magazineCardDetails">
                                    I’m a nutritionist, and I only use filtered water. Here’s why.
                                </p>
                                <span>Read more</span>
                            </div>
                            </SwiperSlide>
                            <SwiperSlide className="magazineCard"> <div >
                                <div className="magazineCardImg">
                                    <img src={img2} alt="larq-pitcher-on-table" />
                                </div>
                                <p className="magazineCardDetails">
                                    I’m a nutritionist, and I only use filtered water. Here’s why.
                                </p>
                                <span>Read more</span>
                            </div>
                            </SwiperSlide>
                            <SwiperSlide className="magazineCard"> <div >
                                <div className="magazineCardImg">
                                    <img src={img3} alt="larq-pitcher-on-table" />
                                </div>
                                <p className="magazineCardDetails">
                                    I’m a nutritionist, and I only use filtered water. Here’s why.
                                </p>
                                <span>Read more</span>
                            </div></SwiperSlide>
                            <SwiperSlide className="magazineCard"><div >
                                <div className="magazineCardImg">
                                    <img src={img4} alt="larq-pitcher-on-table" />
                                </div>
                                <p className="magazineCardDetails">
                                    I’m a nutritionist, and I only use filtered water. Here’s why.
                                </p>
                                <span>Read more</span>
                            </div></SwiperSlide>
                            <SwiperSlide className="magazineCard"><div >
                                <div className="magazineCardImg">
                                    <img src={img5} alt="larq-pitcher-on-table" />
                                </div>
                                <p className="magazineCardDetails">
                                    I’m a nutritionist, and I only use filtered water. Here’s why.
                                </p>
                                <span>Read more</span>
                            </div></SwiperSlide>
                            <SwiperSlide className="magazineCard"><div >
                                <div className="magazineCardImg">
                                    <img src={img6} alt="larq-pitcher-on-table" />
                                </div>
                                <p className="magazineCardDetails">
                                    I’m a nutritionist, and I only use filtered water. Here’s why.
                                </p>
                                <span>Read more</span>
                            </div></SwiperSlide>
                            <SwiperSlide className="magazineCard"><div >
                                <div className="magazineCardImg">
                                    <img src={img7} alt="larq-pitcher-on-table" />
                                </div>
                                <p className="magazineCardDetails">
                                    I’m a nutritionist, and I only use filtered water. Here’s why.
                                </p>
                                <span>Read more</span>
                            </div>
                            </SwiperSlide>


                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    )
}
