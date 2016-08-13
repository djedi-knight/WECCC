import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { Card, FontIcon, Tooltip, Link } from 'react-toolbox';
import theme from '../../theme/default';

const TooltipIcon = new Tooltip(FontIcon);

export default React.createClass({
  mixins: [PureRenderMixin],
  render() {
    return (
      <div className={theme.ScoreBox}>
        <Card style={{ width: '25%', height: '400px', border: '2px solid gray' }}>
          <p> Patient Experience <FontIcon value="info" /> </p>
          <h1><TooltipIcon style={{ color: '#FF0000' }} value="warning" tooltip="score popup" /> 3/15 </h1>
          <h1> (label/define?) </h1>
          <h1> <FontIcon value="person" /> Peer Comparison </h1>
          <h1> 5/10 </h1>
          <h1> <FontIcon value="open_in_browser" />Change Over Time</h1>
          <h1> UP</h1>
          <Link href="#/" label="Show Detail" />
        </Card>
      </div>
    );
  }
});
