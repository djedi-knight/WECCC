import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions/action_creators';
import { Button } from 'react-toolbox/lib/button';
import {Tab, Tabs} from 'react-toolbox';


export default React.createClass({
  mixins: [PureRenderMixin],
  render() {
    return (
      <div className="MyGroupsTab">
        <Tabs index="1" onChange="null"l>
        <Tab label='Light:40%'><small>Primary content</small></Tab>
        <Tab label='Moderate:30%'><small>Secondary content</small></Tab>
        <Tab label='Complex:20%' disabled><small>Disabled content</small></Tab>
        <Tab label='Fourth' hidden><small>Fourth content hidden</small></Tab>
        <Tab label='EOL:10%'><small>Fifth content</small></Tab>
      </Tabs>
      </div>
    );
  }
});
