import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (form.name === '' || form.email === '' || form.message === '') {
      alert('Please fill all fields');
      return;
    }
    setSubmitted(true);
  }

  return (
    <div className="contact-page">

      <h2>Contact Us</h2>

      <div className="contact-wrapper">

        <div className="contact-info">
          <h3>Get in Touch</h3>
          <p>📍 Taalabaya, Lebanon</p>
<p>📞 +961 70 058 532</p>
<p>✉️ 22230759@student.liu.edu.lb</p>
        </div>

        <div className="contact-form">
          {submitted ? (
            <div className="success-msg">
              <h3>Thank you, {form.name}!</h3>
              <p>Your message has been sent. We will get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <label>Your Name:</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your name"
              />

              <label>Email Address:</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email"
              />

              <label>Message:</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows="5"
                placeholder="Write your message here..."
              />

              <button type="submit">Send Message</button>
            </form>
          )}
        </div>

      </div>

    </div>
  );
}

export default Contact;