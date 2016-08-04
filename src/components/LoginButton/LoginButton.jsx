import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { Button } from 'react-toolbox/lib/button';
import theme from '../../theme/default';

export default React.createClass({
  mixins: [PureRenderMixin],
  render() {
    return (
      <div className={theme.loginButton}>
        <Button inverse label="SIGN IN" onClick={this.handleToggle} />
      </div>
    );
  }
});
