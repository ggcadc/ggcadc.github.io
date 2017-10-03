import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
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
      <Router>
        <div>
        <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
                <MenuPf />
        </MuiThemeProvider>
      <Route exact path="/" component={About}/>
      <Route path="/projects" component={Projects}/>
      <Route path="/contact" component={Contact}/>
      </div>
      </Router>
    );
  }
}

export default App;
