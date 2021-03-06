import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions/action_creators';

export const MyCommunity = React.createClass({
  mixins: [PureRenderMixin],
  render() {
    return (
      <div></div>
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
