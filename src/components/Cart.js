import React from 'react';
import { Link } from 'react-router-dom';

const Cart = ({ cart, removeFromCart }) => {
  // Ensure price is a number when calculating total
  const totalPrice = cart.reduce((total, item) => total + parseFloat(item.price), 0).toFixed(2);

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                {item.name} - ${item.price}
                <button onClick={() => removeFromCart(item)}>Remove</button>
              </li>
            ))}
          </ul>
          <h3>Total Price: ${totalPrice}</h3>
          <Link to="/checkout">
            <button>Proceed to Checkout</button>
          </Link>
        </>
      )}
    </div>
  );
};

export default Cart;
