import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { Button } from 'react-toolbox';

let LoginForm = React.createClass({
  login() {
    alert('you are logged in!');
    return;
  },
  render() {
    return (
      <div className="loginForm">
        <p> Login to access your personal dashboard </p>
        <input type="email" id="email" placeholder="E-Mail" />
        <input type="password" id="password" placeholder="Password" />
        <Button id="send" label="Save" onClick={this.login} />
      </div>
    );
  }
});

let SingupForm = React.createClass({
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
        <Button id="send" label="Save " onClick={this.signup} />
      </div>
    );
  }
});

export default React.createClass({
  mixins: [PureRenderMixin],
  getInitialState() {
    return { login: true, signup: false };
  },
  showForm(formType) {
    let login = false;
    let signup = false;

    if (formType === 'signup') {
      signup = true;
    } else {
      login = true;
    }

    return this.setState({ login, signup });
  },
  render() {
    const forgotUsernameLink = (<a href="#/forgotUsername">username</a>);
    const forgotPasswordLink = (<a href="#/forgotPassword">password</a>);

    return (
      <div className="login">
        <Button id="signupButton" label="Sign Up" onClick={this.showForm.bind((this), 'signup')} />
        <Button id="loginButton" label="Login" onClick={this.showForm.bind((this), 'login')} />
        {this.state.signup ? <SingupForm /> : null}
        {this.state.login ? <LoginForm /> : null}
        <p>Forgot {forgotUsernameLink} or {forgotPasswordLink} ?</p>
      </div>
    );
  }
});
