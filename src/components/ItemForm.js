import React, { useState } from 'react';

const ItemForm = ({ addItem }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');  // New location state
  const [image, setImage] = useState(null);  // State for image file

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && price && email && phone && location && image) {
      const itemData = {
        name,
        price,
        email,
        phone,
        location,  // Include location in item data
        image: URL.createObjectURL(image), // Create a local URL for the image
      };
      addItem(itemData);
      setName('');
      setPrice('');
      setEmail('');
      setPhone('');
      setLocation('');  // Reset location
      setImage(null);  // Reset image
    } else {
      alert('Please fill in all fields.'); // Alert if any fields are empty
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Item Name" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        required 
      />
      <input 
        type="number" 
        placeholder="Price" 
        value={price} 
        onChange={(e) => setPrice(e.target.value)} 
        required 
      />
      <input 
        type="email" 
        placeholder="Email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        required 
      />
      <input 
        type="tel" 
        placeholder="Phone Number" 
        value={phone} 
        onChange={(e) => setPhone(e.target.value)} 
        required 
      />
      <input 
        type="text" 
        placeholder="Location"  // New location input field
        value={location} 
        onChange={(e) => setLocation(e.target.value)} 
        required 
      />
      <input 
        type="file" 
        accept="image/*" 
        onChange={(e) => setImage(e.target.files[0])} // Set the image state
        required 
      />
      {image && (
        <div>
          <img 
            src={URL.createObjectURL(image)} 
            alt="Preview" 
            style={{ width: '100px', height: 'auto', marginTop: '10px' }} // Preview image
          />
        </div>
      )}
      <button type="submit">Add Item</button>
    </form>
  );
};

export default ItemForm;
