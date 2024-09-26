import React from 'react';

const PropertyList = ({ onBook }) => {
  const properties = [
    {
      id: 1,
      title: "Modern Apartment in City Center",
      description: "A stylish apartment in the heart of the city.",
      price: 120,
      location: "New York",
      bedrooms: 2,
      amenities: "Wi-Fi, Kitchen, Heating",
      image: "https://source.unsplash.com/800x600/?apartment,modern"
    },
    {
      id: 2,
      title: "Cozy Cabin in the Woods",
      description: "A peaceful retreat surrounded by nature.",
      price: 90,
      location: "Colorado",
      bedrooms: 3,
      amenities: "Fireplace, Parking, Pet Friendly",
      image: "https://source.unsplash.com/800x600/?cabin"
    },
    {
      id: 3,
      title: "Luxury Villa with Ocean View",
      description: "A luxury villa with breathtaking ocean views.",
      price: 300,
      location: "California",
      bedrooms: 5,
      amenities: "Pool, Garage, Ocean View",
      image: "https://source.unsplash.com/800x600/?villa,luxury"
    }
  ];

  return (
    <div className="property-list">
      {properties.map((property) => (
        <div key={property.id} className="property-item">
          <img src={property.image} alt={property.title} />
          <h2>{property.title}</h2>
          <p>{property.description}</p>
          <p><strong>Location:</strong> {property.location}</p>
          <p><strong>Bedrooms:</strong> {property.bedrooms}</p>
          <p><strong>Amenities:</strong> {property.amenities}</p>
          <p><strong>Price:</strong> ${property.price} per night</p>
          <button onClick={() => onBook(property)}>Book Now</button>
        </div>
      ))}
    </div>
  );
};

export default PropertyList;
