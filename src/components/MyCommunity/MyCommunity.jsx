import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions/action_creators';
import MyCommunityHeader from '../MyCommunityHeader/MyCommunityHeader';
import GeneralPatientPopulationInfographic
  from '../GeneralPatientPopulationInfographic/GeneralPatientPopulationInfographic';
import MyCommunityBody from '../MyCommunityBody/MyCommunityBody';
import CareNeedsGroupInfographic
  from '../CareNeedsGroupInfographic/CareNeedsGroupInfographic';
import GroupsDashboardLink from '../GroupsDashboardLink/GroupsDashboardLink';

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
