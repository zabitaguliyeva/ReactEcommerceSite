// import React, { useContext, useEffect, useRef, useState } from "react";
// import { CartContext } from "../CartContext";
// import { formatImgUrl } from "../utils";
// import { useForm } from "react-hook-form";
// import SweetAlert from "react-bootstrap-sweetalert";
// import { useNavigate } from "react-router-dom";

// const CheckoutPage = () => {
//   const { cart, clearCart } = useContext(CartContext);
//   const [showAlert, setShowAlert] = useState(false);

//   const total = cart.reduce(
//     (acc, product) => acc + product.price * product.quantity,
//     0
//   );

//   const scrollToTopRef = useRef();
//   useEffect(() => {
//     scrollToTopRef.current.scrollIntoView({ behavior: "smooth" });
//   }, []);

//   const {
//     handleSubmit,
//     register,
//     formState: { errors },
//     reset,
//   } = useForm();

//   const navigate = useNavigate();

//   const onSubmit = () => {
//     reset();
//     setShowAlert(true);
//   };

//   const hideAlert = () => {
//     setShowAlert(false);
//     clearCart();
//     navigate("/");
//   };

//   const t = (key) => key; // Placeholder function

//   return (
//     <div className="checkout" ref={scrollToTopRef}>
//       <div className="container">
//         <h1>Checkout</h1>
//         <div className="row">
//           <div className="checkout-form">
//             <h3>Shipping Information</h3>

//             <form onSubmit={handleSubmit(onSubmit)}>
//               <div className="form-data">
//                 <label htmlFor="email">Email</label>
//                 <input
//                   type="email"
//                   placeholder="Email"
//                   id="email"
//                   {...register("email", {
//                     required: "Email is required",
//                     pattern: {
//                       value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
//                       message: "Invalid email address",
//                     },
//                   })}
//                 />
//                 {errors.email && (
//                   <p className="error">{errors.email.message}</p>
//                 )}
//               </div>

//               <h3>Billing Information</h3>
//               <div className="name">
//                 <div className="form-data">
//                   <label htmlFor="fname">First Name</label>
//                   <input
//                     type="text"
//                     name="fname"
//                     placeholder="First Name"
//                     id="fname"
//                     {...register("fname", {
//                       required: "First name is required",
//                       minLength: {
//                         value: 3,
//                         message: "First name must be at least 3 characters",
//                       },
//                       maxLength: {
//                         value: 15,
//                         message: "First name cannot exceed 15 characters",
//                       },
//                     })}
//                   />
//                   {errors.fname && (
//                     <p className="error">{errors.fname.message}</p>
//                   )}
//                 </div>

//                 <div className="form-data">
//                   <label htmlFor="lname">Last Name</label>
//                   <input
//                     type="text"
//                     name="lname"
//                     placeholder="Last Name"
//                     id="lname"
//                     {...register("lname", {
//                       required: "Last name is required",
//                       minLength: {
//                         value: 3,
//                         message: "Last name must be at least 3 characters",
//                       },
//                       maxLength: {
//                         value: 15,
//                         message: "Last name cannot exceed 15 characters",
//                       },
//                     })}
//                   />
//                   {errors.lname && (
//                     <p className="error">{errors.lname.message}</p>
//                   )}
//                 </div>
//               </div>

//               <div className="form-data">
//                 <label htmlFor="address">Address</label>
//                 <input
//                   type="text"
//                   name="address"
//                   placeholder="Address"
//                   id="address"
//                   {...register("address", {
//                     required: "Address is required",
//                     minLength: {
//                       value: 3,
//                       message: "Address must be at least 3 characters",
//                     },
//                     maxLength: {
//                       value: 20,
//                       message: "Address cannot exceed 20 characters",
//                     },
//                   })}
//                 />
//                 {errors.address && (
//                   <p className="error">{errors.address.message}</p>
//                 )}
//               </div>

//               <h3>Payment</h3>
//               <div className="form-data">
//                 <label htmlFor="card-num">Card Number</label>
//                 <input
//                   type="text"
//                   name="card-num"
//                   placeholder="Card Number"
//                   maxLength={19}
//                   id="card-num"
//                   {...register("cardNum", {
//                     required: "Card number is required",
//                     minLength: {
//                       value: 19,
//                       message: "Card number must be 19 digits",
//                     },
//                     maxLength: {
//                       value: 19,
//                       message: "Card number must be 19 digits",
//                     },
//                   })}
//                 />
//                 {errors.cardNum && (
//                   <p className="error">{errors.cardNum.message}</p>
//                 )}
//               </div>

//               <div className="form-data">
//                 <label htmlFor="exp-date">Expiration Date</label>
//                 <input
//                   type="text"
//                   name="exp-date"
//                   placeholder="Expiration Date"
//                   maxLength={5}
//                   id="exp-date"
//                   {...register("expDate", {
//                     required: "Expiration date is required",
//                     pattern: {
//                     //   value: /^(0[1-9]|1[0-2])/d{2}$,
//                       message: "Enter a valid expiration date (MM/YY)",
//                     },
//                   })}
//                 />
//                 {errors.expDate && (
//                   <p className="error">{errors.expDate.message}</p>
//                 )}
//               </div>

//               <button type="submit">Submit</button>
//             </form>
//           </div>

//           <SweetAlert
//             success
//             show={showAlert}
//             title="Success!"
//             onConfirm={hideAlert}
//           ></SweetAlert>

//           <div className="checkout-payload">
//             {cart.map((product) => (
//               <div key={`${product.id}-${product.selectedSize}`}>
//                 <div className="left-1">
//                   <div className="left">
//                     <div className="img-container">
//                       <img
//                         src={formatImgUrl(product.productImage[0])}
//                         alt={product.title}
//                       />
//                       <span>{product.quantity}</span>
//                     </div>
//                     <div className="content">
//                       <h3>{product.title}</h3>
//                       <p>{product.selectedSize}</p>
//                     </div>
//                   </div>
//                   <div className="price">
//                     <p>{`${product.price}.00`}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//             <hr className="line" />
//             <div className="total-price">
//               <h2>Total</h2>
//               <h2>${total}.00</h2>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CheckoutPage;
