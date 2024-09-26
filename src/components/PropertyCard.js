import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';

function PropertyCard({ property, onBook }) {
  return (
    <Card className="card" sx={{ maxWidth: 345, margin: '20px' }}>
      <CardMedia
        component="img"
        height="140"
        image={property.image}
        alt={property.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {property.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {property.description}
        </Typography>
        <Typography variant="h6" color="text.primary">
          ${property.price} / night
        </Typography>
        <Button variant="contained" color="primary" onClick={() => onBook(property)}>
          Book Now
        </Button>
      </CardContent>
    </Card>
  );
}

export default PropertyCard;
