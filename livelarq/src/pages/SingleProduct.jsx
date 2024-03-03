import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { formatImgUrl } from "./utils";
import icon1 from "../assets/images/icon1.svg";
import icon2 from "../assets/images/icon2.svg";
import icon3 from "../assets/images/icon3.svg";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import { CartContext } from "./CartContext";

export const SingleProduct = ({ onClick }) => {
  const { id } = useParams();
  const { products, addToCart } = useContext(CartContext);
  const product = products.find((product) => product.id === id);
  if (!product) {
    return <div>Loading...</div>;
  }
  return (
    <section className="singleProduct" key={id}>
      <div className="container">
        <div className="row">
          <div className="singleProductImg">
            <img src={formatImgUrl(product?.images[1])} alt={product.name} />
          </div>

          <div className="singleProductDetails">
            <h1 className="singleProductName">{product.name}</h1>
            <span className="price">
              {product.discount !== null ? (
                <>
                  <span className="discount"> ${product.price}</span>
                  <span className="price">
                    ${product.price - (product.discount * product.price) / 100}
                  </span>
                </>
              ) : (
                <span className="price">${product.price}</span>
              )}
            </span>
            <div className="customStar">
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              <BsStarHalf />
            </div>
            <h3 className="productDescription">Product description</h3>
            <p className="productDetails">{product.details}</p>
            <div className="information">
              <div className="group">
                <div className="informationImages">
                  <img src={icon1} alt="" />
                </div>
                <p className="informationDetails">Enjoy Drinking</p>
              </div>
              <div className="group">
                <div className="informationImages">
                  <img src={icon2} alt="" />
                </div>
                <p className="informationDetails">Brilliantly Clean</p>
              </div>
              <div className="group">
                <div className="informationImages">
                  <img src={icon3} alt="" />
                </div>
                <p className="informationDetails">Self Cleaning</p>
              </div>
            </div>
            <Link className="addCart">
              <button
                className="addToCart"
                onClick={() => addToCart(product.id)}
              >
                Add to cart <span className="price">${product.price}</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
