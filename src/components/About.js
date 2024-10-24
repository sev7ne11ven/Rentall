import React from 'react';
import './About.css'; // Import a CSS file for custom styles

const About = () => {
  return (
    <div className="about">
      <h2>About Us</h2>
      <p>
        At Rentall, we believe in making renting easier and more accessible for everyone. Our platform connects people who need items with those who have them to rent, creating a community-driven marketplace for sharing resources.
      </p>
      
      <h3>Our Mission</h3>
      <p>
        Our mission is to provide a seamless rental experience, enabling our customers to access high-quality items at affordable prices while promoting sustainability through sharing.
      </p>

      <h3>Our History</h3>
      <p>
        Founded in 2024, Rentall started as a small community initiative aimed at helping people borrow and lend everyday items. Since then, we have grown into a comprehensive rental platform, serving thousands of customers across the region.
      </p>

      <h3>Meet Our Team</h3>
      <div className="team-grid">
        <div className="team-member">
          <h4>Chris Shukla</h4>
          <p>Co-Founder & CEO</p>
          <p>Chris has over a year of research experience in the rental industry and is passionate about making renting accessible to everyone.</p>
        </div>
        <div className="team-member">
          <h4>Aditya Vanjari</h4>
          <p>Co-Founder & COO</p>
          <p>With a background in operations, Aditya ensures that our platform runs smoothly and efficiently.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
