import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/action_creators';
import MyCommunityHeader from '../components/MyCommunityHeader/MyCommunityHeader';
import GeneralPatientPopulationInfographic from '../components/GeneralPatientPopulationInfographic/GeneralPatientPopulationInfographic';
import MyCommunityBody from '../components/MyCommunityBody/MyCommunityBody';
import CareNeedsGroupInfographic from '../components/CareNeedsGroupInfographic/CareNeedsGroupInfographic';
import GroupsDashboardLink from '../components/GroupsDashboardLink/GroupsDashboardLink';

export const MyCommunity = React.createClass({
  mixins: [PureRenderMixin],
  render() {
    return (
      <div className="MyGroups">
        <MyCommunityHeader />
        <GeneralPatientPopulationInfographic />
        <MyCommunityBody />
        <CareNeedsGroupInfographic />
        <GroupsDashboardLink />

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

export const MyCommunityContainer = connect(
  mapStateToProps,
  actionCreators
)(MyCommunity);
