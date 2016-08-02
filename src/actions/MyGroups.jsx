import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/action_creators';
import MyGroupsHeader from '../components/./MyGroupsHeader/MyGroupsHeader';
import AreaOfFocus from '../components/./AreaOfFocus/AreaOfFocus';
import HealthOutcomes from '../components/./HealthOutcomes/HealthOutcomes';


export const MyGroups = React.createClass({
  mixins: [PureRenderMixin],
  render() {
    return (
      <div className="MyGroups">
        <MyGroupsHeader />
        <AreaOfFocus />
        <HealthOutcomes />
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
