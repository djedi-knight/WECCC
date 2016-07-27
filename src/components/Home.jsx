import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/action_creators';
import { Button } from 'react-toolbox/lib/button';
import LayoutTest from './Layout/LayoutTest.jsx';

export const Home = React.createClass({
  mixins: [PureRenderMixin],
  render() {
    return (
      <div className="home">
        <LayoutTest />
        <Button label="Hello World!" accent raised />         
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

export const HomeContainer = connect(
  mapStateToProps,
  actionCreators
)(Home);
