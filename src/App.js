// src/App.js
import React, { useState } from 'react';
import PropertyList from './components/PropertyList';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Navbar from './components/Navbar';
import './App.css';

const App = () => {
  const [cart, setCart] = useState([]);

  const handleBook = (property) => {
    const existingBooking = cart.find((item) => item.id === property.id);
    if (existingBooking) {
      setCart(cart.map((item) =>
        item.id === property.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCart([...cart, { ...property, quantity: 1 }]);
    }
  };

  const handleRemove = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const handleIncrease = (id) => {
    setCart(cart.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const handleDecrease = (id) => {
    const item = cart.find((item) => item.id === id);
    if (item.quantity === 1) {
      handleRemove(id);
    } else {
      setCart(cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      ));
    }
  };

  return (
    <div className="App">
      <Navbar />
      <PropertyList onBook={handleBook} />
      <Cart
        bookings={cart}
        onRemove={handleRemove}
        onIncrease={handleIncrease}
        onDecrease={handleDecrease}
      />
      {cart.length > 0 && <Checkout bookings={cart} />}
    </div>
  );
};

export default App;
