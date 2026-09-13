import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="text-center py-5">
      <h1 className="display-4">Welcome to Online BookStore</h1>
      <p className="lead">Discover your next favorite read from our extensive catalogue.</p>
      <Link to="/catalogue" className="btn btn-primary btn-lg mt-3">Browse Catalogue</Link>
    </div>
  );
}

export default Home;