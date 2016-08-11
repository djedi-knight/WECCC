import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions/action_creators';
import MyGroupsHeader from '../MyGroupsHeader/MyGroupsHeader';
import CareNeedsGroupTabBar from '../CareNeedsGroupTabBar/CareNeedsGroupTabBar';
import HealthOutcomesSection from '../HealthOutcomesSection/HealthOutcomesSection';
import AlertSummarySection from '../AlertSummarySection/AlertSummarySection';
import ScoreRiskPopOver from '../ScoreRiskPopOver/ScoreRiskPopOver';

export const MyGroups = React.createClass({
  mixins: [PureRenderMixin],
  render() {
    return (
      <div className="MyGroups">
        <MyGroupsHeader />
        <CareNeedsGroupTabBar />
        <HealthOutcomesSection />
        <AlertSummarySection />
        <ScoreRiskPopOver />
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
