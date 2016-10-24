import React from 'react';
import Fetch from 'react-fetch';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { Row, Col } from 'react-flexbox-grid';
import { VictoryPie } from 'victory/dist/victory';
import ScoreBoxSimple from '../ScoreBoxSimple';
import config from './config.json';
import tableData from './tableData.json';
import style from './style';

export const CommunityTapestry = React.createClass({
  propTypes: {
    title: React.PropTypes.string,
    pieCharts: React.PropTypes.array,
    scoreCards: React.PropTypes.array
  },
  mixins: [PureRenderMixin],
  getInitialState() {
    return {
      currentChartDetailSelection: 0,
      tableData,
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
  getSubGroupFor(key) {
    if (this.props.scoreCards) {
      const index = this.props.scoreCards.findIndex(subGroup => subGroup.key === key);

      return this.props.scoreCards[index];
    }

    return {};
  },
  getScoreCardFor(subGroupKey, scoreCardKey) {
    const subGroup = this.getSubGroupFor(subGroupKey);
    if (subGroup.list) {
      const index = subGroup.list.findIndex(scoreCard => scoreCard.key === scoreCardKey);

      return subGroup.list[index];
    }

    return {};
  },
  handleChartDetailSelectionChange(newSelection) {
    this.setState({ currentChartDetailSelection: newSelection });
  },
  render() {
    return (
      <div className={style.communityTapestry}>
        <div className={style.communityTapestryHeader}>
          {this.props.title}
        </div>
        <div className={style.subgroup}>
          <Row className={style.header}>
            <div className={style.title}>
              {this.state.config.chartDescriptionTitle}
            </div>
          </Row>
          <Row >
            <div className={style.descriptionText}>
              <br />
              {this.state.config.chartDescriptionText}
            </div>
          </Row>
        </div>
        <div className={style.pieChartContainer}>
          <Row>
            <Col xs={2} />
            <Col xs={5}>
              <VictoryPie
                labelRadius={120}
                padding={20}
                style={this.state.config.labelStyle}
                data={this.getPieChartFor(this.state.config.keys.pieChart)}
                colorScale={this.state.config.colourScale}
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
                      <Col key={x} xs={4}>{header}</Col>
                    )}
                  </Row>
                  {this.getPieChartDetailsFor(this.state.config.keys.pieChart).map((row, x) =>
                    <Row key={x} className={style.tableRow}>
                      <Col xs={4}>{row.indicator}</Col>
                      {row.values.map((value, y) =>
                        <Col key={y} xs={4}>{value}</Col>
                      )}
                    </Row>
                  )}
                  {/*
                  <div>
                    <Row className={style.tableRow}>
                      <Col xs={4}>{this.state.tableData.data[this.state.selectedChartDetails].Heading1}</Col>
                      <Col xs={4}>{this.state.tableData.data[this.state.selectedChartDetails].Heading2}</Col>
                      <Col xs={4}>{this.state.tableData.data[this.state.selectedChartDetails].Heading3}</Col>
                    </Row>
                  </div>
                  */}
                </div>
              </div>
            </Col>
            <Col xs={1} />
          </Row>
        </div>
        <div className={style.subgroup}>
          <Row className={style.header}>
            <div className={style.title}>
              {this.getSubGroupFor(this.state.config.keys.subGroup.key).title}
            </div>
          </Row>
          <Row className={style.body}>
            {this.state.config.keys.subGroup.scoreCards.map((scoreCard, x) =>
              <Col key={x} xs={3}>
                <ScoreBoxSimple
                  title={this.getScoreCardFor(this.state.config.keys.subGroup.key, scoreCard).title}
                  score={this.getScoreCardFor(this.state.config.keys.subGroup.key, scoreCard).score}
                  trend={this.getScoreCardFor(this.state.config.keys.subGroup.key, scoreCard).trend}
                />
              </Col>
            )}
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
          <CommunityTapestry />
        </Fetch>
      </div>
    );
  }
});
