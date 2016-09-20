import React from 'react';
import Fetch from 'react-fetch';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions/action_creators';
import { FontIcon } from 'react-toolbox';
import { Row, Col } from 'react-flexbox-grid';
import ReactTooltip from 'react-tooltip';
import style from './style';
import data from './data.json';

export const ProgressTracker = React.createClass({
  propTypes: {
    title: React.PropTypes.string,
    data: React.PropTypes.array
  },
  mixins: [PureRenderMixin],
  getInitialState() {
    return { data };
  },
  getRows() {
    if (this.props.data) {
      return this.props.data;
    }
    return [];
  },
  getTrend(row) {
    if (row.trend === 'UP') {
      return (
        <Col xs={2}><FontIcon value="trending_up" /></Col>
      );
    } else if (row.trend === 'DOWN') {
      return (
        <Col xs={2}><FontIcon value="trending_down" /></Col>
      );
    } else if (row.trend === 'NONE') {
      return (
        <Col xs={2}><FontIcon value="arrow_forward" /></Col>
      );
    }
    return null;
  },
  getColourCode(row) {
    if (row.colourCode === 'RED') {
      return (
        <div>
          <a data-tip data-for="red">
            <Col xs={2}><FontIcon style={{ color: row.colourCode }} value="lens" /></Col>
          </a>
          <ReactTooltip id="red" type="error" place="right" effect="float">High Risk</ReactTooltip>
        </div>
      );
    } else if (row.colourCode === 'YELLOW') {
      return (
        <div>
          <a data-tip data-for="yellow">
            <Col xs={2}><FontIcon style={{ color: row.colourCode }} value="lens" /></Col>
          </a>
          <ReactTooltip id="yellow" type="warning" place="right" effect="float">Medium Risk</ReactTooltip>
        </div>
      );
    } else if (row.colourCode === 'GREEN') {
      return (
        <div>
          <a data-tip data-for="green">
            <Col xs={2}><FontIcon style={{ color: row.colourCode }} value="lens" /></Col>
          </a>
          <ReactTooltip id="green" type="success" place="right" effect="float">Low Risk</ReactTooltip>
        </div>
      );
    }
    return null;
  },
  render() {
    return (
      <div className={style.progressTracker}>
        <div className={style.header}>
          {this.props.title}
        </div>
        <div className={style.reportTable}>
          <Row className={style.tableHeader}>
            <Col xs={2}>INDICATOR</Col>
            <Col xs={2}>GOAL</Col>
            <Col xs={2}>BASELINE</Col>
            <Col xs={2}>CHANGE</Col>
            <Col xs={2}>TREND</Col>
            <Col xs={2}>COLOURCODE</Col>
          </Row>
          {this.getRows().map((row, i) =>
            <div key={i}>
              <Row className={style.tableRow}>
                <Col xs={2}>{row.indicator}</Col>
                <Col xs={2}>{row.goal}</Col>
                <Col xs={2}>{row.baseline}</Col>
                <Col xs={2}>{row.change}</Col>
                {this.getTrend(row)}
                {this.getColourCode(row)}
              </Row>
            </div>
          )}
        </div>
      </div>
    );
  }
});

export const APIContainer = React.createClass({
  mixins: [PureRenderMixin],
  render() {
    return (
      <div>
        <Fetch url="http://localhost:8090/api/reports/progress-tracker-test-report">
          <ProgressTracker />
        </Fetch>
      </div>
    );
  }
});

function mapStateToProps(state) {
  return {
    test: 'Works!',
    state
  };
}

export const ProgressTrackerContainer = connect(
  mapStateToProps,
  actionCreators
)(APIContainer);
