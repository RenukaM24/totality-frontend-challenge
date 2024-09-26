import React, { useState } from 'react';
import Navbar from './components/Navbar';
import PropertyList from './components/PropertyList';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import { Container, Grid, Button } from '@mui/material';
import './App.css';

function App() {
  const [cart, setCart] = useState([]);
  const [showCheckout, setShowCheckout] = useState(false);

  const handleBookProperty = (property) => {
    setCart([...cart, property]);
  };

  const handleRemoveProperty = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const handleCheckout = () => {
    setShowCheckout(true);
  };

  const handleCompleteCheckout = () => {
    alert('Checkout complete!');
    setCart([]);
    setShowCheckout(false);
  };

  return (
    <div>
      <Navbar />
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <PropertyList onBook={handleBookProperty} />
          </Grid>
          <Grid item xs={12} md={4}>
            <Cart cart={cart} onRemove={handleRemoveProperty} />
            {cart.length > 0 && (
              <Button variant="contained" color="primary" onClick={handleCheckout}>
                Proceed to Checkout
              </Button>
            )}
            {showCheckout && (
              <Checkout total={cart.reduce((acc, item) => acc + item.price, 0)} onCheckout={handleCompleteCheckout} />
            )}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
