import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import ReactTooltip from 'react-tooltip'

export default React.createClass({
  mixins: [PureRenderMixin],
  render() {
    return (
            <div>
      <a data-tip data-for='global'> REPLACE WITH WARNING </a>
<ReactTooltip id='global' aria-haspopup='true' role='example' place="right" type="warning" effect="float">
 <p> Caution </p>
 <ul>
   <li>There is an indication</li>
   <li>that your patient</li>
   <li>experience score is</li>
   <li>below the peer score</li>
 </ul>
</ReactTooltip>
</div>
    );
  }
});
