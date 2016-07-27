import Dialog from 'react-toolbox/lib/dialog';
import React from 'react';
import { Button } from 'react-toolbox/lib/button';
import theme from './SignoutButton.scss';



class SingoutButton extends React.Component {
  state = {
    active: false
  };

  handleToggle = () => {
    this.setState({active: !this.state.active});
  }

  actions = [
    { label: "Cancel", onClick: this.handleToggle },
    { label: "Sing Out", onClick: this.handleToggle }

  ];



  render () {
    return (
      <div>
        <Button style={{  background:"#9999ff" }} label='SIGN OUT' onClick={this.handleToggle}/> 
        <Dialog
          actions={this.actions}
          active={this.state.active}
          onEscKeyDown={this.handleToggle}
          onOverlayClick={this.handleToggle}
          title='Are you sure ?'
        >
          <p>Here you can add arbitrary content.</p>
        </Dialog>
      </div>
    );
  }
}

export default SingoutButton;