import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Chip from 'react-toolbox/lib/chip';
import Avatar from 'react-toolbox/lib/avatar';
import MyGroupsHealthOutcome from './MyGroupsHealthOutcome';
import ShowLess from './ShowLess';

export default React.createClass({
  mixins: [PureRenderMixin],
  render() {
    return (
     <div className ="CareNeedsGroupTabBar">
    <Chip>
     <small><MyGroupsHealthOutcome/></small>
    </Chip>
      <Chip>
     <small><MyGroupsHealthOutcome/></small>
    </Chip>
      <Chip>
     <small><MyGroupsHealthOutcome/></small>
    </Chip>
    <ShowLess />
  </div>
    );
  }
});
