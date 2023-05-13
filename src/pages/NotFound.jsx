import React from 'react';
import { Container } from 'react-bootstrap';
import error from '../assets/error.svg'
import './css/NotFound.css'
const NotFoundPage = () => {
  return (
    <div className="not-found-page">
      <Container>
        <h4 className="text-center">PAGE NOT FOUND!</h4>
        <div className="text-center">
          <img
            src={error}
            alt="404 Not Found"
            className="img-fluid"
            style={{ maxWidth: '50%', height: 'auto' }}
          />
        </div>
      </Container>
    </div>
  );
};

export default NotFoundPage;

