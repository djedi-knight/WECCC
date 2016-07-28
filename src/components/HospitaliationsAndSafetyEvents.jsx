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

export default React.createClass({
  mixins: [PureRenderMixin],
  render() {
    return (
     <div className ="CareNeedsGroupTabBar">
     <AreaOfFocusTitle />
    <Chip>
     <small><ResponeToCareGivers/></small>
    </Chip>
      <Chip>
     <small><RespondingToNeed/></small>
    </Chip>
  </div>
    );
  }
});
