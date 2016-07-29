import React from 'react';

export default React.createClass({
  propTypes: {
    children: React.PropTypes.element.isRequired
  },
  render() {
    return this.props.children;
  }
});
