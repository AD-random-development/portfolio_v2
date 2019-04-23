import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <div>
    <h1>Avinash Dhillor</h1>
    <Link to="/">
      <h1>Home</h1>
    </Link>
    <Link to="/skills">
      <h1>Skills</h1>
    </Link>
    <Link to="/resume">
      <h1>Resume</h1>
    </Link>
    <Link to="/projects">
      <h1>Projects</h1>
    </Link>
    <Link to="/aboutme">
      <h1>About me </h1>
    </Link>
  </div>
);
