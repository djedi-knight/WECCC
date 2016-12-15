import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { Row, Col } from 'react-flexbox-grid';
import ScoreCard from '../ScoreCard';
import config from './config.json';
import style from './style';

export default React.createClass({
  propTypes: {
    scoreCards: React.PropTypes.array
  },
  mixins: [PureRenderMixin],
  getInitialState() {
    return { config };
  },
  render() {
    return (
      <div className={style.healthOutcomesSection}>
        <Row className={style.header}>
          <div className={style.title}>
            {this.state.config.title}
          </div>
        </Row>
        <Row className={style.body}>
         {this.props.scoreCards.map((scoreCard, x) =>
           <Col key={x} xs={3}>
             <ScoreCard
               title={scoreCard.title}
               score={scoreCard.score}
               peerScore={scoreCard.peerscore}
               warning={scoreCard.warning}
               trend={scoreCard.trend}
               showDetails={scoreCard.showDetails}
             />
           </Col>
          )}
        </Row>
      </div>
    );
  }
});
