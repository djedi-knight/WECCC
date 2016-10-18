import React from 'react';
import Fetch from 'react-fetch';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { Row, Col } from 'react-flexbox-grid';
import { VictoryPie } from 'victory/dist/victory';
import ScoreBoxSimple from '../ScoreBoxSimple';
import config from './config.json';
import style from './style';

export const CommunityTapestry = React.createClass({
  propTypes: {
    title: React.PropTypes.string,
    pieCharts: React.PropTypes.array,
    scoreCards: React.PropTypes.array
  },
  mixins: [PureRenderMixin],
  getInitialState() {
    return { config };
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
  render() {
    return (
      <div className={style.communityTapestry}>
        <div className={style.communityTapestryHeader}>
          {this.props.title}
        </div>
        <div className={style.pieChartContainer}>
          <VictoryPie
            style={this.state.config.labelStyle}
            data={this.getPieChartFor(this.state.config.keys.pieChart)}
            colorScale={this.state.config.colourScale}
          />
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
