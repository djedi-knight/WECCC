import React from 'react';
import Fetch from 'react-fetch';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { VictoryPie } from 'victory/dist/victory';
import { Row, Col } from 'react-flexbox-grid';
import { Dropdown } from 'react-toolbox';
import data from './data.json';
import ScoreBoxSimple from '../ScoreBoxSimple';
import config from './config.json';
import tableData from './tableData.json';
import style from './style';

export const CommunityPattern = React.createClass({
  propTypes: {
    title: React.PropTypes.string
  },
  mixins: [PureRenderMixin],
  getInitialState() {
    return {
      currentSelection: config.keys.selections[0].value,
      selectedChartDetails: 0,
      tableData,
      data,
      config
    };
  },
  handleChartDetailsSelectionChange(newSelection) {
    this.setState({ selectedChartDetails: newSelection });
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
              data={this.state.data.pieData}
              colorScale={this.state.config.colourScale}
              style={this.state.config.labelStyle}
              events={[{
                target: 'data',
                eventHandlers: {
                  onClick: () => [{
                    mutation: (props) => {
                      this.handleChartDetailsSelectionChange(props.index);
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
                  <Row className={style.tableRow}>
                    <Col xs={4}>{this.state.tableData.data[this.state.selectedChartDetails].indicator}</Col>
                    <Col xs={4}>{this.state.tableData.data[this.state.selectedChartDetails].general}</Col>
                    <Col xs={4}>{this.state.tableData.data[this.state.selectedChartDetails].subgroup}</Col>
                  </Row>
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
