import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { Row, Col } from 'react-flexbox-grid';
import AreasOfFocusBody from '../AreasOfFocusBody/AreasOfFocusBody';
import AreasOfFocusSidebar from '../AreasOfFocusSidebar/AreasOfFocusSidebar';
import style from './style';

export default React.createClass({
  mixins: [PureRenderMixin],
  render() {
    return (
      <div className={style.areasOfFocusSection}>
        <Row className={style.header}>
          <div className={style.title}>
            Areas of Focus
          </div>
        </Row>
        <Row>
          <Col xs={9}>
            <AreasOfFocusBody />
          </Col>
          <Col xs={3}>
            <AreasOfFocusSidebar />
          </Col>
        </Row>
      </div>
    );
  }
});
