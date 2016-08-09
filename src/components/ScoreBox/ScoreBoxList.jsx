import React from 'react';
import Link from 'react-toolbox/lib/link';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { Card, CardTitle } from 'react-toolbox/lib/card';
import mui from 'material-ui';
import AlarmIcon from 'react-material-icons/icons/action/lock';
import FontIcon from 'react-toolbox/lib/font_icon';
import { List, ListItem, ListSubHeader, ListDivider, ListCheckbox } from 'react-toolbox/lib/list';

export default React.createClass({
mixins: [PureRenderMixin],
  render () {
    return (
  <div>
 <nav>
   <List selectable ripple>
    <ListItem
      caption='Patient Experience'
      rightIcon='info'
      value='info'
    />
   <h10><ListItem
      caption='2/10'
      leftIcon='info'
      legend="(label/define?)"
      value='info'
    /></h10>
     <h10><ListItem
      caption='Peer Comparison'
      leftIcon='open_in_browser'
      rightIcon='info'
      value='info'
    /></h10>
    <h10><ListItem
      caption='Change Over Time'
      leftIcon='add'
      rightIcon='info'
      value='info'
    /></h10>
      <ListItem
      caption='Show Detail'
    />
    </List>
    <p> Patient
    Experience <FontIcon value='info' /> </p>
    <h1> <FontIcon value='info' /> 3/15</h1>
    <h2> (label/define?) </h2>
    <p1> <FontIcon value='person'/>Peer Comparison</p1>
    <p2> 5/10 </p2>
    <p1> <FontIcon value='open_in_browser'/>Change Over Time</p1>
    <p3> UP</p3>
    <Link href="#/components/link" label="Show Detail"/>
  </nav>
  </div>

);
}
});
