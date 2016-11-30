import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { Tab, Tabs } from 'react-toolbox';
import ReactTooltip from 'react-tooltip';
import CareNeedsGroupPopover from '../CareNeedsGroupPopover';
import HealthOutcomesSection from '../HealthOutcomesSection';
import ScoreCard from '../ScoreCard';
import data from './data.json';
import style from './style';
import config from './config.json';

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
   propTypes: {
    scoreCards: React.PropTypes.array
  },
  mixins: [PureRenderMixin],
  getInitialState() {
    return { data, config , index:0};
  },
  handleTabChange(index) {
    this.setState({ index });
  },
  render() {
    return (
      <div className={style.careNeedsGroupTabBar}>
        <Tabs index={this.state.index} onChange={this.handleTabChange}>
          <Tab label={light}>
            <HealthOutcomesSection data={this.state.data.light} subGroup="windsor-subgroup" scoreCards={this.props.scoreCards} />
          </Tab>
          <Tab label={moderate}>
            <HealthOutcomesSection data={this.state.data.moderate} subGroup="essex-subgroup" scoreCards={this.props.scoreCards} />
          </Tab>
          <Tab label={complex}>
            <HealthOutcomesSection data={this.state.data.complex} subGroup="seniors-subgroup" scoreCards={this.props.scoreCards} />
          </Tab>
          <Tab label={eol}>
            <HealthOutcomesSection data={this.state.data.eol} subGroup="youth-subgroup" scoreCards={this.props.scoreCards} />
          </Tab>
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
export const CareNeedsGroupTabBarContainer = React.createClass({
  propTypes: {
    route: React.PropTypes.object
  },
  mixins: [PureRenderMixin],
  getInitialState() {
    return { config };
  },
  getURL() {
    if (this.props.route.demoRoute) {
      return this.state.config.demoAPI;
    }

    return this.state.config.prodAPI;
  },
  render() {
    return (
      <div>
        <Fetch url={this.getURL()}>
          <CareNeedsGroupTabBar />
        </Fetch>
      </div>
    );
  }
});
