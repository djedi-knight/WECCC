import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/action_creators';
import NavBar from './NavBar/NavBar.jsx';
import LoginForm from './Form/LoginForm.jsx';


export const Home = React.createClass({
  mixins: [PureRenderMixin],
  render() {
    return (
      <div className="home">
        <NavBar />
        <LoginForm />
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
