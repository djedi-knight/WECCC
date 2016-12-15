import React from 'react';
import Fetch from 'react-fetch';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { Tab, Tabs } from 'react-toolbox';
import ReactTooltip from 'react-tooltip';
import CareNeedsGroupPopover from '../CareNeedsGroupPopover';
import HealthOutcomesSection from '../HealthOutcomesSection';
import appConfig from '../../../config.json';
import config from './config.json';
import style from './style';

export const CareNeedsGroupTabBar = React.createClass({
  mixins: [PureRenderMixin],
  getInitialState() {
    return {
      index: 0,
      config
    };
  },
  getLabelForTab(tab) {
    return (
      <a data-tip data-for={tab.key}>{tab.title}</a>
    );
  },
  handleTabChange(index) {
    this.setState({ index });
  },
  render() {
    return (
      <div className={style.careNeedsGroupTabBar}>
        <Tabs index={this.state.index} onChange={this.handleTabChange}>
          {this.state.config.tabs.map((tab, x) =>
            <Tab key={x} label={this.getLabelForTab(tab)}>
              <HealthOutcomesSection scoreCards={this.state.config.scoreCards[x]} />
            </Tab>
          )}
        </Tabs>
        {this.state.config.tabs.map((tab, x) =>
          <ReactTooltip
            key={x}
            id={tab.key}
            aria-haspopup="true"
            place="right"
            offset={{ bottom: 100, right: 100 }}
          >
            <CareNeedsGroupPopover />
          </ReactTooltip>
        )}
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
    return {
      appConfig,
      config
    };
  },
  getURL() {
    if (this.props.route.demoRoute) {
      return this.state.appConfig.servers.dev.concat(this.state.config.demoAPI);
    }

    return this.state.appConfig.servers.prod.concat(this.state.config.prodAPI);
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
