import React from 'react';
import { Link } from 'react-router-dom';

const Success = () => {
  return (
    <div className="success">
      <h2>Order Successful!</h2>
      <p>Your order has been placed. Thank you for shopping with Rentall!</p>
      <Link to="/">Return to Home</Link>
    </div>
  );
};

export default Success;
