import React from 'react';

export default ({ id, container, showModel, image, name }) => (
  <div id={id} className={container} onClick={showModel}>
    <div className="project_card_image_container">
      <img className="project_card_image" src={image} />
    </div>
    <div className="project_card_name_container">
      <p className="projtect_card_name">{name}</p>
    </div>
  </div>
);
