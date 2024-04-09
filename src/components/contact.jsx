import React from 'react';
import "./contact.css";
const ContactPage = () => {
  return (
    <div className="contact-container">
      <h1 className='heading'>Contact Us</h1>
      <p className='para'>If you have any questions or concerns, feel free to reach out to us.</p>

      {/* Contact Form */}
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows="4" required></textarea>

        <button type="submit">Submit</button>
      </form>

      {/* Contact Details */}
      <div className="contact-details">
        <h2>Our Contact Information</h2>
        <p>Email: <a href="joycesmithapereira001@gmail.com">joycesmithapereira001@gmail.com</a></p>
        <p>Phone: <a href="tel:+917349756316">7349756316</a></p>
      </div>

      {/* Map */}
      <div className="map-container">
        {/* Your map integration code goes here */}
        {/* You can use Google Maps API or another map library */}
        {/* For simplicity, a placeholder div is used */}
        <div className="map-placeholder">Map Placeholder</div>
      </div>
    </div>
  );
};

export default ContactPage;
