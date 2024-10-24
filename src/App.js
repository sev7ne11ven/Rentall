import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ItemList from './components/ItemList';
import ItemForm from './components/ItemForm';
import Filter from './components/Filter';
import { itemsData } from './data';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import Services from './components/Services';
import Cart from './components/Cart';
import Checkout from './components/Checkout'; // Import Checkout component
import Success from './components/Success'; // Import Success component

const App = () => {
  const [items, setItems] = useState(itemsData);
  const [filterText, setFilterText] = useState('');
  const [cart, setCart] = useState([]);
  const [notification, setNotification] = useState(''); // Notification state

  const addItem = (item) => {
    setItems([...items, { id: items.length + 1, ...item }]);
  };

  const addToCart = (item) => {
    setCart([...cart, item]);
    setNotification(`"${item.name}" has been added to the cart!`); // Set notification message

    // Clear notification after 3 seconds
    setTimeout(() => {
      setNotification('');
    }, 3000);
  };

  const removeFromCart = (itemToRemove) => {
    setCart(cart.filter((item) => item.id !== itemToRemove.id));
  };

  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <Router>
      <div className="App">
        <Navbar cartCount={cart.length} />
        {notification && <div className="notification">{notification}</div>} {/* Display notification */}
        <Routes>
          <Route path="/" element={
            <>
              <h1>Welcome to Rentall</h1>
              <ItemForm addItem={addItem} />
              <Filter filterText={filterText} setFilterText={setFilterText} />
              <ItemList items={filteredItems} addToCart={addToCart} />
            </>
          } />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} />} />
          <Route path="/checkout" element={<Checkout cart={cart} />} /> {/* Add Checkout route */}
          <Route path="/success" element={<Success />} /> {/* Add Success route */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
