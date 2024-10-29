import React from 'react';
import { useLocation } from 'react-router-dom';

const TicketPage = () => {
  const location = useLocation();
  console.log('Location state:', location.state); // Log the location state to check if cartItems are present
  const cartItems = location.state ? location.state.cartItems : []; // Ensure cartItems is not null

  return (
    <div>
      <h1>Ticket</h1>
      {/* Display ticket information */}
      {cartItems.length > 0 && ( // Checking if cartItems exists and is not empty
        <ul>
          {cartItems.map(item => ( // Iterating over cartItems
            <li key={item.id}>
              <p>{item.name}</p> {/* Displaying item name */}
              {/* Display other item details */}
            </li>
          ))}
        </ul>
      )}
      {cartItems.length === 0 && <p>No items in cart</p>} {/* Display message if cart is empty */}
    </div>
  );
};

export default TicketPage;
