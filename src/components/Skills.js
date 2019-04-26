import React from 'react';

import './css/skills.css';
import html from '../utils/icons/html5.svg';
import css from '../utils/icons/css-5.svg';
import javascript from '../utils/icons/logo-javascript.svg';
import express from '../utils/icons/express-109.svg';
import mongodb from '../utils/icons/mongodb.svg';
import mongoose from '../utils/icons/mongoose-1.svg';
import node from '../utils/icons/nodejs-1.svg';
import react from '../utils/icons/react.svg';
import webpack from '../utils/icons/webpack-icon.svg';
import mocha from '../utils/icons/mocha-1.svg';
import github from '../utils/icons/github-2.svg';
import java from '../utils/icons/java.svg';

export default () => (
  <div className="right_item_container animated slideInRight">
    <figure class="chart" data-percent="75">
      <figcaption>HTML</figcaption>
      <img class="html" src={html} alt="html" />
      <svg width="200" height="200">
        <circle
          class="outer"
          cx="95"
          cy="95"
          r="85"
          transform="rotate(-90, 95, 95)"
        />
      </svg>
    </figure>

    <figure class="chart" data-percent="75">
      <figcaption>CSS</figcaption>
      <img class="css" src={css} alt="css" />
      <svg width="200" height="200">
        <circle
          class="outer"
          cx="95"
          cy="95"
          r="85"
          transform="rotate(-90, 95, 95)"
        />
      </svg>
    </figure>

    <figure class="chart" data-percent="75">
      <figcaption>Javascript</figcaption>
      <img class="javascript" src={javascript} alt="javascript" />
      <svg width="200" height="200">
        <circle
          class="outer"
          cx="95"
          cy="95"
          r="85"
          transform="rotate(-90, 95, 95)"
        />
      </svg>
    </figure>

    <figure class="chart" data-percent="75">
      <figcaption>Node</figcaption>
      <img class="node" src={node} alt="node" />
      <svg width="200" height="200">
        <circle
          class="outer"
          cx="95"
          cy="95"
          r="85"
          transform="rotate(-90, 95, 95)"
        />
      </svg>
    </figure>

    <figure class="chart" data-percent="75">
      <figcaption>Express</figcaption>
      <img class="express" src={express} alt="express" />
      <svg width="200" height="200">
        <circle
          class="outer"
          cx="95"
          cy="95"
          r="85"
          transform="rotate(-90, 95, 95)"
        />
      </svg>
    </figure>

    <figure class="chart" data-percent="75">
      <figcaption>Mongodb</figcaption>
      <img class="mongodb" src={mongodb} alt="mongodb" />
      <svg width="200" height="200">
        <circle
          class="outer"
          cx="95"
          cy="95"
          r="85"
          transform="rotate(-90, 95, 95)"
        />
      </svg>
    </figure>

    <figure class="chart" data-percent="75">
      <figcaption>Mongoose</figcaption>
      <img class="mongoose" src={mongoose} alt="mongoose" />
      <svg width="200" height="200">
        <circle
          class="outer"
          cx="95"
          cy="95"
          r="85"
          transform="rotate(-90, 95, 95)"
        />
      </svg>
    </figure>

    <figure class="chart" data-percent="75">
      <figcaption>React</figcaption>
      <img class="react" src={react} alt="react" />
      <svg width="200" height="200">
        <circle
          class="outer"
          cx="95"
          cy="95"
          r="85"
          transform="rotate(-90, 95, 95)"
        />
      </svg>
    </figure>

    <figure class="chart" data-percent="50">
      <figcaption>Webpack</figcaption>
      <img class="webpack" src={webpack} alt="webpack" />
      <svg width="200" height="200">
        <circle
          class="outer"
          cx="95"
          cy="95"
          r="85"
          transform="rotate(-90, 95, 95)"
        />
      </svg>
    </figure>

    <figure class="chart" data-percent="50">
      <figcaption>Mocha</figcaption>
      <img class="mocha" src={mocha} alt="mocha" />
      <svg width="200" height="200">
        <circle
          class="outer"
          cx="95"
          cy="95"
          r="85"
          transform="rotate(-90, 95, 95)"
        />
      </svg>
    </figure>
    <figure class="chart" data-percent="75">
      <figcaption>Github</figcaption>
      <img class="github" src={github} alt="github" />
      <svg width="200" height="200">
        <circle
          class="outer"
          cx="95"
          cy="95"
          r="85"
          transform="rotate(-90, 95, 95)"
        />
      </svg>
    </figure>

    <figure class="chart" data-percent="75">
      <figcaption>Java</figcaption>
      <img class="java" src={java} alt="java" />
      <svg width="200" height="200">
        <circle
          class="outer"
          cx="95"
          cy="95"
          r="85"
          transform="rotate(-90, 95, 95)"
        />
      </svg>
    </figure>
  </div>
);
