import React from 'react';
import AlertSummarySidebar from '../AlertSummarySidebar/AlertSummarySidebar';
import AlertSummaryTable from '../AlertSummaryTable/AlertSummaryTable';

export default React.createClass({
  render() {
    return (
      <div>
        <AlertSummaryTable />
        <AlertSummarySidebar />
      </div>
    );
  }
});
