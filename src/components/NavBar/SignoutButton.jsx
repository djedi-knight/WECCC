import Dialog from 'react-toolbox/lib/dialog';
import React from 'react';
import {Button, IconButton} from 'react-toolbox/lib/button';
import theme from '../../theme/SignoutButton.scss';




class SingoutButton extends React.Component {

  

  render () {
    return (
    <div>
      <Button style={{ color:"#ffffff"}} label='SIGN OUT' onClick={this.handleToggle}/>
    </div>
    );
  }
}

export default SingoutButton;

