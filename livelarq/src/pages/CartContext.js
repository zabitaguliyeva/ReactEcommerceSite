import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    productData();
  }, []);

  const productData = async () => {
    await axios
      .get("http://localhost:5000/api/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const [cart, setCart] = useState(() => {
    // Load cart data from local storage, or initialize to an empty array
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  // Function to update the cart in both state and local storage
  const updateCart = (newCart) => {
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const addToCart = (id) => {
    const findExistingProduct = cart.find((product) => product.id === id);
    const findIncomingProduct = products.find((product) => product.id === id);

    if (findExistingProduct) {
      const updateProductQuantity = cart.map((product) =>
        product.id === id ? { ...product, quantity: product.quantity + 1 } : product
      );
      updateCart(updateProductQuantity);
    } else {
      updateCart([...cart, { ...findIncomingProduct, quantity: 1 }]);
    }
  };

  const decreaseQuantity = (id) => {
    const findExistingProduct = cart.find((product) => product.id === id);
    if (findExistingProduct) {
      // Calculate the new quantity
      const newQuantity = Math.max(findExistingProduct.quantity - 1, 1);

      const updateProductQuantity = cart.map((product) =>
        product.id === id ? { ...product, quantity: newQuantity } : product
      );

      updateCart(updateProductQuantity);
    }
  };

  const removeFromCart = (id) => {
    const filteredProducts = cart.filter((product) => product.id !== id);
    updateCart(filteredProducts);
  };

  return (
    <CartContext.Provider
      value={{ products, cart, setCart, removeFromCart, addToCart, decreaseQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};
