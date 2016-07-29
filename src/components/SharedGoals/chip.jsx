import Chip from 'react-toolbox/lib/chip';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import React from 'react';

export default React.createClass({
  mixins: [PureRenderMixin],

  render(){
    return(
      <div>
        <Chip>OPTIMIZE<br/> RESOURCES</Chip>
      </div>
    );
  }
});