import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions/action_creators';
import { AppBar, Button, Dialog } from 'react-toolbox';
import LoginView from '../LoginView/LoginView';
import theme from '../../theme/default';

export const LoginButton = React.createClass({
  propTypes: {
    login: React.PropTypes.func.isRequired
  },
  getInitialState() {
    return { active: false };
  },
  toggleActiveState() {
    this.setState({ active: !this.state.active });
  },
  render() {
    return (
      <div>
        <div className={theme.loginButton}>
          <Button inverse label="Login" onClick={this.toggleActiveState} />
        </div>
        <Dialog active={this.state.active} onEscKeyDown={this.toggleActiveState} onOverlayClick={this.toggleActiveState}>
          <Button label="Close" onClick={this.toggleActiveState} />
          <LoginView login={this.props.login} />
        </Dialog>
      </div>
    );
  }
});

export const LogoutButton = React.createClass({
  propTypes: {
    logout: React.PropTypes.func.isRequired
  },
  render() {
    return (
      <div className={theme.logoutButton}>
        <Button inverse label="Logout" onClick={() => this.props.logout()} />
      </div>
    );
  }
});

export const NavBar = React.createClass({
  propTypes: {
    isLoggedIn: React.PropTypes.bool.isRequired,
    login: React.PropTypes.func.isRequired,
    logout: React.PropTypes.func.isRequired
  },
  mixins: [PureRenderMixin],
  getContent() {
    if (this.props.isLoggedIn) {
      // return logged in content
      return (
        <div>
          <ul>
            <li><a href="#/about">ABOUT</a></li>
            <li><a href="#/contact">CONTACT</a></li>
            <li><a href="#/my-community">MY COMMUNITY</a></li>
            <li><a href="#/my-groups">MY GROUPS</a></li>
          </ul>
          <LogoutButton logout={this.props.logout} />
        </div>
      );
    }

    // return logged out content
    return (
      <div>
        <ul>
          <li><a href="#/about">ABOUT</a> </li>
          <li><a href="#/contact">CONTACT</a> </li>
        </ul>
        <LoginButton login={this.props.login} />
      </div>
    );
  },
  render() {
    // setup links based on login status
    let content = this.getContent();

    return (
      <div className={theme.navBar}>
        <AppBar fixed flat >
          <h4><a href="#/">Outcome Reports</a></h4>
          {content}
        </AppBar>
      </div>
    );
  }
});

function mapStateToProps(state) {
  return {
    isLoggedIn: state.get('isLoggedIn')
  };
}

export const NavBarContainer = connect(
  mapStateToProps,
  actionCreators
)(NavBar);
