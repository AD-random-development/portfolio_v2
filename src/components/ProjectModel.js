import React from 'react';

import './css/projectModel.css';

export default ({
  closeModel,
  name,
  image,
  tech,
  description,
  web_link,
  git_link
}) => (
  <div className="model_container animated zoomIn">
    <button className="model_close" onClick={closeModel}>
      &times;
    </button>
    <img
      className="model_image"
      src={image}
      alt={name}
      width="100%"
      height="100%"
    />
    <div className="model_details">
      <h1 className="model_name">{name}</h1>
      <div>
        <h3 className="model_heading">Build using</h3>
        <p className="model_desc">
          {tech.map(e => (
            <spam>{e} &#10003; </spam>
          ))}
        </p>
      </div>
      <div>
        <h3 className="model_heading">Description</h3>
        <p className="model_desc">{description}</p>
      </div>
      {web_link ? (
        <div>
          <h3 className="model_heading">Website Link</h3>
          <p className="model_desc">
            <a href={web_link} target="_blank" rel="noopener noreferrer">
              {web_link}
            </a>
          </p>
        </div>
      ) : null}

      {git_link ? (
        <div>
          <h3 className="model_heading">Github Link</h3>
          <p className="model_desc">
            <a href={git_link} target="_blank" rel="noopener noreferrer">
              {git_link}
            </a>
          </p>
        </div>
      ) : null}
    </div>
  </div>
);
