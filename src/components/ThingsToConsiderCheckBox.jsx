
import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/action_creators';
import { Button } from 'react-toolbox/lib/button';
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';
import Checkbox from 'react-toolbox/lib/checkbox';

const check1 = true;
const check2 = false;
export default React.createClass({
  mixins: [PureRenderMixin],
  render() {
    return (
      <div className="ThingsToConsiderCheckBox">
          <Checkbox
          checked={check1}
          label="Checked option"
        />
        <Checkbox
          checked={check2}
          label="Unchecked option"
        />
        <Checkbox
          checked
          disabled
          label="Disabled checkbox"
        />
      </div>
    );
  }
});


