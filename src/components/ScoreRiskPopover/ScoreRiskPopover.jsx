import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { FontIcon } from 'react-toolbox';

export default React.createClass({
  mixins: [PureRenderMixin],
  render() {
    return (
      <div style={{ border: '1px solid gray', background: '#FADEDE' }}>
        <div style={{ background: '#F00', margin: '0px' }}>
          <FontIcon style={{ color: '#FFF', padding: '5px' }} value="warning" />
        </div>
        <p style={{ padding: '2px' }}>
          There is an indication that <br />
          your High Risk score is <br />
          lower than the peer score.
        </p>
      </div>
    );
  }
});
