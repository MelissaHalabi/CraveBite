
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Restaurants from "./pages/Restaurants";
import Menu from "./pages/Menu";
import Cart from "./pages/Cart";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {

  const [cart, setCart] = useState([]);

  // Add to Cart Function
  function addToCart(item, restaurantId) {

    const existingItem = cart.find(
      (cartItem) =>
        cartItem.id === item.id &&
        cartItem.restaurantId === restaurantId
    );

    if (existingItem) {

      const updatedCart = cart.map((cartItem) => {

        if (
          cartItem.id === item.id &&
          cartItem.restaurantId === restaurantId
        ) {
          return {
            ...cartItem,
            quantity: cartItem.quantity + 1
          };
        }

        return cartItem;
      });

      setCart(updatedCart);

    } else {

      setCart([
        ...cart,
        {
          ...item,
          restaurantId: restaurantId,
          quantity: 1
        }
      ]);

    }
  }

  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/restaurants" element={<Restaurants />} />

        <Route
          path="/menu/:id"
          element={<Menu addToCart={addToCart} />}
        />

        <Route
          path="/cart"
          element={<Cart cart={cart} setCart={setCart} />}
        />

        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />

      </Routes>
 <Footer/>
    </BrowserRouter>
   
  );
}

export default App;

