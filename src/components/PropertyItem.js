// src/components/PropertyItem.js
import React from 'react';

const PropertyItem = ({ property, onBook }) => {
  return (
    <div className="property-item">
      <img src={property.image} alt={property.title} />
      <h3>{property.title}</h3>
      <p>{property.description}</p>
      <p><strong>Price:</strong> ${property.price} per night</p>
      <button onClick={() => onBook(property)}>Book Now</button>
    </div>
  );
};

export default PropertyItem;
