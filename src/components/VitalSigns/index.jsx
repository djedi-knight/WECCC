import React from 'react';
import Fetch from 'react-fetch';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { RadioButton, RadioGroup } from 'react-toolbox';
import { Row, Col } from 'react-flexbox-grid';
import config from './config.json';
import style from './style';
import ScoreCard from '../ScoreCard';

export const VitalSignsSubgroup = React.createClass({
  propTypes: {
    subGroup: React.PropTypes.string,
    scoreCards: React.PropTypes.array
  },
  mixins: [PureRenderMixin],
  getInitialState() {
    return { config };
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
      <div style={style.vitalSignsSubgroups}>
        <Row className={style.body}>
          {this.getKeysFor(this.props.subGroup).scoreCards.map((scoreCard, x) =>
            <Col key={x} xs={2}>
              <ScoreCard
                title={this.getScoreCardFor(this.props.subGroup, scoreCard).title}
                score={this.getScoreCardFor(this.props.subGroup, scoreCard).score}
                trend={this.getScoreCardFor(this.props.subGroup, scoreCard).trend}
              />
            </Col>
          )}
        </Row>
      </div>
    );
  }
});

export const VitalSigns = React.createClass({
  propTypes: {
    title: React.PropTypes.string,
    scoreCards: React.PropTypes.array
  },
  mixins: [PureRenderMixin],
  getInitialState() {
    return {
      selectedSubgroup: config.keys.radioButtons[0],
      config
    };
  },
  getSubGroupFor(key) {
    if (this.props.scoreCards) {
      const index = this.props.scoreCards.findIndex(subGroup => subGroup.key === key);

      return this.props.scoreCards[index];
    }

    return {};
  },
  handleSelectionChange(newSelection) {
    this.setState({ selectedSubgroup: newSelection });
  },
  render() {
    return (
      <div className={style.vitalSigns}>
        <div className={style.vitalSignsHeader}>
          {this.props.title}
        </div>
        <RadioGroup value={this.state.selectedSubgroup} onChange={this.handleSelectionChange}>
          {this.state.config.keys.radioButtons.map((radioButton, x) =>
            <RadioButton key={x} label={this.getSubGroupFor(radioButton).title} value={radioButton} />
          )}
        </RadioGroup>
        {this.state.config.keys.radioButtons.map((radioButton, x) => (
          this.state.selectedSubgroup === radioButton ?
            <VitalSignsSubgroup
              key={x}
              subGroup={radioButton}
              scoreCards={this.props.scoreCards}
            />
            : null
        ))}
        <div className={style.vitalSignsReportLink}>
          <a href={this.state.config.reportLink.href}>
            {this.state.config.reportLink.title}
          </a>
        </div>
      </div>
    );
  }
});

export const VitalSignsContainer = React.createClass({
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
          <VitalSigns />
        </Fetch>
      </div>
    );
  }
});
