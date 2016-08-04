import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import NavBar from './NavBar/NavBar';

export default React.createClass({
  propTypes: {
    children: React.PropTypes.element.isRequired
  },
  mixins: [PureRenderMixin],
  render() {
    return (
      <div>
        <NavBar />
        {this.props.children}
      </div>
    );
  }
});
