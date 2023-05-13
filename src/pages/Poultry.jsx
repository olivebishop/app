import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './css/Poultry.css';
import poultry1 from '../assets/poultry1.jpg';
import poultry2 from '../assets/poultry2.jpg';
import poultry3 from '../assets/poultry3.jpg';
import poultry4 from '../assets/poultry4.jpg';
import poultry5 from '../assets/poultry5.jpg';
import poultry6 from '../assets/poultry6.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Poultry = () => {
  // Initialize AOS library
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="poultry-section">
      <Container>
        <h1 className="poultry-title" data-aos="fade-right" data-aos-delay="200">
          Poultry
        </h1>
        <Row>
          <Col md={4} sm={6} data-aos="zoom-out" data-aos-delay="300">
            <div className="poultry-item">
              <img src={poultry1} alt="Poultry Image 1" className="poultry-image" />
              <div className="overlay"></div>
            </div>
          </Col>
          <Col md={4} sm={6} data-aos="zoom-out" data-aos-delay="400">
            <div className="poultry-item">
              <img src={poultry2} alt="Poultry Image 2" className="poultry-image" />
              <div className="overlay"></div>
            </div>
          </Col>
          <Col md={4} sm={6} data-aos="zoom-out" data-aos-delay="500">
            <div className="poultry-item">
              <img src={poultry3} alt="Poultry Image 3" className="poultry-image" />
              <div className="overlay"></div>
            </div>
          </Col>
          <Col md={4} sm={6} data-aos="zoom-out" data-aos-delay="300">
            <div className="poultry-item">
              <img src={poultry4} alt="Poultry Image 4" className="poultry-image" />
              <div className="overlay"></div>
            </div>
          </Col>
          <Col md={4} sm={6} data-aos="zoom-out" data-aos-delay="400">
            <div className="poultry-item">
              <img src={poultry5} alt="Poultry Image 5" className="poultry-image" />
              <div className="overlay"></div>
            </div>
          </Col>
          <Col md={4} sm={6} data-aos="zoom-out" data-aos-delay="500">
            <div className="poultry-item">
              <img src={poultry6} alt="Poultry Image 6" className="poultry-image" />
              <div className="overlay"></div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Poultry;
