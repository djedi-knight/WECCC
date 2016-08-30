import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { NavBarContainer } from '../NavBar';

export const AgencyDashboardContainer = React.createClass({
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

export const PublicDashboardContainer = React.createClass({
  propTypes: {
    children: React.PropTypes.element.isRequired
  },
  mixins: [PureRenderMixin],
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
});
