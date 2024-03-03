import React from "react";
import { Routes, Route } from "react-router-dom";

//Components
import Header from "./components/Header";
import Footer from "./components/Footer";

//Pages
import Home from "./pages/Home";
import { ShopAll } from "./pages/ShopAll";
// import {CheckoutPage} from "./pages/sections/CheckoutPage";
import { Faq } from "./pages/Faq";
import { Login } from "./pages/Login";
import { SingleProduct } from "./pages/SingleProduct";
import CardPay from "./pages/CardPay";
//Context
import { CartProvider } from "./pages/CartContext";
import NotFound from "./components/NotFound";


const App = () => {
  
 
  return (
    <CartProvider>
      <div>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<ShopAll />} />
        
          <Route path="/cart-pay" element={<CardPay />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/checkoutPage" element={<CheckoutPage />} /> */}

          <Route path="/products/:id" element={<SingleProduct />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </div>
    </CartProvider>
  );
};

export default App;
