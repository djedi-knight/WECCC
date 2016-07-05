import React from 'react';

class HelloReact extends React.Component {
  render() {
    return <div>Hello {this.props.name}</div>;
  }
}

export default HelloReact;
