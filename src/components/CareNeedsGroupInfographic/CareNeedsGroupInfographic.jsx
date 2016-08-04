import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Navigation from 'react-toolbox/lib/navigation';
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';
import Button from 'react-toolbox/lib/button';

const dummyText = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.';

export default React.createClass({
  mixins: [PureRenderMixin],
  render() {
    return (
      <div className="CareNeedsGroupInfographic">
    <Card style={{width: '350px'}}>
    <CardTitle
      avatar="https://placeimg.com/80/80/animals"
      title="4 cards go here just style them."
      subtitle="Light moderate and complex"
    />
    <CardMedia
      aspectRatio="wide"
      image="https://placeimg.com/800/450/nature"
    />
    <CardTitle
      title="4 Cards for light moderate and complex"
      subtitle="Life"
    />
    <CardText>{dummyText}</CardText>
      <Button label="Action 1" />
      <Button label="Action 2" />
  </Card>
      </div>
    );
  }
});


function mapStateToProps(state) {
  return {
       test: 'Works!',
    state
  };
}
