import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions/action_creators';
import MyGroupsHeader from '../MyGroupsHeader';
import CareNeedsGroupTabBar from '../CareNeedsGroupTabBar';
import HealthOutcomesSection from '../HealthOutcomesSection';
import AreasOfFocusSection from '../AreasOfFocusSection';
import AlertSummarySection from '../AlertSummarySection';

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

function mapStateToProps(state) {
  return {
    test: 'Works!',
    state
  };
}

export const MyGroupsContainer = connect(
  mapStateToProps,
  actionCreators
)(MyGroups);
