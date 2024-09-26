import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';

function Navbar() {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Property Rental Platform
        </Typography>
        <Box>
          <Button color="inherit" href="/">Home</Button>
          <Button color="inherit" href="/properties">Properties</Button>
          <Button color="inherit" href="/cart">Cart</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
