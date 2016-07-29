import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Chip from 'react-toolbox/lib/chip';
import Avatar from 'react-toolbox/lib/avatar';
import HospitalizationsScoreBox from './HospitalizationsScoreBox';
import SafetyEventsListBox from './SafetyEventsListBox';

export default React.createClass({
  mixins: [PureRenderMixin],
  render() {
    return (
     <div className ="CareNeedsGroupTabBar">
    <Chip>
     <small><HospitalizationsScoreBox/></small>
    </Chip>
      <Chip>
     <small><SafetyEventsListBox/></small>
    </Chip>
  </div>
    );
  }
});
