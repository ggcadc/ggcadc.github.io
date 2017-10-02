import React, { Component } from 'react';
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
        <MenuItem primaryText="About" key="1" />
        <MenuItem primaryText="Projects" key="2" />
        <MenuItem primaryText="Contact" key="3" />
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