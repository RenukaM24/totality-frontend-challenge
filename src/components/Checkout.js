// src/components/Checkout.js
import React, { useState } from 'react';

const Checkout = ({ bookings }) => {
  const [contactInfo, setContactInfo] = useState({
    name: '',
    email: '',
    paymentDetails: '',
  });

  const totalCost = bookings.reduce((acc, booking) => acc + booking.price * booking.quantity, 0);

  const handleChange = (e) => {
    setContactInfo({ ...contactInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Booking successful for ${contactInfo.name}! Total Cost: $${totalCost}`);
  };

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={contactInfo.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={contactInfo.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="paymentDetails"
          placeholder="Payment Details"
          value={contactInfo.paymentDetails}
          onChange={handleChange}
          required
        />
        <button type="submit">Confirm Booking</button>
      </form>
    </div>
  );
};

export default Checkout;
