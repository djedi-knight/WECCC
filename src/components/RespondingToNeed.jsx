
import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/action_creators';
import { Button } from 'react-toolbox/lib/button';
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';

const dummyText = 'Three';


export default React.createClass({
  mixins: [PureRenderMixin],
  render() {
    return (
      <div className="MyGroupsHealthOutcome">
      <Card style={{width: '150px'}}>
    <CardTitle
      avatar="https://placeimg.com/80/80/animals"
      title="Responding to Need"
      subtitle="Top 3 Clinical Protocols"
    />
    <CardMedia
      aspectRatio="wide"
      image="https://placeimg.com/800/450/nature"
    />
    <CardTitle
      title="One"
      subtitle="Two"
    />
    <CardText>{dummyText}</CardText>
    <CardActions>
      <Button label="Peer 1" />
      <Button label="Peer 2" />
    </CardActions>
  </Card>
      </div>
    );
  }
});


