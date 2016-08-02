import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Chip from 'react-toolbox/lib/chip';
import Avatar from 'react-toolbox/lib/avatar';
import CapsTriggeredScoreBox from './CapsTriggeredScoreBox';
import HealthOutComesSideBar from './HealthOutComesSideBar';

export default React.createClass({
  mixins: [PureRenderMixin],
  render() {
    return (
     <div className ="CareNeedsGroupTabBar">
    <Chip>
     <small><CapsTriggeredScoreBox/></small>
    </Chip>
      <Chip>
     <small><CapsTriggeredScoreBox/></small>
    </Chip>
      <Chip>
     <small><CapsTriggeredScoreBox/></small>
    </Chip>
       <Chip>
     <small><HealthOutComesSideBar/></small>
    </Chip>
  </div>
    );
  }
});
