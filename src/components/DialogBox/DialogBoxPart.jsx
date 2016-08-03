import React from 'react';
import ReactDOM from 'react-dom';
import Portal from 'react-portal';

export default React.createClass ({
  render() {
    return (
      <div>
        {this.props.children}
        <p><button onClick={this.props.closePortal}>Close this</button></p>
      </div>
    );
  }
});
