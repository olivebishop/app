import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './css/Training.css';
import team1 from '../assets/team1.jpg';
import team2 from '../assets/team2.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Training = () => {
  // Initialize AOS library
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="training-section">
      <Container>
        <h1 className="training-title" data-aos="fade-right" data-aos-delay="200">
          Training Team
        </h1>
        <Row>
          <Col md={6} data-aos="zoom-out" data-aos-delay="300">
            <div className="training-member">
              <img src={team1} alt="Training Member 1" className="training-image" />
              <div className="overlay"></div>
            </div>
          </Col>
          <Col md={6} data-aos="zoom-out" data-aos-delay="300">
            <div className="training-member">
              <img src={team2} alt="Training Member 2" className="training-image" />
              <div className="overlay"></div>
            </div>
          </Col>
        </Row>
        <p className="training-paragraph" data-aos="fade-up" data-aos-delay="400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sagittis maximus tortor vitae eleifend. Ut sed elit
          sit amet ex luctus ultricies a vitae nunc. Quisque ut bibendum nunc, at pulvinar enim. Sed viverra turpis id
          convallis finibus.
        </p>
      </Container>
    </div>
  );
};

export default Training;
