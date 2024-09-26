import React, { useState } from 'react';
import { TextField, Button, Typography } from '@mui/material';

function Checkout({ total, onCheckout }) {
  const [details, setDetails] = useState({
    name: '',
    email: '',
    paymentInfo: '',
  });

  const handleChange = (e) => {
    setDetails({
      ...details,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    onCheckout();
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>Checkout</Typography>
      <form>
        <TextField
          label="Name"
          name="name"
          value={details.name}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Email"
          name="email"
          value={details.email}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Payment Information"
          name="paymentInfo"
          value={details.paymentInfo}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <Typography variant="h6">Total: ${total}</Typography>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Complete Checkout
        </Button>
      </form>
    </div>
  );
}

export default Checkout;
