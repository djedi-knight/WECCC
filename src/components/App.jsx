import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { NavBarContainer } from './NavBar/NavBar';

export default React.createClass({
  propTypes: {
    children: React.PropTypes.element.isRequired
  },
  mixins: [PureRenderMixin],
  render() {
    return (
      <div>
        <NavBarContainer />
        {this.props.children}
      </div>
    );
  }
});
