import React from 'react';
import error from '../assets/error.gif'
const NotFoundPage = () => {
  return (
    <div className="not-found-page">
      <h1>404 Not Found</h1>
      <img src= {error} alt="404 Not Found" />
    </div>
  );
};

export default NotFoundPage;
