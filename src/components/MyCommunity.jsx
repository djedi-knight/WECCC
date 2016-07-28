import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/action_creators';
import Navigation from './Navigation';

export const MyCommunity = React.createClass({
  mixins: [PureRenderMixin],
  render() {
    return (
      <div className="MyCommunity">
      <Navigation />
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
)(MyCommunity);
