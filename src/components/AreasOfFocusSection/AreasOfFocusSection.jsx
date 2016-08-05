import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import AreasOfFocusSidebar from '../AreasOfFocusSidebar/AreasOfFocusSidebar';

export default React.createClass({
  mixins: [PureRenderMixin],
  render() {
    return (
      <AreasOfFocusSidebar />
    );
  }
});
