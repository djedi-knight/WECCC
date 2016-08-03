import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { AppBar } from 'react-toolbox';
import { theme } from './NavBar';
import LoginButton from '../LoginButton/LoginButton';
import LogoutButton from '../LogoutButton/LogoutButton';

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
            <li><a href="/about">ABOUT</a></li>
            <li><a href="/contact">CONTACT</a></li>
          </ul>
          <LoginButton />
        </div>
      );
    }

    // return logged out content
    return (
      <div>
        <ul>
          <li><a href="/about">ABOUT</a> </li>
          <li><a href="/contact">CONTACT</a> </li>
          <li><a href="/community">MY COMMUNITY</a></li>
          <li><a href="/group">MY GROUPS</a></li>
        </ul>
        <LogoutButton />
      </div>
    );
  },
  render() {
    // setup links based on login status
    let content = this.getContent();

    return (
      <div className="NavBar">
        <AppBar theme={theme} fixed flat >
          <h4>Outcome Reports</h4>
          {content}
        </AppBar>
      </div>
    );
  }
});
