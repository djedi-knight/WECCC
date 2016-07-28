import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Chip from 'react-toolbox/lib/chip';
import Avatar from 'react-toolbox/lib/avatar';
import MyGroupsHealthOutcome from './MyGroupsHealthOutcome';
import MyGroupsAreaOfFocusTable from './MyGroupsAreaOfFocusTable';
import RespondingToNeed from './RespondingToNeed';
import AreaOfFocusTitle from './AreaOfFocusTitle';
import ResponeToCareGivers from './ResponeToCareGivers';
import ThingsToConsiderCheckBox from './ThingsToConsiderCheckBox';
import AlertSummarySection from './AlertSummarySection';
import SideBar from './SideBar';
import AlertSummaryTitle from './AlertSummaryTitle';
export default React.createClass({
  mixins: [PureRenderMixin],
  render() {
    return (
     <div className ="CareNeedsGroupTabBar">
     <AlertSummaryTitle />
    <Chip>
     <small><AlertSummarySection/></small>
    </Chip>
      <Chip>
      <small><SideBar/></small>
    </Chip>
      <Chip>
    </Chip>
  </div>
    );
  }
});
