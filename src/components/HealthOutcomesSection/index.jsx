import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { Row, Col } from 'react-flexbox-grid';
import ScoreBox from '../ScoreBox';
import style from './style';
import data from './data.json';

export default React.createClass({
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
          {this.state.data.scoreCards.map((scoreCard, i) =>
            <Col key={i} xs={3}>
              <ScoreBox
                title={scoreCard.title}
                score={scoreCard.score}
                peerScore={scoreCard.peerScore}
                warning={scoreCard.warning}
                trend={scoreCard.trend}
              />
            </Col>
          )}
        </Row>
      </div>
    );
  }
});
