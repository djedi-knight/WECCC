import React from 'react';
import Fetch from 'react-fetch';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { VictoryPie } from 'victory/dist/victory';
import { Row, Col } from 'react-flexbox-grid';
import { Dropdown } from 'react-toolbox';
import ScoreBoxSimple from '../ScoreBoxSimple';
import config from './config.json';
import style from './style';

export const CommunityPatternSubgroups = React.createClass({
  propTypes: {
    keys: React.PropTypes.array,
    scoreCards: React.PropTypes.array
  },
  mixins: [PureRenderMixin],
  getInitialState() {
    return { config };
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
  render() {
    return (
      <div className={style.communityPatternSubgroups}>
        {this.props.keys.map((subGroup, x) =>
          <div key={x} className={style.subgroup}>
            <Row className={style.header}>
              <div className={style.title}>
                {this.getSubGroupFor(subGroup.key).title}
              </div>
            </Row>
            <Row className={style.body}>
              {subGroup.scoreCards.map((scoreCard, y) =>
                <Col key={y} xs={3}>
                  <ScoreBoxSimple
                    title={this.getScoreCardFor(subGroup.key, scoreCard).title}
                    score={this.getScoreCardFor(subGroup.key, scoreCard).score}
                    trend={this.getScoreCardFor(subGroup.key, scoreCard).trend}
                  />
                </Col>
              )}
            </Row>
          </div>
        )}
      </div>
    );
  }
});

export const CommunityPattern = React.createClass({
  propTypes: {
    title: React.PropTypes.string,
    pieCharts: React.PropTypes.array,
    scoreCards: React.PropTypes.array
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
  getSubGroupKeysFor(value) {
    const index = this.state.config.keys.selections.findIndex(selection => selection.value === value);

    return this.state.config.keys.subGroups[index];
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
        <CommunityPatternSubgroups
          keys={this.getSubGroupKeysFor(this.state.currentSelection)}
          scoreCards={this.props.scoreCards}
        />
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
