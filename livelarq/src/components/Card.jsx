import React, { useState } from "react";
import { Link } from "react-router-dom";
import { formatImgUrl } from "../pages/utils";

// Swipers
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export const Card = ({ data }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const combinedImages = data.images.map((image) => formatImgUrl(image));

  return (
    <Link to={`/products/${data.id}`}>
      <div className="productCard" key={data.id}>
        <Swiper
          className="colorsProduct"
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          slidesPerView={"auto"}
          spaceBetween={40}
          navigation
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
        >
          {combinedImages.map((image) => (
            <SwiperSlide key={image}>
              <img src={image} alt={data.name} />
              <h2 className="productTitle">{data.name}</h2>
              <div className="priceFrom">
                From
                {data.discount !==undefined? (
                  <>
                    <span className="discount"> ${data.price}</span>
                    <span className="price">
                      $
                      {data.price - (data.discount * data.price) / 100}
                    </span>
                  </>
                ) : (
                  <span className="price">${data.price}</span>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Thumbnail */}
        <Swiper
          className="colorsProductThumbnail"
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={4}
          freeMode
          watchSlidesProgress
          modules={[FreeMode, Navigation, Thumbs]}
        >
          {combinedImages.map((image) => (
            <SwiperSlide
              onClick={(product) => {
                product.preventDefault();
                product.stopPropagation();
              }}
              key={image}
              className="colorItems"
            >
              <div className="productItem">
                <img src={image} alt={data.name} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Link>
  );
};
