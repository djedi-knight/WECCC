import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Navigation from 'react-toolbox/lib/navigation';

import AlertSummaryTable from '../AlertSummarySection/AlertSummaryTable.jsx';



export default React.createClass({
  mixins: [PureRenderMixin],
  render() {
    return (
      <div>
        <AlertSummaryTable/>
      </div>
    );
  }
});
