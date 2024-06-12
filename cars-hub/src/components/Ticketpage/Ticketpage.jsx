import React from 'react';
import { useLocation } from 'react-router-dom';

const TicketPage = () => {
  const location = useLocation();
  const { cartItems, userDetails } = location.state || { cartItems: [], userDetails: {} };

  return (
    <div className="bg-gray-100 h-screen py-8">
      <div className="container mx-auto md:px-4">
        <h1 className="text-2xl font-semibold mb-4">Ticket</h1>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-semibold mb-4">User Details</h2>
          <p>Name: {userDetails.firstName} {userDetails.lastName}</p>
          <p>Email: {userDetails.email}</p>
          <p>Address: {userDetails.streetAddress}, {userDetails.city}, {userDetails.state}, {userDetails.zipCode}, {userDetails.country}</p>
          <h2 className="text-lg font-semibold mt-6 mb-4">Car Details</h2>
          {cartItems.map(item => (
            <div key={item.id} className="mb-4">
              <p>Car: {item.name}</p>
              <p>Price: {item.price}</p>
              {/* Ensure that the image URL is correctly displayed */}
              <img className="h-40 rounded-md" src={item.image} alt={item.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TicketPage;
