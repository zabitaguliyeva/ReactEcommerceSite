//?React-icons
import { HiOutlineXMark } from "react-icons/hi2";
//!Links
import { Link } from "react-router-dom";
//Component
import CheckoutCard from "./CheckoutCard";
//Context
import { useContext } from "react";
import { CartContext } from "../pages/CartContext";


export const Cart = ({ isOpen, setisOpen }) => {
  const { cart } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <section className={`cart ${isOpen && "active"}`}>
        <div className="overlay" onClick={() => setisOpen(false)}></div>
        <div className="cartInside">
          <div className="closeGroup">
            <h5 className="cartTitle">Your cart</h5>
            <button className="close" onClick={() => setisOpen(false)}>
              <HiOutlineXMark />
            </button>
          </div>
          <h3 className="empty">Oh, it appears your cart is empty</h3>
          <Link to="/shop" className="shop">
            <button className="shopLarq">Shop larq</button>
          </Link>
        </div>
      </section>
    );
  }
  const findTotalPrice = cart.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );
  return (
    <section className={`cart ${isOpen && "active"}`}>
      <div className="overlay" onClick={() => setisOpen(false)}></div>
      <div className="cartInside">
        <div className="closeGroup">
          <h5 className="cartTitle">Your cart</h5>
          <button className="close" onClick={() => setisOpen(false)}>
            <HiOutlineXMark />
          </button>
        </div>

        <div className="closeGroup">
          <div className="checkoutCardList">
            {cart.map((product) => (
              <CheckoutCard key={product.id} data={product} />
            ))}
            <div className="totalPrice">
              <div className="subTotal">Subtotal:</div>{" "}
              <h1 className="findTotalPrice">${findTotalPrice.toFixed(2)}</h1>
            </div>

         <div className="buttonContainer">
         <div className="checkoutBtn"><Link to="/checkoutPage">Check out now </Link></div>
         </div>
          </div>
        </div>
      </div>
    </section>
  );
};
