// src/components/Cart.js
import React from 'react';

const Cart = ({ bookings, onRemove, onIncrease, onDecrease }) => {
  const totalCost = bookings.reduce((acc, booking) => acc + booking.price * booking.quantity, 0);

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {bookings.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        bookings.map((booking) => (
          <div key={booking.id} className="cart-item">
            <h4>{booking.title}</h4>
            <p>${booking.price} per night</p>
            <p>Quantity: {booking.quantity}</p>
            <button onClick={() => onIncrease(booking.id)}>+</button>
            <button onClick={() => onDecrease(booking.id)}>-</button>
            <button onClick={() => onRemove(booking.id)}>Remove</button>
          </div>
        ))
      )}
      <h3>Total Cost: ${totalCost}</h3>
    </div>
  );
};

export default Cart;
