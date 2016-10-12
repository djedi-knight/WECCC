import React from 'react';
import Fetch from 'react-fetch';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { FontIcon } from 'react-toolbox';
import { Row, Col } from 'react-flexbox-grid';
import ReactTooltip from 'react-tooltip';
import style from './style';
import config from './config.json';

export const ProgressTracker = React.createClass({
  propTypes: {
    title: React.PropTypes.string,
    data: React.PropTypes.array
  },
  mixins: [PureRenderMixin],
  getInitialState() {
    return { config };
  },
  getRows() {
    if (this.props.data) {
      return this.props.data;
    }

    return [];
  },
  getTrend(row) {
    return (
      <Col xs={2}>
        <FontIcon value={this.state.config.icons[row.trend]} />
      </Col>
    );
  },
  getColourCode(row) {
    return (
      <div>
        <a data-tip data-for={row.colourCode}>
          <Col xs={2}><FontIcon style={{ color: row.colourCode }} value="lens" /></Col>
        </a>
        <ReactTooltip
          id={row.colourCode} type={this.state.config.tooltips[row.colourCode].type}
          place="right"
          effect="float"
        >
          {this.state.config.tooltips[row.colourCode].title}
        </ReactTooltip>
      </div>
    );
  },
  render() {
    return (
      <div className={style.progressTracker}>
        <div className={style.header}>
          {this.props.title}
        </div>
        <div className={style.reportTable}>
          <Row className={style.tableHeader}>
            {this.state.config.tableHeaders.map((tableHeader, i) =>
              <Col key={i} xs={2}>{tableHeader}</Col>
            )}
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

export const ProgressTrackerContainer = React.createClass({
  propTypes: {
    route: React.PropTypes.object
  },
  mixins: [PureRenderMixin],
  getInitialState() {
    return { config };
  },
  getURL() {
    if (this.props.route.demoRoute) {
      return this.state.config.demoAPI;
    }

    return this.state.config.prodAPI;
  },
  render() {
    return (
      <div>
        <Fetch url={this.getURL()}>
          <ProgressTracker />
        </Fetch>
      </div>
    );
  }
});
