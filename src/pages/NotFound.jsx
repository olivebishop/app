import React from 'react';
import { Container } from 'react-bootstrap';
import error from '../assets/error.gif'
const NotFoundPage = () => {
  return (
    <div className="not-found-page">
      <Container>
        <h1 className="text-center">404 Not Found</h1>
        <div className="text-center">
          <img
            src={error}
            alt="404 Not Found"
            className="img-fluid"
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </div>
      </Container>
    </div>
  );
};

export default NotFoundPage;

