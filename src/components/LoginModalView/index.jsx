import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { Button } from 'react-toolbox';
import style from './style';

export const LoginForm = React.createClass({
  propTypes: { 
    login: React.PropTypes.func.isRequired
  },
  mixins: [PureRenderMixin],
  render() {
    return (
      <div className={style.loginForm}>
        <p> Login to access your personal dashboard </p>
        <input type="email" id="email" placeholder="E-Mail" />
        <input type="password" id="password" placeholder="Password" />
        <Button id="send" label="Done" onClick={() => this.props.login()} />
      </div>
    );
  }
});

export const SignupForm = React.createClass({
  mixins: [PureRenderMixin],
  signup() {
    alert('you are signed up!');
    return;
  },
  render() {
    return (
      <div className={style.signupForm}>
        <p> Sign up to access your personal dashboard </p>
        <input type="email" id="email" placeholder="E-Mail" />
        <Button id="send" label="Done" onClick={this.signup} />
      </div>
    );
  }
});

export default React.createClass({
  propTypes: {
    login: React.PropTypes.func.isRequired
  },
  mixins: [PureRenderMixin],
  getInitialState() {
    return {
      showLoginForm: true,
      showSignupForm: false
    };
  },
  showLoginForm() {
    return this.setState({
      showLoginForm: true,
      showSignupForm: false
    });
  },
  showSignupForm() {
    return this.setState({
      showLoginForm: false,
      showSignupForm: true
    });
  },
  render() {
    const forgotUsernameLink = (<a href="#/forgotUsername">username</a>);
    const forgotPasswordLink = (<a href="#/forgotPassword">password</a>);

    return (
      <div className={style.loginModalView}>
        <Button id="loginButton" label="Login" onClick={this.showLoginForm} />
        <Button id="signupButton" label="Sign Up" onClick={this.showSignupForm} />
        {this.state.showLoginForm ? <LoginForm login={this.props.login} /> : null}
        {this.state.showSignupForm ? <SignupForm /> : null}
        <p>Forgot {forgotUsernameLink} or {forgotPasswordLink} ?</p>
      </div>
    );
  }
});
