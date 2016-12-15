import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { CareNeedsGroupTabBarContainer } from '../CareNeedsGroupTabBar';

export const Test = React.createClass({
  mixins: [PureRenderMixin],
  render() {
    return (
      <div>
        <CareNeedsGroupTabBarContainer />
      </div>
    );
  }
});

export const TestContainer = React.createClass({
  mixins: [PureRenderMixin],
  render() {
    return (
      <div>
        <Test />
      </div>
    );
  }
});
