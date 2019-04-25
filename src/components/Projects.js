import React from 'react';

import calculator from '../utils/projects/calculator.png';
import chatapp from '../utils/projects/chatapp.png';
import devconnector from '../utils/projects/devconnector.png';
import drum from '../utils/projects/drum.png';
import expensify from '../utils/projects/expensify.png';
import indesicion from '../utils/projects/indesicion.png';
import markdown from '../utils/projects/markdown.png';
import movieland from '../utils/projects/movieland.png';
import randomquote from '../utils/projects/randomquote.png';
import textbox from '../utils/projects/textbox.png';

import './css/projects.css';

export default () => (
  <div className=" animated slideInRight project_container">
    <div className="project_card_container">
      <div className="project_card_image_container">
        <img className="project_card_image" src={expensify} />
      </div>
      <div className="project_card_name_container">
        <p className="projtect_card_name">EXPENSIFY</p>
      </div>
    </div>

    <div className="project_card_container_2">
      <div className="project_card_image_container">
        <img className="project_card_image" src={chatapp} />
      </div>
      <div className="project_card_name_container">
        <p className="projtect_card_name">CHAT APP</p>
      </div>
    </div>

    <div className="project_card_container_2">
      <div className="project_card_image_container">
        <img className="project_card_image" src={calculator} />
      </div>
      <div className="project_card_name_container">
        <p className="projtect_card_name">CALCULATOR</p>
      </div>
    </div>

    <div className="project_card_container">
      <div className="project_card_image_container">
        <img className="project_card_image" src={drum} />
      </div>
      <div className="project_card_name_container">
        <p className="projtect_card_name">DRUM MACHINE</p>
      </div>
    </div>

    <div className="project_card_container">
      <div className="project_card_image_container">
        <img className="project_card_image" src={devconnector} />
      </div>
      <div className="project_card_name_container">
        <p className="projtect_card_name">DEVCONNECTOR</p>
      </div>
    </div>

    <div className="project_card_container_2">
      <div className="project_card_image_container">
        <img className="project_card_image" src={indesicion} />
      </div>
      <div className="project_card_name_container">
        <p className="projtect_card_name">INDESICION</p>
      </div>
    </div>

    <div className="project_card_container">
      <div className="project_card_image_container">
        <img className="project_card_image" src={markdown} />
      </div>
      <div className="project_card_name_container">
        <p className="projtect_card_name">MARKDOWN </p>
      </div>
    </div>

    <div className="project_card_container">
      <div className="project_card_image_container">
        <img className="project_card_image" src={randomquote} />
      </div>
      <div className="project_card_name_container">
        <p className="projtect_card_name">RANDOM QUOTE</p>
      </div>
    </div>

    <div className="project_card_container">
      <div className="project_card_image_container">
        <img className="project_card_image" src={movieland} />
      </div>
      <div className="project_card_name_container">
        <p className="projtect_card_name">MOVIE LAND</p>
      </div>
    </div>

    <div className="project_card_container">
      <div className="project_card_image_container">
        <img className="project_card_image" src={textbox} />
      </div>
      <div className="project_card_name_container">
        <p className="projtect_card_name">TEXT BOX</p>
      </div>
    </div>
  </div>
);
