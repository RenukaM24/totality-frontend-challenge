import React from 'react';
import { Grid } from '@mui/material';
import PropertyCard from './PropertyCard';

// Updated properties list with more items
const properties = [
  {
    id: 1,
    title: "Modern Apartment",
    description: "A stylish apartment in the heart of the city.",
    price: 120,
    image: "https://source.unsplash.com/800x600/?apartment,modern",
  },
  {
    id: 2,
    title: "Cozy Cabin",
    description: "A peaceful retreat surrounded by nature.",
    price: 90,
    image: "https://source.unsplash.com/800x600/?cabin",
  },
  {
    id: 3,
    title: "Luxury Villa",
    description: "A luxury villa with stunning sea views.",
    price: 300,
    image: "https://source.unsplash.com/800x600/?villa,luxury",
  },
  {
    id: 4,
    title: "Charming Bungalow",
    description: "A charming bungalow perfect for a family getaway.",
    price: 150,
    image: "https://source.unsplash.com/800x600/?bungalow",
  },
  {
    id: 5,
    title: "Urban Loft",
    description: "An urban loft located in the city center.",
    price: 200,
    image: "https://source.unsplash.com/800x600/?loft,urban",
  },
  {
    id: 6,
    title: "Beachfront Property",
    description: "A beautiful property right on the beach.",
    price: 250,
    image: "https://source.unsplash.com/800x600/?beach,property",
  },
  {
    id: 7,
    title: "Country House",
    description: "A peaceful country house surrounded by fields.",
    price: 110,
    image: "https://source.unsplash.com/800x600/?country,house",
  },
  {
    id: 8,
    title: "Penthouse Suite",
    description: "A penthouse suite with breathtaking views.",
    price: 400,
    image: "https://source.unsplash.com/800x600/?penthouse",
  },
  {
    id: 9,
    title: "Ski Resort Cabin",
    description: "A cozy cabin located near ski slopes.",
    price: 180,
    image: "https://source.unsplash.com/800x600/?ski,resort",
  },
];

function PropertyList({ onBook }) {
  return (
    <Grid container spacing={2} sx={{ padding: 2 }}>
      {properties.map((property) => (
        <Grid item xs={12} sm={6} md={4} key={property.id}>
          <PropertyCard property={property} onBook={onBook} />
        </Grid>
      ))}
    </Grid>
  );
}

export default PropertyList;
