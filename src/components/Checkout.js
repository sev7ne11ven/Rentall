import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Checkout = ({ cart }) => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const navigate = useNavigate();

  const handleCheckout = (e) => {
    e.preventDefault();
    // Simulate payment and order success
    alert('Order placed successfully!');
    navigate('/success');  // Navigate to success page after checkout
  };

  // Ensure each item price is treated as a number
  const totalPrice = cart.reduce((total, item) => total + Number(item.price), 0);

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <h3>Order Summary</h3>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} - ${Number(item.price).toFixed(2)}
          </li>
        ))}
      </ul>
      <h3>Total: ${totalPrice.toFixed(2)}</h3> {/* Use toFixed on a valid number */}

      <form onSubmit={handleCheckout}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Address:</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Card Number:</label>
          <input
            type="text"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            required
          />
        </div>
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default Checkout;
