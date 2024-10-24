import React from 'react';
import './Services.css'; // Import a CSS file for custom styles

const Services = () => {
  const services = [
    {
      title: 'Item Rental',
      description: 'We offer a wide variety of rental items, from power tools to home entertainment systems. Our rental process is straightforward and hassle-free, ensuring you get the equipment you need when you need it.',
      image: 'https://www.booking-wp-plugin.com/wp-content/uploads/2020/01/Equipment-rental-services-guide.jpg', // Placeholder image URL
    },
    {
      title: 'Delivery & Pickup',
      description: 'Enjoy the convenience of delivery and pickup services right at your doorstep. Our reliable team will ensure that your items are delivered on time and picked up at your convenience.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDTNV1VNTKbJ-BwEmteX87zXTtJqIrFFRkGg&s',
    },
    {
      title: 'Customer Support',
      description: 'Our dedicated customer support team is here to assist you 24/7. Whether you have questions about your rental or need assistance with the website, we are always just a message away.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJjbA0pm_4Ua-TIuVg_udUwWKAxvaEemz1rA&s',
    },
    {
      title: 'Flexible Rental Terms',
      description: 'We understand that plans can change. That’s why we offer flexible rental terms that can be adjusted to fit your schedule. Rent items for days, weeks, or even months based on your needs.',
      image: 'https://cdn-icons-png.flaticon.com/512/8759/8759216.png',
    },
  ];

  return (
    <div className="services">
      <h2>Our Services</h2>
      <p>At Rentall, we provide a range of services to ensure your rental experience is smooth and enjoyable. Here’s what we offer:</p>
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <img src={service.image} alt={service.title} className="service-image" />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
