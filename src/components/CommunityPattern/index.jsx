import React from 'react';
import Fetch from 'react-fetch';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { VictoryPie } from 'victory/dist/victory';
import { Row, Col } from 'react-flexbox-grid';
import { Dropdown } from 'react-toolbox';
import ScoreBoxSimple from '../ScoreBoxSimple';
import config from './config.json';
import style from './style';

export const CommunityPattern = React.createClass({
  propTypes: {
    title: React.PropTypes.string,
    pieCharts: React.PropTypes.array
  },
  mixins: [PureRenderMixin],
  getInitialState() {
    return {
      currentSelection: config.keys.selections[0].value,
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
  handleSelectionChange(newSelection) {
    this.setState({ currentSelection: newSelection });
  },
  render() {
    return (
      <div className={style.communityPattern}>
        <div className={style.header}>
          {this.props.title}
        </div>
        <Row>
          <Col xs={3}>
            <div className={style.subHeader}>
              {this.state.config.selectionTitle}
            </div>
            <Dropdown
              onChange={this.handleSelectionChange}
              source={this.state.config.keys.selections}
              value={this.state.currentSelection}
            />
          </Col>
          <Col xs={6}>
            <div className={style.subHeader}>
              {this.state.config.chartTitle}
            </div>
            <VictoryPie
              padding={100}
              labelRadius={50}
              data={this.getPieChartFor(this.state.currentSelection)}
              colorScale={this.state.config.colourScale}
              style={this.state.config.labelStyle}
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
          <Col xs={3}>
            <div className={style.subHeader}>
              {this.state.config.chartDetails.title}
            </div>
            <br />
            <div>
              <div className={style.reportTable}>
                <Row className={style.tableHeader}>
                  {this.state.config.chartDetails.headers.map((header, x) =>
                    <Col key={x} xs={4}>{header}</Col>
                  )}
                </Row>
                <div>
                  {this.getPieChartDetailsFor(this.state.currentSelection).map((row, x) =>
                    <Row key={x} className={style.tableRow}>
                      <Col xs={4}>{row.indicator}</Col>
                      {row.values.map((value, y) =>
                        <Col key={y} xs={4}>{value}</Col>
                      )}
                    </Row>
                  )}
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={6}>
            <div className={style.subHeader}>Quality of Life</div>
            <Row>
              <Col xs={4}>
                <ScoreBoxSimple title={"Community"} score={"A+"} trend={"up"} />
              </Col>
              <Col xs={4}>
                <ScoreBoxSimple title={"Subgroup"} score={"B"} trend={"down"} />
              </Col>
              <Col xs={4}>
                <ScoreBoxSimple title={"Equity Gap"} score={"-25"} trend={"down"} />
              </Col>
            </Row>
          </Col>
          <Col xs={6}>
            <div className={style.subHeader}>Caregiver Burden</div>
            <Row>
              <Col xs={4}>
                <ScoreBoxSimple title={"Community"} score={"D"} trend={"down"} />
              </Col>
              <Col xs={4}>
                <ScoreBoxSimple title={"Subgroup"} score={"C"} trend={"down"} />
              </Col>
              <Col xs={4}>
                <ScoreBoxSimple title={"Equity Gap"} score={"-10"} trend={"down"} />
              </Col>
            </Row>
          </Col>
        </Row>
        <div className={style.subHeader}>Reported Health</div>
        <Row>
          <Col xs={4}>
            <ScoreBoxSimple title={"Community"} score={"C"} trend={"down"} />
          </Col>
          <Col xs={4}>
            <ScoreBoxSimple title={"Subgroup"} score={"D"} trend={"down"} />
          </Col>
          <Col xs={4}>
            <ScoreBoxSimple title={"Equity Gap"} score={"-20"} trend={"down"} />
          </Col>
        </Row>
      </div>
    );
  }
});

export const CommunityPatternContainer = React.createClass({
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
          <CommunityPattern />
        </Fetch>
      </div>
    );
  }
});
