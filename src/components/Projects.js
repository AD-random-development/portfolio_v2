import React from 'react';

import image from '../utils/image.jpg';
import './css/projects.css';

export default () => (
  <div className=" animated slideInRight project_container">
    <div className="project_card_container">
      <div className="project_card_image_container">
        <img className="project_card_image" src={image} />
      </div>
      <div className="project_card_name_container">
        <p className="projtect_card_name">CALCULATOR</p>
      </div>
    </div>

    <div className="project_card_container_2">
      <div className="project_card_image_container">
        <img className="project_card_image" src={image} />
      </div>
      <div className="project_card_name_container">
        <p className="projtect_card_name">CALCULATOR</p>
      </div>
    </div>

    <div className="project_card_container_2">
      <div className="project_card_image_container">
        <img className="project_card_image" src={image} />
      </div>
      <div className="project_card_name_container">
        <p className="projtect_card_name">Calculator</p>
      </div>
    </div>

    <div className="project_card_container_3">
      <div className="project_card_image_container">
        <img className="project_card_image" src={image} />
      </div>
      <div className="project_card_name_container">
        <p className="projtect_card_name">Calculator</p>
      </div>
    </div>

    <div className="project_card_container">
      <div className="project_card_image_container">
        <img className="project_card_image" src={image} />
      </div>
      <div className="project_card_name_container">
        <p className="projtect_card_name">Calculator</p>
      </div>
    </div>
  </div>
);
