import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { Button } from 'react-toolbox/lib/button';
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';
import ScoreBoxDialog from './ScoreBoxDialog';
import BelowAverageDialog from './BelowAverageDialog';
import ScoreBoxList from './ScoreBoxList';

const dummyText = 'Lorem Ipsum is simply dummy text of';


export default React.createClass({
  mixins: [PureRenderMixin],
  render() {
    return (
      <div className="ScoreBox">
      <Card style={{width: '300px'}, {height: '300px'}}>
    <CardTitle
      avatar="http://placeimg.com/80/80/tech/grayscale"
      title="Patient Experience"
    />
    <ScoreBoxDialog />
    <BelowAverageDialog />
    <ScoreBoxList />
  </Card>
      </div>
    );
  }
});


