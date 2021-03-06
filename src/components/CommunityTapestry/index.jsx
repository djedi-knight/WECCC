import React from 'react';
import Fetch from 'react-fetch';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { Row, Col } from 'react-flexbox-grid';
import { VictoryPie } from 'victory/dist/victory';
import appConfig from '../../../config.json';
import config from './config.json';
import style from './style';

export const CommunityTapestry = React.createClass({
  propTypes: {
    title: React.PropTypes.string,
    pieCharts: React.PropTypes.array
  },
  mixins: [PureRenderMixin],
  getInitialState() {
    return {
      currentChartDetailSelection: 0,
      config
    };
  },
  getPieChartFor(key) {
    if (this.props.pieCharts) {
      const index = this.props.pieCharts.findIndex(pieChart => pieChart.key === key);

      return this.props.pieCharts[index].data;
    }

    return [];
  },
  getPieChartDetailsFor(key) {
    const pieChartData = this.getPieChartFor(key);
    if (pieChartData.length > 0) {
      return pieChartData[this.state.currentChartDetailSelection].details.data;
    }

    return [];
  },
  handleChartDetailSelectionChange(newSelection) {
    this.setState({ currentChartDetailSelection: newSelection });
  },
  render() {
    return (
      <div className={style.communityTapestry}>
        <div className={style.header}>
          {this.props.title}
        </div>
        <div className={style.subgroup}>
          <Row>
            <Col xs={12}>
              <div className={style.subHeader}>
                {this.state.config.chartDescriptionTitle}
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <div className={style.descriptionText}>
                {this.state.config.chartDescription1Text}
              </div>
              <div className={style.descriptionText}>
                {this.state.config.chartDescription2Text}
              </div>
            </Col>
          </Row>
        </div>
        <div className={style.pieChartContainer}>
          <Row>
            <Col xs={8}>
              <VictoryPie
                labelRadius={180}
                padding={10}
                data={this.getPieChartFor(this.state.config.keys.pieChart)}
                colorScale={this.state.config.colourScale}
                style={this.state.config.pieChartStyle}
                events={[{
                  target: 'data',
                  eventHandlers: {
                    onClick: () => [{
                      mutation: (props) => {
                        this.handleChartDetailSelectionChange(props.index);
                      }
                    }]
                  }
                }]}
              />
            </Col>
            <Col xs={4}>
              <div className={style.detailsTable}>
                <div className={style.subHeader}>
                  {this.state.config.chartDetails.title}
                </div>
                <br />
                <div className={style.reportTable}>
                  <Row className={style.tableHeader}>
                    {this.state.config.chartDetails.headers.map((header, x) =>
                      <Col key={x} xs={6}>{header}</Col>
                    )}
                  </Row>
                  {this.getPieChartDetailsFor(this.state.config.keys.pieChart).map((row, x) =>
                    <Row key={x} className={style.tableRow}>
                      <Col xs={6}>{row.indicator}</Col>
                      {row.values.map((value, y) =>
                        <Col key={y} xs={6}>{value}</Col>
                      )}
                    </Row>
                  )}
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
});

export const CommunityTapestryContainer = React.createClass({
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
          <CommunityTapestry />
        </Fetch>
      </div>
    );
  }
});
