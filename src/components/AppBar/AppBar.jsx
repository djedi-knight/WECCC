import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import AppBar from 'react-toolbox/lib/app_bar';

export default React.createClass({
  mixins: [PureRenderMixin],
  render() {
    return (
      <div>
        <AppBar fixed flat >Outcome Reports</AppBar>
      </div>
		);
  }
});
