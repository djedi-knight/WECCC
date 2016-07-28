import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Chip from 'react-toolbox/lib/chip';
import Avatar from 'react-toolbox/lib/avatar';

export default React.createClass({
  mixins: [PureRenderMixin],
  render() {
    return (
     <div className ="CareNeedsGroupTabBar">
    <Chip>
     <small>Light: 40%</small>
    </Chip>
      <Chip>
     <small>Moderate: 30%</small>
    </Chip>
      <Chip>
     <small>Complex: 20%</small>
    </Chip>
      <Chip>
     <small>EOL: 10%</small>
    </Chip>
  </div>
    );
  }
});
