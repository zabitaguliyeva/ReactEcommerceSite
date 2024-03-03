import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Card } from "../Card";
import { CartContext } from "../../pages/CartContext";


export const SwiperProducts = () => {
const {products}=useContext(CartContext);
  return (
    <section className="trends">
      <div className="container">
      <h1 className="sectionTitle">Now Trending</h1>
        <div className="row">
          
          {products.length > 0 ? (
            <Swiper
              spaceBetween={40}
              slidesPerView={"auto"}
              loop={true}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="trendProducts"
            >
              {products.map((product) => (
                <SwiperSlide className="wrapper" key={product.id}>
                  <Card data={product}  />
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </section>
  );
};
