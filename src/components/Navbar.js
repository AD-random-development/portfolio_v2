import React from 'react';
import { Link } from 'react-router-dom';

import image from '../utils/image.jpg';
import './css/navbar.css';

export default () => (
  <div className="left_item_container animated slideInLeft">
    <h1 className="author">Avinash Dhillor</h1>
    <div className="profile__picture">
      <img src={image} alt="Avinash dhillor" />
    </div>

    <div className="social__icons">
      <Link className="social__links" to="/">
        <h2>
          <i class="fab fa-facebook-square" />
        </h2>
      </Link>
      <Link className="social__links" to="/">
        <h2>
          <i class="fab fa-github-square" />
        </h2>
      </Link>
      <Link className="social__links" to="/">
        <h2>
          <i class="fab fa-linkedin" />
        </h2>
      </Link>
      <Link className="social__links" to="/">
        <h2>
          <i class="fab fa-discord" />
        </h2>
      </Link>
    </div>

    <Link className="nav_links" to="/">
      <h2>
        <i class="fas fa-home" />
        Home
      </h2>
    </Link>
    <Link className="nav_links" to="/skills">
      <h2>
        <i class="fas fa-dna" />
        Skills
      </h2>
    </Link>
    <Link className="nav_links" to="/resume">
      <h2>
        <i class="fas fa-file" />
        Resume
      </h2>
    </Link>
    <Link className="nav_links" to="/projects">
      <h2>
        <i class="fas fa-project-diagram" />
        Projects
      </h2>
    </Link>
    <Link className="nav_links" to="/aboutme">
      <h2>
        <i class="fas fa-male" />
        About me{' '}
      </h2>
    </Link>
  </div>
);
