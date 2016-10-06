import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { Tab, Tabs } from 'react-toolbox';
import ReactTooltip from 'react-tooltip';
import CareNeedsGroupPopover from '../CareNeedsGroupPopover';
import HealthOutcomesSection from '../HealthOutcomesSection';
import style from './style';

const light = ( 
  <a data-tip data-for="light"> Light: 40% </a>
);
const moderate = (
  <a data-tip data-for="moderate"> Moderate: 30% </a>
);
const complex = (
  <a data-tip data-for="complex"> Complex: 20% </a>
);
const eol = (
  <a data-tip data-for="eol"> EOL: 10% </a>
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
          <Tab label={light}> <HealthOutcomesSection /> </Tab>
          <Tab label={moderate}> <HealthOutcomesSection />  </Tab>
          <Tab label={complex}> <HealthOutcomesSection /> </Tab>
          <Tab label={eol}> <HealthOutcomesSection /> </Tab>
        </Tabs>
        <ReactTooltip id="light" aria-haspopup="true" place="right" offset={{ bottom: 100, right: 100 }}>
          <CareNeedsGroupPopover />
        </ReactTooltip>
        <ReactTooltip id="moderate" aria-haspopup="true" place="right" offset={{ bottom: 100, right: 100 }}>
          Moderate
        </ReactTooltip>
        <ReactTooltip id="complex" aria-haspopup="true" place="right" offset={{ bottom: 100, right: 100 }}>
          Complex
        </ReactTooltip>
        <ReactTooltip id="eol" aria-haspopup="true" place="right" offset={{ bottom: 100, right: 100 }}>
          EOL
        </ReactTooltip>
      </div>
    );
  }
});
