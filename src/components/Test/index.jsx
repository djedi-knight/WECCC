import React from 'react';
import ScoreCard from '../ScoreCard';

export const Test = React.createClass({
  render() {
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
