
import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/action_creators';
import { Button } from 'react-toolbox/lib/button';
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';

const dummyText = 'Lorem Ipsum is simply dummy text of';


export default React.createClass({
  mixins: [PureRenderMixin],
  render() {
    return (
      <div className="MyGroupsHealthOutcome">
      <Card style={{width: '100px'}}>
    <CardTitle
      avatar="https://placeimg.com/80/80/animals"
      title="Avatar style title"
      subtitle="Patient Experience"
    />
    <CardMedia
      aspectRatio="wide"
      image="https://placeimg.com/800/450/nature"
    />
    <CardTitle
      title="Title goes here"
      subtitle="Subtitle here"
    />
    <CardText>{dummyText}</CardText>
    <CardActions>
      <Button label="Action 1" />
      <Button label="Action 2" />
    </CardActions>
  </Card>
      </div>
    );
  }
});


