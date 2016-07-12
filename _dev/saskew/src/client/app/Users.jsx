import React from 'react';
var user = { name: 'John', city: 'San Francisco' };

class UserName extends React.Component {
  render() {
    return <div>name: {this.props.name}</div>;
  }
}

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: props.initialCount};
    this.tick = this.tick.bind(this);
  render() {
    return <div>
        <h1>City: {this.props.user.city}</h1>
        <UserName name={this.props.user.name} />
      </div>;
  }
}
//React.render(<User user={user} />, mountNode);

export default User;
