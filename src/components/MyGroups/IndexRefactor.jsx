import React from 'react';
import Fetch from 'react-fetch';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import MyGroupsHeader from '../MyGroupsHeader';
import CareNeedsGroupTabBar from '../CareNeedsGroupTabBar';
import AreasOfFocusSection from '../AreasOfFocusSection';
import AlertSummarySection from '../AlertSummarySection';
import ScoreCard from '../ScoreCard';
import config from './config.json';

export const MyGroupsSubgroups = React.createClass({
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
      <div className="MyHealthOutcomes">
        {this.props.keys.map((subGroup, x) =>
          <div key={x} >
            <Row>
              <div>
                {this.getSubGroupFor(subGroup.key).title}
              </div>
            </Row>
            <Row>
              {subGroup.scoreCards.map((scoreCard, y) =>
                <Col key={y} xs={3}>
                  <ScoreCard
                    title={this.getScoreCardFor(subGroup.key, scoreCard).title}
                    score={this.getScoreCardFor(subGroup.key, scoreCard).score}
                    trend={this.getScoreCardFor(subGroup.key, scoreCard).trend}
                    warning={this.getScoreCardFor(subGroup.key, scoreCard).warning}
                    peer
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

export const MyGroups = React.createClass({
  propTypes: {
    title: React.PropTypes.string,
    infoBoxes: React.PropTypes.array,
    scoreCards: React.PropTypes.array
  },
  mixins: [PureRenderMixin],
  getInitialState() {
    return {
      index: 0,
      config
    };
  },  
  handleTabChange(index) {
    this.setState({ index });
  },
  render() {
    return (
      <div className="MyGroups">
        <div>
          {this.props.title}
        </div>
        <div >
          <Tabs index={this.state.index} onChange={this.handleTabChange}>
            <Tab label={this.getLabelFor(this.state.config.keys.tabs[0])} >
              {this.state.config.emptyTabContent}
            </Tab>
            <Tab label={this.getLabelFor(this.state.config.keys.tabs[1])}>
              <MyGroupsSubgroups
                keys={this.state.config.keys.subGroups[0]}
                scoreCards={this.props.scoreCards}
              />
            </Tab>
            <Tab label={this.getLabelFor(this.state.config.keys.tabs[2])}>
              {this.state.config.emptyTabContent}
            </Tab>
            <Tab label={this.getLabelFor(this.state.config.keys.tabs[3])}>
              <MyGroupsSubgroups
                keys={this.state.config.keys.subGroups[1]}
                scoreCards={this.props.scoreCards}
              />
            </Tab>
          </Tabs>
        </div>
      </div>
    );
  }
});

export const MyGroupsContainer = React.createClass({
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
          <MyGroups />
        </Fetch>
      </div>
    );
  }
});
