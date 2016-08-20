import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { FontIcon } from 'react-toolbox';
import { Row, Col } from 'react-flexbox-grid';
import AlertSummarySidebar from '../AlertSummarySidebar/AlertSummarySidebar';
import AlertSummaryTable from '../AlertSummaryTable/AlertSummaryTable';
import style from './style';

export default React.createClass({
  mixins: [PureRenderMixin],
  render() {
    return (
      <div className={style.alertSummarySection}>
        <Row className={style.header}>
          <FontIcon value="warning" />
          <div className={style.title}>
            Alert Summary
          </div>
        </Row>
        <Row>
          <Col xs={9}>
            <AlertSummaryTable />
          </Col>
          <Col xs={3}>
            <AlertSummarySidebar />
          </Col>
        </Row>
      </div>
    );
  }
});
