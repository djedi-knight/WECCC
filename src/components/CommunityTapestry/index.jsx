import React from 'react';
import Fetch from 'react-fetch';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions/action_creators';
import { Row, Col } from 'react-flexbox-grid';
import ScoreBoxSimple from '../ScoreBoxSimple';
import style from './style';
import data from './data.json';
import { VictoryPie } from 'victory/dist/victory';

export const CommunityTapestry = React.createClass({
  propTypes: {
    title: React.PropTypes.string,
    pieCharts: React.PropTypes.array,
    scoreCards: React.PropTypes.array
  },
  mixins: [PureRenderMixin],
  getInitialState() {
    return { data };
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
    const labelStyle = { labels: { fill: 'white', fontSize: 9, padding: 50 } };
    const colorScale = [
      '#D85F49',
      '#F66D3B',
      '#D92E1D',
      '#D73C4C',
      '#FFAF59',
      '#E28300',
      '#F6A57F',
      '#FF0000'
    ];

    return (
      <div className={style.communityTapestry}>
        <div className={style.communityTapestryHeader}>
          {this.props.title}
        </div>
        <div className={style.pieChartContainer}>
          <VictoryPie
            style={labelStyle}
            data={this.getPieChartFor('community-tapestry-pie-chart')}
            colorScale={colorScale}
          />
        </div>
        <div className={style.subgroup}>
          <Row className={style.header}>
            <div className={style.title}>
              {this.getSubGroupFor('return-on-investment').title}
            </div>
          </Row>
          <Row className={style.body}>
            <Col xs={3} />
            <Col xs={3}>
              <ScoreBoxSimple
                title={this.getScoreCardFor('return-on-investment', 'social').title}
                score={this.getScoreCardFor('return-on-investment', 'social').score}
                trend={this.getScoreCardFor('return-on-investment', 'social').trend}
              />
            </Col>
            <Col xs={3}>
              <ScoreBoxSimple
                title={this.getScoreCardFor('return-on-investment', 'economic').title}
                score={this.getScoreCardFor('return-on-investment', 'economic').score}
                trend={this.getScoreCardFor('return-on-investment', 'economic').trend}
              />
            </Col>
            <Col xs={3} />
          </Row>
        </div>
      </div>
    );
  }
});

export const APIContainer = React.createClass({
  mixins: [PureRenderMixin],
  render() {
    return (
      <div>
        <Fetch url="http://localhost:8090/api/pages/community-tapestry-test-page">
          <CommunityTapestry />
        </Fetch>
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

export const CommunityTapestryContainer = connect(
  mapStateToProps,
  actionCreators
)(APIContainer);
