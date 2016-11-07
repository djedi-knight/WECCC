import React from 'react';
import Fetch from 'react-fetch';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import ScoreCard from '../ScoreCard';

export const Test = React.createClass({
  mixins: [PureRenderMixin],
  render() {
    console.log(this.props);
    return (
      <div>
        <ScoreCard />
        <ScoreCard
          title="Government"
          score="A+"
        />
        <ScoreCard
          title="Safety"
          score="93%"
          trend="arrow_upward"
        />
        <ScoreCard
          title="Transportation"
          score="C-"
          peerScore="A+"
          trend="arrow_downward"
        />
        <ScoreCard
          title="Arts & Culture"
          score="B-"
          peerScore="B+"
          trend="arrow_forward"
          showDetails
          warning
        />
      </div>
    );
  }
});

export const TestContainer = React.createClass({
  mixins: [PureRenderMixin],
  render() {
    return (
      <div>
        <Fetch url="http://localhost:8090/api">
          <Test test="works" />
        </Fetch>
      </div>
    );
  }
});
