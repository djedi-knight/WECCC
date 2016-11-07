import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { Row, Col } from 'react-flexbox-grid';
import data from './data.json';
import style from './style';
import ScoreCard from '../ScoreCard';

export default React.createClass({
  propTypes: {
    data: React.PropTypes.array
  },
  mixins: [PureRenderMixin],
  getInitialState() {
    return { data };
  },
  render() {
    return (
      <div className={style.healthOutcomesSection}>
        <Row className={style.header}>
          <div className={style.title}>
            Health Outcomes for this Group
          </div>
        </Row>
        <Row className={style.body}>
          {this.props.data.map((scoreCard, i) =>
            <Col key={i} xs={3}>
              <ScoreCard
                title={scoreCard.title}
                score={scoreCard.score}
                peerScore={scoreCard.peerScore}
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
