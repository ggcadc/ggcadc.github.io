import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import AppBar from 'material-ui/AppBar';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import ContentFilter from 'material-ui/svg-icons/content/filter-list';

const style = {
    paper: {
      display: 'inline-block',
      float: 'left',
      margin: '50px 32px 16px 0',
    },
    rightIcon: {
      textAlign: 'center',
      lineHeight: '24px',
    },
  };
  const IconMenuExampleSimple = () => (
    <div>
      <IconMenu
        iconButtonElement={<IconButton><ContentFilter /></IconButton>}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
      >
      <Link to="/"><MenuItem primaryText="About" key="1" /></Link>
      <Link to="/projects"><MenuItem primaryText="Projects" key="2" /></Link>
      <Link to="/contact"><MenuItem primaryText="Contact" key="3" /></Link>
      </IconMenu>
    </div>
  );

class MenuPf extends Component {
    render() {
        return (
            <div>
                <AppBar title="Grant Glidewell" showMenuIconButton={false} style={style}>
               <IconMenuExampleSimple />
               </AppBar>
            </div>
        )

    }
}

export default MenuPf;