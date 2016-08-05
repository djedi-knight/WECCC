import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Dialog from 'react-toolbox/lib/dialog';
import { Button } from 'react-toolbox/';
import theme from '../../theme/default';

export default React.createClass({
  mixins: [PureRenderMixin],
  getInitialState() {
    return { active: false };
  },
  handleToggle() {
    this.setState({ active: !this.state.active });
  },
  sendToggle() {
    this.setState({ active: !this.state.active });
  },
  render() {
    return (
      <div className={theme.logoutButton}>
        <Button label="Sign Out" onClick={this.handleToggle} />
        <Dialog
          active={this.state.active}
          onEscKeyDown={this.handleToggle}
          onOverlayClick={this.handleToggle}
          title='ENTER "OK" to SIGN OUT. '
        >
          <Button label="OK" onClick={this.sendToggle} />
        </Dialog>
      </div>
    );
  }
});
