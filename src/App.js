import React, { Component } from 'react';
import '../node_modules/materialize-css/dist/css/materialize.min.css';
import '../node_modules/materialize-css/dist/js/materialize.min.js';

import './App.css';

import NavBar from './components/navbar';
import LandingPage from './components/landingpage';
import Work from './components/work';
import About from './components/aboutme';
import Skills from './components/skills';
import Contact from './components/contact';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <LandingPage/>
        <Work/>
        <About/>
        <Skills/>
        <Contact/>
      </div>
    );
  }
}

export default App;
