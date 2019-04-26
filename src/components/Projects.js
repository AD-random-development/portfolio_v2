import React, { Component } from 'react';

import ProjectCard from './ProjectCard';
import ProjectModel from './ProjectModel';

import calculator from '../utils/projects/calculator.png';
import chatapp from '../utils/projects/chatapp.png';
import devconnector from '../utils/projects/devconnector.png';
import drum from '../utils/projects/drum.png';
import expensify from '../utils/projects/expensify.png';
import indecision from '../utils/projects/indecision.png';
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
      'An application build during Redux/Redux bootcamp course. It provide an easy platform to store daily expense data along with google Authentication. This application use Firebase to store data of users. It provide feature of sort by date, amount etc.',
    web_link: 'https://expensify-app-projecy.herokuapp.com',
    git_link: 'https://github.com/AvinashDhillor/expensify-app'
  },
  {
    id: 2,
    name: 'CHAT APP',
    image: chatapp,
    container: 'project_card_container_2',
    tech: ['Html/Css', 'Socket.io', 'Nodejs', 'Express'],
    description:
      'Applicaion build using Socket.io. We can create chatroom and share name with others so they can join chatroom and talk with friends without any signup',
    web_link: 'https://fast-sea-55980.herokuapp.com',
    git_link: 'https://github.com/AvinashDhillor/chat-app'
  },

  {
    id: 3,
    name: 'CALCULATOR',
    image: calculator,
    container: 'project_card_container_2',
    tech: ['Html', 'Css', 'BootStrap', 'React'],
    description:
      "A simple Calculator application build using react. It is one of the project in FreeCodeCamp's FrontEnd challenges.",
    git_link: 'https://github.com/AvinashDhillor/calculator'
  },
  {
    id: 4,
    name: 'DRUM MACHINE',
    image: drum,
    container: 'project_card_container',
    tech: ['Html', 'Css', 'BootStrap', 'React'],
    description:
      'Drum machine build in React. we can generate music with help of keyboard keys or simply clicking the buttons.',
    git_link: 'https://github.com/AvinashDhillor/drum-machine'
  },
  {
    id: 5,
    name: 'INDECISION',
    image: indecision,
    container: 'project_card_container_2',
    tech: ['Html', 'Css', 'React'],
    description: 'React Todo Application build duing React/Redux course',
    web_link: 'https://gentle-shelf-77924.herokuapp.com',
    git_link: 'https://github.com/AvinashDhillor/Indesicion-app'
  },
  {
    id: 6,
    name: 'DEV-CONNECTOR',
    image: devconnector,
    container: 'project_card_container_3',
    tech: [
      'Nodejs',
      'Mongodb',
      'Mongoose',
      'Express',
      'React',
      'Redux',
      'Axios',
      'JSON web Token'
    ],
    description:
      'DEV-CONNECTOR provide a social platform to build a communication betweem developers. People can share there skills, work background and post messages on there account.',
    git_link: 'https://github.com/AvinashDhillor/DevConnector'
  },
  {
    id: 7,
    name: 'MARKDOWN',
    image: markdown,
    container: 'project_card_container_3',
    tech: ['Html', 'Css', 'BootStrap', 'React'],
    description:
      'Markdown previewer application build in React. It was part of FreeCodeCamp frontend Challange',
    git_link: 'https://github.com/AvinashDhillor/markdown-previewer'
  },
  {
    id: 8,
    name: 'MOVIE LAND',
    image: movieland,
    container: 'project_card_container_3',
    tech: ['Html', 'Css', 'React', 'Omdb API'],
    description:
      'Movie land fetch movies data from an API and show movies detail to users based on search query',
    git_link: 'https://github.com/AvinashDhillor/movie-land'
  },
  {
    id: 9,
    name: 'RANDOM QUOTES',
    image: randomquote,
    container: 'project_card_container_3',
    tech: ['Html', 'Css', 'React'],
    description: 'Show random quote to user.',
    git_link: 'https://github.com/AvinashDhillor/random-quotes'
  },
  {
    id: 10,
    name: 'TEXTBOX',
    image: textbox,
    container: 'project_card_container_3',
    tech: ['Html', 'Css', 'Javascript'],
    description:
      'This application is helpfull when a person want to generate document for multiple users. This application work like creating a template and replace specific fields in document. It also provide save to doc feature',
    web_link: 'https://avinashdhillor.github.io/TextBox',
    git_link: 'https://github.com/AvinashDhillor/TextBox'
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
