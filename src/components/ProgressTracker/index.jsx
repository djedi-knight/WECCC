import React from 'react';
import Fetch from 'react-fetch';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { FontIcon } from 'react-toolbox';
import { Row, Col } from 'react-flexbox-grid';
import ReactTooltip from 'react-tooltip';
import config from './config.json';
import appConfig from '../../../config.json';
import style from './style';

export const ProgressTracker = React.createClass({
  propTypes: {
    title: React.PropTypes.string,
    data: React.PropTypes.array
  },
  mixins: [PureRenderMixin],
  getInitialState() {
    return { config };
  },
  getData() {
    if (this.props.data) {
      return this.props.data;
    }

    return [];
  },
  getTrend(row) {
    if (row.trend) {
      return (
        <Col xs={2}>
          <FontIcon value={this.state.config.icons[row.trend]} />
        </Col>
      );
    }

    return (
      <Col xs={2} />
    );
  },
  getColourCode(row) {
    if (row.colourCode) {
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
    }

    return (
      <Col xs={2} />
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
            {this.state.config.tableHeaders.map((tableHeader, x) =>
              <Col key={x} xs={2}>{tableHeader}</Col>
            )}
          </Row>
            {this.getData().map((data, x) =>
              <div key={x}>
                <Row className={style.tableHeader}>{data.header}</Row>
                {data.rows.map((row, y) =>
                  <div key={y}>
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
    return {
      appConfig,
      config
    };
  },
  getURL() {
    if (this.props.route.demoRoute) {
      return this.state.appConfig.servers.dev.concat(this.state.config.demoAPI);
    }

    return this.state.appConfig.servers.prod.concat(this.state.config.prodAPI);
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
