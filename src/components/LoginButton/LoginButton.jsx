import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Dialog from 'react-toolbox/lib/dialog';
import { Button } from 'react-toolbox';
import Login from '../Login/Login';
import theme from '../../theme/default';

export default React.createClass({
  mixins: [PureRenderMixin],
  getInitialState() {
    return { active: false };
  },
  handleToggle() {
    this.setState({ active: !this.state.active });
  },
  render() {
    return (
      <div className={theme.loginButton}>
        <Button inverse label="Sign In" onClick={this.handleToggle} />
        <Dialog
          active={this.state.active}
          onEscKeyDown={this.handleToggle}
          onOverlayClick={this.handleToggle}
        >
          <Button label="Close" onClick={this.handleToggle} />
          <Login />
        </Dialog>
      </div>
    );
  }
});
