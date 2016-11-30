import React from 'react';
import Fetch from 'react-fetch';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import MyGroupsHeader from '../MyGroupsHeader';
import CareNeedsGroupTabBar from '../CareNeedsGroupTabBar';
import AreasOfFocusSection from '../AreasOfFocusSection';
import AlertSummarySection from '../AlertSummarySection';
import config from './config.json';

export const MyGroups = React.createClass({
  mixins: [PureRenderMixin],
  render() {
    return (
      <div className="MyGroups">
        <MyGroupsHeader />
        <CareNeedsGroupTabBar />
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
          <MyGroups />
        </Fetch>
      </div>
    );
  }
});


// function mapStateToProps(state) {
//   return {
//     test: 'Works!',
//     state
//   };
// }

// export const MyGroupsContainer = connect(
//   mapStateToProps,
//   actionCreators
// )(MyGroups);
