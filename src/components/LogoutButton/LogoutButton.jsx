import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { Button } from 'react-toolbox/lib/button';
import theme from '../../theme/default';

export default React.createClass({
  mixins: [PureRenderMixin],
  render() {
    return (
      <div className={theme.logoutButton}>
        <Button style={{ color: '#ffffff' }} label="SIGN OUT" onClick={this.handleToggle} />
      </div>
    );
  }
});
