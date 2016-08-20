import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { Row, Col } from 'react-flexbox-grid';
import ScoreBox from '../ScoreBox/ScoreBox';
import style from './style';

export default React.createClass({
  mixins: [PureRenderMixin],
  render() {
    return (
      <div className={style.healthOutcomesSection}>
        <Row className={style.header}>
          <div className={style.title}>
            Health Outcomes for this Group
          </div>
        </Row>
        <Row className={style.body}>
          <Col xs={3}>
            <ScoreBox />
          </Col>
          <Col xs={3}>
            <ScoreBox />
          </Col>
          <Col xs={3}>
            <ScoreBox />
          </Col>
          <Col xs={3}>
            <ScoreBox />
          </Col>
        </Row>
      </div>
    );
  }
});
