import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { Tab, Tabs } from 'react-toolbox';
import CareNeedsGroupPopover from '../CareNeedsGroupPopover/CareNeedsGroupPopover.jsx';


export default React.createClass({
  mixins: [PureRenderMixin],
  render() {
    return (
      <div className="MyGroupsTab">
        <Tabs>
          <Tab label="Light:40%"><small>Primary content</small></Tab>
          <Tab label="Moderate:30%"><small>Secondary content</small></Tab>
          <Tab label="Complex:20%" disabled><small>Disabled content</small></Tab>
          <Tab label="Fourth" hidden><small>Fourth content hidden</small></Tab>
          <Tab label="EOL:10%"><small>Fifth content</small></Tab>
        </Tabs>
        <CareNeedsGroupPopover/>
      </div>
    );
  }
});
