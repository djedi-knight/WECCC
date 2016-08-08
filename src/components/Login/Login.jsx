import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { Button } from 'react-toolbox';

export const LoginForm = React.createClass({
  propTypes: {
    login: React.PropTypes.func
  },
  render() {
    return (
      <div className="loginForm">
        <p> Login to access your personal dashboard </p>
        <input type="email" id="email" placeholder="E-Mail" />
        <input type="password" id="password" placeholder="Password" />
        <Button id="send" label="Done" onClick={this.props.login} />
      </div>
    );
  }
});

export const SingupForm = React.createClass({
  signup() {
    alert('you are signed up!');
    return;
  },
  render() {
    return (
      <div className="signupForm">
        <p> Sign up to access your personal dashboard </p>
        <input type="text" id="first" placeholder="First Name" />
        <input type="text" id="last" placeholder="Last Name" />
        <input type="email" id="email" placeholder="E-Mail" />
        <input type="password" id="password" placeholder="Password" />
        <Button id="send" label="Done " onClick={this.signup} />
      </div>
    );
  }
});

export default React.createClass({
  mixins: [PureRenderMixin],
  getInitialState() {
    return {
      showLoginForm: true,
      showSignupForm: false
    };
  },
  showForm(formType) {
    let showLoginForm = false;
    let showSignupForm = false;

    if (formType === 'signup') {
      showLoginForm = true;
    } else {
      showSignupForm = true;
    }

    return this.setState({ showLoginForm, showSignupForm });
  },
  render() {
    const forgotUsernameLink = (<a href="#/forgotUsername">username</a>);
    const forgotPasswordLink = (<a href="#/forgotPassword">password</a>);

    return (
      <div className="login">
        <Button id="signupButton" label="Sign Up" onClick={this.showForm.bind((this), 'signup')} />
        <Button id="loginButton" label="Login" onClick={this.showForm.bind((this), 'login')} />
        {this.state.showLoginForm ? <SingupForm /> : null}
        {this.state.showSignupForm ? <LoginForm /> : null}
        <p>Forgot {forgotUsernameLink} or {forgotPasswordLink} ?</p>
      </div>
    );
  }
});
