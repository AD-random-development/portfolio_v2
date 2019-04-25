import React, { Component } from 'react';

import ProjectCard from './ProjectCard';
import ProjectModel from './ProjectModel';

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

const projectData = [
  {
    id: 1,
    name: 'EXPENSIFY',
    image: expensify,
    container: 'project_card_container',
    tech: ['React', 'Redux', 'Firebase', 'Google Auth'],
    description:
      'magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla. consequat massa quis enim. Donec pede justo, fringilla vel, aliquet',
    web_link: 'www.google.com',
    git_link: 'www.github.com'
  },
  {
    id: 2,
    name: 'CHAT APP',
    image: chatapp,
    container: 'project_card_container_2',
    tech: ['React', 'Redux', 'Firebase', 'Google Auth'],
    description:
      'magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla. consequat massa quis enim. Donec pede justo, fringilla vel, aliquet',
    web_link: 'www.google.com',
    git_link: 'www.github.com'
  },

  {
    id: 3,
    name: 'CALCULATOR',
    image: calculator,
    container: 'project_card_container_2',
    tech: ['React', 'Redux', 'Firebase', 'Google Auth'],
    description:
      'magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla. consequat massa quis enim. Donec pede justo, fringilla vel, aliquet',
    web_link: 'www.google.com',
    git_link: 'www.github.com'
  },
  {
    id: 4,
    name: 'DRUM MACHINE',
    image: drum,
    container: 'project_card_container',
    tech: ['React', 'Redux', 'Firebase', 'Google Auth'],
    description:
      'magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla. consequat massa quis enim. Donec pede justo, fringilla vel, aliquet',
    web_link: 'www.google.com',
    git_link: 'www.github.com'
  }
];

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      model: null,
      showModel: false
    };
  }

  closeModel = () => {
    this.setState({
      model: null,
      showModel: false
    });
  };

  showModel = e => {
    let id = e.target.parentNode.parentNode.id;
    if (id >= 1)
      if (!this.state.showModel) {
        this.setState({
          model: projectData[id - 1],
          showModel: true
        });
      } else return;
  };

  render() {
    return (
      <div>
        {this.state.showModel ? (
          <ProjectModel
            closeModel={this.closeModel}
            name={this.state.model.name}
            image={this.state.model.image}
            tech={this.state.model.tech}
            description={this.state.model.description}
            web_link={this.state.model.web_link}
            git_link={this.state.model.git_link}
          />
        ) : null}
        <div className="animated slideInRight project_container">
          {/* <div className="project_card_container" onClick={this.showModel}>
          <div className="project_card_image_container">
            <img className="project_card_image" src={expensify} />
          </div>
          <div className="project_card_name_container">
            <p className="projtect_card_name">EXPENSIFY</p>
          </div>
        </div> */}

          {projectData.map(e => {
            return (
              <ProjectCard
                key={e.id}
                id={e.id}
                showModel={this.showModel}
                image={e.image}
                name={e.name}
                container={e.container}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Projects;
