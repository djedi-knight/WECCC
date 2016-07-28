import Dialog from 'react-toolbox/lib/dialog';
import React from 'react';
import {Button} from 'react-toolbox/lib/button';
import theme from '../../theme/SignoutButton.scss';



class SingoutButton extends React.Component {


  render () {
    return (
    <div>
      <Button style={{ color:"#ffffff"}} label='SIGN IN' onClick={this.handleToggle}/>
    </div>
    );
  }
}

export default SingoutButton;

