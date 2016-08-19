import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import AlertSummarySidebar from '../AlertSummarySidebar/AlertSummarySidebar';
import AlertSummaryTable from '../AlertSummaryTable/AlertSummaryTable';

export default React.createClass({
  mixins: [PureRenderMixin],
  render() {
    return (
      <div>
        <AlertSummaryTable />
        <AlertSummarySidebar />
      </div>
    );
  }
});
