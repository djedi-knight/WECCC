import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { Row, Col } from 'react-flexbox-grid';
import data from './data.json';
import style from './style';
import ScoreCard from '../ScoreCard';
import config from './config.json';

export default React.createClass({ 
  propTypes: {
    subGroup: React.PropTypes.string,
    scoreCards: React.PropTypes.array
  },
  mixins: [PureRenderMixin],
  getInitialState() {
    return { data, config };
  },
  getKeysFor(subGroupKey) {
    if (this.state.config) {
      const index = this.state.config.keys.subGroups.findIndex(subGroup => subGroup.key === subGroupKey);

      return this.state.config.keys.subGroups[index];
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
    console.log('subGroup: ' + this.props.subGroup);

    return (
      <div className={style.healthOutcomesSection}>
        <Row className={style.header}>
          <div className={style.title}>
            {this.state.config.title}
          </div>
        </Row>
        <Row className={style.body}>
         {this.getKeysFor(this.props.subGroup).scoreCards.map((scoreCard, x) =>
            <Col key={x} xs={3}>
              <ScoreCard
                title={this.getScoreCardFor(this.props.subGroup, scoreCard).title}
                score={this.getScoreCardFor(this.props.subGroup, scoreCard).score}
                peerScore={this.getScoreCardFor(this.props.subGroup, scoreCard).peerscore}
                warning={this.getScoreCardFor(this.props.subGroup, scoreCard).warning}
                trend={this.getScoreCardFor(this.props.subGroup, scoreCard).trend}
                showDetails={this.getScoreCardFor(this.props.subGroup, scoreCard).showDetails}
              />
            </Col>
          )}         
        </Row>
      </div>
    );
  }
});
