import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { Row, Col } from 'react-flexbox-grid';
import { Button } from 'react-toolbox';
import ScoreCard from '../ScoreCard';
import ListBox from '../ListBox';
import style from './style';
import data from './data.json';
import config from './config.json';

export const ShowMoreSection = React.createClass({
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
    return (
      <div>
        <Row>
        {this.getKeysFor(this.props.subGroup).scoreCards.map((scoreCard, i) =>        
          <Col key={i} xs={4}>
            <ScoreCard
              title={this.getScoreCardFor(this.props.subGroup, scoreCard).title}
              score={this.getScoreCardFor(this.props.subGroup, scoreCard).score}
              peerScore={this.getScoreCardFor(this.props.subGroup, scoreCard).peerScore}
              warning= {this.getScoreCardFor(this.props.subGroup, scoreCard).warning}
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

export default React.createClass({
  mixins: [PureRenderMixin],
  getInitialState() {
    return { isShowMore: false };
  },
  handleToggle() {
    this.setState({ isShowMore: !this.state.isShowMore });
  },
  render() {
    return (
      <div className={style.AreasOfFocusBody} >
        <ListBox />
        {this.state.isShowMore ? <ShowMoreSection /> : null}
        <Button label="Show More/Less" onClick={this.handleToggle} />
      </div>
    );
  }
});
