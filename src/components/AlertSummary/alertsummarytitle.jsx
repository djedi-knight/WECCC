import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Navigation from 'react-toolbox/lib/navigation';
import Link from 'react-toolbox/lib/link';
import { themr } from 'react-css-themr';
import AlertSummarySection from './AlertSummarySection';
const actions = [
  { label: 'Category', raised: true},
  { label: 'Outcome', raised: true},
  { label: 'Notes', raised: true}
];

export default React.createClass({
  mixins: [PureRenderMixin],
  render() {
    return (
      <div className="MyGroupsNavigation">
         <Navigation type='horizontal' actions={actions} />
    <Navigation type='horizontal'>
    </Navigation>
      <AlertSummarySection />
      </div>
    );
  }
});
