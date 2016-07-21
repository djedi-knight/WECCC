import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';
import * as actionCreators from '../actions/action_creators';

export const Home = React.createClass({
  mixins: [PureRenderMixin],
  render: function() {
    return (
      <div className="home">
        Homepage Stub
      </div>
    );
  }
});

function mapStateToProps(state) {
  return {
    test: 'Works!',
  };
}

export const HomeContainer = connect(
  mapStateToProps,
  actionCreators
)(Home);
