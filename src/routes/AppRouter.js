import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from '../components/Landing';
import Skills from '../components/Skills';
import Navbar from '../components/Navbar';
import Resume from '../components/Resume';
import Projects from '../components/Projects';
import AboutMe from '../components/AboutMe';
import NotFound from '../components/NotFound';
import Footer from '../components/Footer';

import '../components/css/common.css';

export default () => (
  <div>
    <div className="row">
      <BrowserRouter>
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
      </BrowserRouter>
    </div>
    <Footer />
  </div>
);
