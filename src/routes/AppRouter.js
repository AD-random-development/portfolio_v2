import React, { Component } from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from '../components/Landing';
import Skills from '../components/Skills';
import Navbar from '../components/Navbar';
import Resume from '../components/Resume';
import Projects from '../components/Projects';
import AboutMe from '../components/AboutMe';
import NotFound from '../components/NotFound';

import '../components/css/common.css';

let openresponsiveNav = {
  width: '100vw',
  position: 'fixed',
  top: '0',
  left: '0',
  zIndex: '4',
  backgroundColor: 'rgba(0, 0, 0, 0.988)'
};

let closeresponsiveNav = {
  display: 'none'
};

const closeButton = {
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  border: 'none',
  fontSize: '30px',
  position: 'absolute',
  right: '0',
  top: '0'
};

class AppRputer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOn: false
    };
  }

  closeNav = () => {
    this.setState({
      isNavOn: false
    });
  };

  toggleNav = () => {
    if (this.state.isNavOn) {
      this.setState({
        isNavOn: false
      });
    } else {
      this.setState({
        isNavOn: true
      });
    }
  };

  render() {
    return (
      <div>
        <BrowserRouter>
          <div className="res_navbar">
            <h1 className="author res_author">
              <i onClick={this.toggleNav} class="fas fa-bars" />
              Avinash Dhillor
            </h1>
            <div
              style={
                this.state.isNavOn ? openresponsiveNav : closeresponsiveNav
              }
            >
              <button onClick={this.closeNav} style={closeButton}>
                &times;
              </button>
              <Navbar />
            </div>
          </div>
          <div className="row">
            <div className="left_container">
              <Navbar />
            </div>
            <div className="right_scroll">
              <div className="right_container">
                <Switch>
                  <Route path="/" component={Landing} exact={true} />
                  <Route path="/skills" component={Skills} exact={true} />
                  <Route path="/resume" component={Resume} exact={true} />
                  <Route path="/projects" component={Projects} exact={true} />
                  <Route path="/aboutme" component={AboutMe} exact={true} />
                  <Route component={NotFound} />
                </Switch>
              </div>
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default AppRputer;
