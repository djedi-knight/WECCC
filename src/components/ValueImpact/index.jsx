import React from 'react';
import Fetch from 'react-fetch';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { Row, Col } from 'react-flexbox-grid';
import { Dropdown } from 'react-toolbox';
import { VictoryPie, VictoryLabel } from 'victory/dist/victory';
import ScoreBoxSimple from '../ScoreBoxSimple';
import AreasOfFocusSidebar from '../AreasOfFocusSidebar';
import style from './style';
import config from './config.json';

export const ValueImpact = React.createClass({
  propTypes: {
    title: React.PropTypes.string,
    pieCharts: React.PropTypes.array,
    scoreCards: React.PropTypes.array
  },
  mixins: [PureRenderMixin],
  getInitialState() {
    return {
      currentSelection: config.keys.selections[0].value,
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
  handleSelectionChange(newSelection) {
    this.setState({ currentSelection: newSelection });
  },
  render() {
    return (
      <div className={style.valueImpact}>
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
              {this.state.config.chartSectionTitle}
            </div>
            <VictoryPie
              style={this.state.config.labelStyle}
              data={this.getPieChartFor(this.state.currentSelection)}
              colorScale={this.state.config.colourScale}
            >
              <VictoryLabel />
            </VictoryPie>

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
          </Col>
          <Col xs={3}>
            <div className={style.subHeader}>
              {this.state.config.sidebarTitle}
            </div>
            <AreasOfFocusSidebar />
          </Col>
        </Row>
      </div>
    );
  }
});

export const ValueImpactContainer = React.createClass({
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
          <ValueImpact />
        </Fetch>
      </div>
    );
  }
});
