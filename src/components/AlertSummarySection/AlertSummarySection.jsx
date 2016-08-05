import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import AlertSummarySidebar from '../AlertSummarySidebar/AlertSummarySidebar.jsx';

export default React.createClass({
  mixins: [PureRenderMixin],
  render() {
    return (
      <AlertSummarySidebar />
    );
  }
});
