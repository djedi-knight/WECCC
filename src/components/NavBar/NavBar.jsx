import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { AppBar } from 'react-toolbox';
import LoginButton from '../LoginButton/LoginButton';
import LogoutButton from '../LogoutButton/LogoutButton';
import theme from '../../theme/default';

export default React.createClass({
  mixins: [PureRenderMixin],

  getInitialState() {
    return { isLoggedIn: false };
  },
  getContent() {
    if (this.state.isLoggedIn) {
      // return logged in content
      return (
        <div>
          <ul>
            <li><a href="#/about">ABOUT</a></li>
            <li><a href="#/contact">CONTACT</a></li>
          </ul>
          <LogoutButton />
        </div>
      );
    }

    // return logged out content
    return (
      <div>
        <ul>
          <li><a href="#/about">ABOUT</a> </li>
          <li><a href="#/contact">CONTACT</a> </li>
          <li><a href="#/my-community">MY COMMUNITY</a></li>
          <li><a href="#/my-groups">MY GROUPS</a></li>
        </ul>
        <LoginButton />
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
