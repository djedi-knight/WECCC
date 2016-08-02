import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { Button } from 'react-toolbox/lib/button';

export default React.createClass({
  mixins: [PureRenderMixin],
  render() {
    return (
      <div>
        <Button style={{ color: '#ffffff' }} label="SIGN IN" onClick={this.handleToggle} />
      </div>
    );
  }
});
