import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions/action_creators';
import { FontIcon } from 'react-toolbox';
import { Row, Col } from 'react-flexbox-grid';
import ReactTooltip from 'react-tooltip';
import style from './style';
import data from './data.json';

export const ProgressTracker = React.createClass({
  mixins: [PureRenderMixin],
  getInitialState() {
    return { data };
  },
  render() {
    return (
      <div className={style.progressTracker}>
        <div className={style.header}>
          Progress Tracker
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
          {this.state.data.tableData.map((row, i) =>
            <div key={i}>
              <Row className={style.tableRow}>
                <Col xs={2}>{row.indicator}</Col>
                <Col xs={2}>{row.goal}</Col>
                <Col xs={2}>{row.baseline}</Col>
                <Col xs={2}>{row.change}</Col>
                <Col xs={2}><FontIcon value={row.trend} /></Col>                 
                {row.colourCode === 'red' ?
                  <div>
                    <a data-tip data-for='red'><Col xs={2}><FontIcon style={{ color: row.colourCode }} value="lens" /></Col></a>
                    <ReactTooltip id='red' type="error" place="right" effect="float">High Risk</ReactTooltip>
                  </div>
                : null } 
                {row.colourCode === 'green' ?
                  <div>
                    <a data-tip data-for='green'><Col xs={2}><FontIcon style={{ color: row.colourCode }} value="lens" /></Col></a>
                    <ReactTooltip id='green' type="success" place="right" effect="float">Low Risk</ReactTooltip>
                  </div>
                : null }
                {row.colourCode === 'yellow' ?
                  <div>
                    <a data-tip data-for='yellow'><Col xs={2}><FontIcon style={{ color: row.colourCode }} value="lens" /></Col></a>
                    <ReactTooltip id='yellow' type="warning" place="right" effect="float">Medium Risk</ReactTooltip>
                  </div>
                : null }          
              </Row>
            </div>
          )}
        </div>
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
)(ProgressTracker);
