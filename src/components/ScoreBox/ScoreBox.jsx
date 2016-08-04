import React from 'react';
import Chip from 'react-toolbox/lib/chip';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { Button } from 'react-toolbox/lib/button';
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';
import ScoreBoxDialog from './ScoreBoxDialog';
import BelowAverageDialog from './BelowAverageDialog';
import ScoreBoxList from './ScoreBoxList';
import Avatar from 'react-toolbox/lib/avatar';
const dummyText = 'Lorem Ipsum is simply dummy text of';


export default React.createClass({
  mixins: [PureRenderMixin],
  render() {
    return (
      <div className="ScoreBox">
      <Card style={{width: '300px'}, {height: '300px'}}>
    <CardTitle
      title="Patient Experience"
      avatar ="https://s31.postimg.org/ihdkqz7ez/Information.png"
    />
    <ScoreBoxDialog />
    <BelowAverageDialog />
    <ScoreBoxList />
  </Card>
      </div>
    );
  }
});


