import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { Tab, Tabs } from 'react-toolbox';
import ReactTooltip from 'react-tooltip';
import CareNeedsGroupPopover from '../CareNeedsGroupPopover/CareNeedsGroupPopover';

const contentLabel = (
  <a data-tip data-for="global"> Light: 40% </a>
);

export default React.createClass({
  mixins: [PureRenderMixin],
  render() {
    return (
      <div className="MyGroupsTab">
        <Tabs>
          <Tab label={contentLabel}><small>Primary content</small></Tab>
          <Tab label="Moderate:30%"><small>Secondary content</small></Tab>
          <Tab label="Complex:20%" disabled><small>Disabled content</small></Tab>
          <Tab label="Fourth" hidden><small>Fourth content hidden</small></Tab>
          <Tab label="EOL:10%"><small>Fifth content</small></Tab>
        </Tabs>
        <ReactTooltip id="global" aria-haspopup="true" place="right" offset={{ bottom: 100, right: 100 }}>
          <CareNeedsGroupPopover />
        </ReactTooltip>
      </div>
    );
  }
});
