import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './css/Contact.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form validation and submit logic
    if (name && email && message) {
      // Display success toast notification
      toast.success('Message sent successfully!', { autoClose: 3000 });
      // Reset form fields
      setName('');
      setEmail('');
      setMessage('');
    } else {
      // Display error toast notification
      toast.error('Please fill in all fields.', { autoClose: 3000 });
    }
  };

  return (
    <div className="contact-page">
      <div className="hero-image">
        {/* Hero Image */}
      </div>
      <Container>
        <Row>
          <Col md={12}>
            <h1 className="text-center font-weight-bold">Contact Us</h1>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <h2>Chat With Us </h2>
            <p>If you have any questions or inquiries, please feel free to reach out to us.</p>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="5"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </Col>
          <Col md={6}>
            <h2>Our Location</h2>
            <p>Physical Address: NEXT TO KISUMU CENTRAL CDF OFFICE, Omollo Agar Road</p>
            <div className="embed-responsive embed-responsive-16by9">
              <iframe
                className="embed-responsive-item"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.6613008124236!2d-122.41941501477076!3d37.77492977426761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7e
                691e4c924b%3A0x190361c07f675bf8!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1662143875723!5m2!1sen!2sus"
                allowFullScreen
                title="Google Map"
              ></iframe>
            </div>
          </Col>
        </Row>
      </Container>
      <ToastContainer />
    </div>
  );
};

export default ContactPage;
