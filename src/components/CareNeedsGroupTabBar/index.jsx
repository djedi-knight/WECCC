import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { Tab, Tabs } from 'react-toolbox';
import ReactTooltip from 'react-tooltip';
import CareNeedsGroupPopover from '../CareNeedsGroupPopover';
import style from './style';

const contentLabel = (
  <a data-tip data-for="global"> Light: 40% </a>
);

export default React.createClass({
  mixins: [PureRenderMixin],
  getInitialState() {
    return { index: 0 };
  },
  handleTabChange(index) {
    this.setState({ index });
  },
  render() {
    return (
      <div className={style.careNeedsGroupTabBar}>
        <Tabs index={this.state.index} onChange={this.handleTabChange}>
          <Tab label={contentLabel} />
          <Tab label="Moderate:30%" />
          <Tab label="Complex:20%" />
          <Tab label="EOL:10%" />
        </Tabs>
        <ReactTooltip id="global" aria-haspopup="true" place="right" offset={{ bottom: 100, right: 100 }}>
          <CareNeedsGroupPopover />
        </ReactTooltip>
      </div>
    );
  }
});
