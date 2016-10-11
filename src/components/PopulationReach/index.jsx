import React from 'react';
import Fetch from 'react-fetch';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { Tab, Tabs } from 'react-toolbox';
import { Row, Col } from 'react-flexbox-grid';
import ScoreBoxSimple from '../ScoreBoxSimple';
import RegisteredCaregiversBox from '../RegisteredCaregiversBox';
import style from './style';
import config from './config.json';

export const PopulationReachSubgroups = React.createClass({
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
      <div className={style.populationReachSubgroups}>
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

export const PopulationReach = React.createClass({
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
  getInfoBoxFor(key) {
    if (this.props.infoBoxes) {
      const index = this.props.infoBoxes.findIndex(infoBox => infoBox.key === key);

      return this.props.infoBoxes[index];
    }

    return {};
  },
  getLabelFor(key) {
    if (this.props.infoBoxes) {
      const index = this.props.infoBoxes.findIndex(infoBox => infoBox.key === key);
      const infoBox = this.props.infoBoxes[index];

      return `${infoBox.value} ${infoBox.title}`;
    }

    return '';
  },
  handleTabChange(index) {
    this.setState({ index });
  },
  render() {
    return (
      <div className={style.populationReach}>
        <div className={style.populationReachHeader}>
          {this.props.title}
        </div>
        <div className={style.populationReachTabs}>
          <Tabs index={this.state.index} onChange={this.handleTabChange}>
            <Tab label={this.getLabelFor(this.state.config.keys.tabs[0])} disabled>
              {this.state.config.emptyTabContent}
            </Tab>
            <Tab label={this.getLabelFor(this.state.config.keys.tabs[1])}>
              <PopulationReachSubgroups
                keys={this.state.config.keys.subGroups1}
                scoreCards={this.props.scoreCards}
              />
            </Tab>
            <Tab label={this.getLabelFor(this.state.config.keys.tabs[2])} disabled>
              {this.state.config.emptyTabContent}
            </Tab>
            <Tab label={this.getLabelFor(this.state.config.keys.tabs[3])}>
              <PopulationReachSubgroups
                keys={this.state.config.keys.subGroups2}
                scoreCards={this.props.scoreCards}
              />
            </Tab>
          </Tabs>
          <RegisteredCaregiversBox data={this.getInfoBoxFor(this.state.config.keys.registered)} />
        </div>
      </div>
    );
  }
});

export const PopulationReachContainer = React.createClass({
  propTypes: {
    route: React.PropTypes.object
  },
  mixins: [PureRenderMixin],
  getInitialState() {
    return { config };
  },
  getURL() {
    if (this.props.route.testRoute) {
      return this.state.config.testAPI;
    }

    return this.state.config.prodAPI;
  },
  render() {
    return (
      <div>
        <Fetch url={this.getURL()}>
          <PopulationReach />
        </Fetch>
      </div>
    );
  }
});
