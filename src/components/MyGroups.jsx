import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/action_creators';
import ListBox from './ListBox';
import MyGroupsNavigation from './MyGroupsNavigation';
import MyGroupDropDown from './MyGroupDropDown';
import CareNeedsGroupTabBar from './CareNeedsGroupTabBar';
import MyGroupsHealthOutcome from './MyGroupsHealthOutcome';
import All from './All';
import MyGroupsAreaOfFocus from './MyGroupsAreaOfFocus';
import HospitaliationsAndSafetyEvents from './HospitaliationsAndSafetyEvents'
import AvgActiveReAdmin from './AvgActiveReAdmin';
import AlertSummary from './AlertSummary';
import AlertSummaryAndSideBar from './AlertSummaryAndSideBar';

export const MyGroups = React.createClass({
  mixins: [PureRenderMixin],
  render() {
    return (
      <div className="MyGroups">
        <MyGroupsNavigation />
        <MyGroupDropDown />
        <CareNeedsGroupTabBar />
        <All />
        <MyGroupsAreaOfFocus />
        <HospitaliationsAndSafetyEvents />
        <AvgActiveReAdmin />
        <AlertSummary />
        <AlertSummaryAndSideBar />
        <ListBox />
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
