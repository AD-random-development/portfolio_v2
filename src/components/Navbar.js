import React from 'react';
import { Link, NavLink } from 'react-router-dom';

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
