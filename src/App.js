import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';


import MenuPf from './components/Menu';
import Contact from './components/Contact';
import Projects from './components/Projects';
import About from './components/About';

import './App.css';

class App extends Component {

  render() {

    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        
              <MenuPf />
              <Contact />
              <Projects />
              <About />
        
      </MuiThemeProvider>
    );
  }
}

export default App;
