import React from 'react';
import Fetch from 'react-fetch';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import MyGroupsHeader from '../MyGroupsHeader';
import { CareNeedsGroupTabBarContainer } from '../CareNeedsGroupTabBar';
import AreasOfFocusSection from '../AreasOfFocusSection';
import AlertSummarySection from '../AlertSummarySection';
import appConfig from '../../../config.json';
import config from './config.json';

export const MyGroups = React.createClass({
  propTypes: {
    route: React.PropTypes.object
  },
  mixins: [PureRenderMixin],
  render() {
    return (
      <div>
        <MyGroupsHeader />
        <CareNeedsGroupTabBarContainer route={this.props.route} />
        <AreasOfFocusSection />
        <AlertSummarySection />
      </div>
    );
  }
});

export const MyGroupsContainer = React.createClass({
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
          <MyGroups route={this.props.route} />
        </Fetch>
      </div>
    );
  }
});
