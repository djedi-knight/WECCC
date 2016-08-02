import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Chip from 'react-toolbox/lib/chip';
import Avatar from 'react-toolbox/lib/avatar';
import AreaOfFocusNavigation from './AreaOfFocusNavigation';
import HospitalizationsScoreBoxAndSafetyEventsListBox from './HospitalizationsScoreBoxAndSafetyEventsListBox';
import RespondingToNeedsSupportCareGiversSidebar from './RespondingToNeedsSupportCareGiversSidebar';
import ShowLess from './ShowLess';

export default React.createClass({
  mixins: [PureRenderMixin],
  render() {
    return (
     <div className ="AreaOfFocus">
     <AreaOfFocusNavigation />
     <RespondingToNeedsSupportCareGiversSidebar />
     <HospitalizationsScoreBoxAndSafetyEventsListBox />
     <ShowLess />
  </div>
    );
  }
});
