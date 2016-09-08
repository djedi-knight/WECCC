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
          {this.state.data.scoreCards.map((ScoreCard, i) =>
            <Col key={i} xs={3}>
              <ScoreBox
                title={ScoreCard.title}
                score={ScoreCard.score}
                peerScore={ScoreCard.peerScore}
              />
            </Col>
          )}
        </Row>
      </div>
    );
  }
});
