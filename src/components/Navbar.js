import React from 'react';
import { Link } from 'react-router-dom';

import image from '../utils/image.jpg';
import './css/navbar.css';

export default () => (
  <div className="left_item_container">
    <h1 className="author">Avinash Dhillor</h1>
    <div className="profile__picture">
      <img src={image} alt="Avinash dhillor" />
    </div>
    <Link className="nav_links" to="/">
      <h2>Home</h2>
    </Link>
    <Link className="nav_links" to="/skills">
      <h2>Skills</h2>
    </Link>
    <Link className="nav_links" to="/resume">
      <h2>Resume</h2>
    </Link>
    <Link className="nav_links" to="/projects">
      <h2>Projects</h2>
    </Link>
    <Link className="nav_links" to="/aboutme">
      <h2>About me </h2>
    </Link>
  </div>
);
