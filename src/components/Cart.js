import React from 'react';
import { Typography, Button, Grid } from '@mui/material';

function Cart({ cart, onRemove }) {
  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div>
      <Typography variant="h4" gutterBottom>Cart</Typography>
      {cart.length === 0 ? (
        <Typography>No properties booked.</Typography>
      ) : (
        <div>
          {cart.map((item, index) => (
            <Grid container key={index} alignItems="center" justify="space-between">
              <Typography>{item.title}</Typography>
              <Typography>${item.price}</Typography>
              <Button variant="contained" color="secondary" onClick={() => onRemove(item.id)}>
                Remove
              </Button>
            </Grid>
          ))}
          <Typography variant="h6">Total: ${total}</Typography>
        </div>
      )}
    </div>
  );
}

export default Cart;
