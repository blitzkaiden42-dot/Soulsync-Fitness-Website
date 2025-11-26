import React from "react";
import "../App.css";

const Contact = () => {
  return (
    <div className="contact-hero">
      <div className="contact-wrapper">
        <div className="contact-left">
          <h1 className="contact-main-title">
            LET’S <span className="highlight">CONNECT</span>
          </h1>
          <p className="contact-description">
            Have questions about your fitness journey?  
            Want program details or gym information?  
            <br /><br />
            Reach out to us — we’re here to support your growth and strength.
          </p>

          
          <div className="contact-info">
            <p><strong>📞 Phone:</strong> 0991-234-5678</p>
            <p><strong>📩 Email / Page:</strong> fit-explore@gmail.com</p>
            <p><strong>📍 Location:</strong> Garcia College Of Tehnology</p>
          </div>
        </div>

       
        <div className="contact-form-card">
          <h2 className="form-title">Send Us a Message</h2>

          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Write your message..." required></textarea>

            <button className="send-btn">SEND MESSAGE</button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Contact;
