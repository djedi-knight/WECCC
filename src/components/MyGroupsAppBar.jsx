import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/action_creators';
import { Button } from 'react-toolbox/lib/button';

export default class React.createClass({
  mixins: [PureRenderMixin],
  render() {
    return (
      <div className="home">
      <Button label="Hello World!" primary />
      </div>
    );
  }
});


