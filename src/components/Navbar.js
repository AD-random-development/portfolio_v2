import React from 'react';
import { NavLink } from 'react-router-dom';

import image from '../utils/image.jpg';
import './css/navbar.css';

export default () => (
  <div className="left_item_container animated slideInLeft">
    <h1 className="author">Avinash Dhillor</h1>
    <div className="profile__picture">
      <img src={image} alt="Avinash dhillor" />
    </div>

    <div className="social__icons">
      <a
        className="social__links"
        href="https://www.facebook.com/avinashdhillor01"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2>
          <i class="fab fa-facebook-square" />
        </h2>
      </a>
      <a
        className="social__links"
        href="https://github.com/AvinashDhillor"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2>
          <i class="fab fa-github-square" />
        </h2>
      </a>
      <a
        className="social__links"
        href="https://www.linkedin.com/in/avinashdhillor"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2>
          <i class="fab fa-linkedin" />
        </h2>
      </a>
      <a
        className="social__links"
        href="https://discord.gg/W8UQdDf"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2>
          <i class="fab fa-discord" />
        </h2>
      </a>
    </div>

    <NavLink
      className="nav_links"
      to="/"
      exact={true}
      activeClassName="is-active"
    >
      <h2>
        <i class="fas fa-home" />
        Home
      </h2>
    </NavLink>
    <NavLink className="nav_links" to="/skills" activeClassName="is-active">
      <h2>
        <i class="fas fa-dna" />
        Skills
      </h2>
    </NavLink>
    <NavLink className="nav_links" to="/resume" activeClassName="is-active">
      <h2>
        <i class="fas fa-file" />
        Resume
      </h2>
    </NavLink>
    <NavLink className="nav_links" to="/projects" activeClassName="is-active">
      <h2>
        <i class="fas fa-project-diagram" />
        Projects
      </h2>
    </NavLink>
    <NavLink className="nav_links" to="/aboutme" activeClassName="is-active">
      <h2>
        <i class="fas fa-male" />
        About me{' '}
      </h2>
    </NavLink>
  </div>
);
