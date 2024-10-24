import React from 'react';

const ItemList = ({ items, addToCart }) => {
  return (
    <div className="item-list">
      {items.length === 0 ? (
        <p>No items available.</p>
      ) : (
        items.map((item) => (
          <div key={item.id} className="item">
            <h3>{item.name}</h3>
            <img src={item.image} alt={item.name} style={{ width: '150px', height: 'auto' }} />
            <p>Price: ${item.price}</p>
            <p>Email: {item.email}</p>
            <p>Phone: {item.phone}</p>
            <p>Location: {item.location}</p> {/* Display location here */}
            <button onClick={() => addToCart(item)}>Add to Cart</button>
          </div>
        ))
      )}
    </div>
  );
};

export default ItemList;
