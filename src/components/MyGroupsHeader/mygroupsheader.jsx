import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions/action_creators';
import HealthOutcomesSection from './HealthOutcomesSection';
import MyGroupsDropDown from './MyGroupsDropDown';
import CareNeedsGroupTabBar from './CareNeedsGroupTabBar';

export default React.createClass({
  mixins: [PureRenderMixin],
  render() {
    return (
      <div className="MyGroupsHeader">
      <MyGroupsDropDown />
      <CareNeedsGroupTabBar />
      <HealthOutcomesSection />
      </div>
    );
  }
});
