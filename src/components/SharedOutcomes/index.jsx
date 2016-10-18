import React from 'react';
import Fetch from 'react-fetch';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { RadioButton, RadioGroup } from 'react-toolbox';
import { Row, Col } from 'react-flexbox-grid';
import ScoreBoxSimple from '../ScoreBoxSimple';
import RegisteredCaregiversBox from '../RegisteredCaregiversBox';
import config from './config.json';
import style from './style';

export const SharedOutcomesSubgroup = React.createClass({
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
      <div style={style.sharedOutcomesSubgroups}>
        <Row className={style.body}>
          {this.getKeysFor(this.props.subGroup).scoreCards.map((scoreCard, x) =>
            <Col key={x} xs={4}>
              <ScoreBoxSimple
                title={this.getScoreCardFor(this.props.subGroup, scoreCard).title}
                score={this.getScoreCardFor(this.props.subGroup, scoreCard).score}
              />
            </Col>
          )}
        </Row>
      </div>
    );
  }
});

export const SharedOutcomes = React.createClass({
  propTypes: {
    title: React.PropTypes.string,
    infoBoxes: React.PropTypes.array,
    scoreCards: React.PropTypes.array
  },
  mixins: [PureRenderMixin],
  getInitialState() {
    return {
      selectedSubgroup: config.keys.radioButtons[0],
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
  getSubGroupFor(key) {
    if (this.props.scoreCards) {
      const index = this.props.scoreCards.findIndex(subGroup => subGroup.key === key);

      return this.props.scoreCards[index];
    }

    return {};
  },
  selectSubgroup(selectedSubgroup) {
    this.setState({ selectedSubgroup });
  },
  render() {
    return (
      <div className={style.sharedOutcomes}>
        <div className={style.sharedOutcomesHeader}>
          {this.props.title}
        </div>
        <RadioGroup value={this.state.selectedSubgroup} onChange={this.selectSubgroup}>
          {this.state.config.keys.radioButtons.map((radioButton, x) =>
            <RadioButton key={x} label={this.getSubGroupFor(radioButton).title} value={radioButton} />
          )}
        </RadioGroup>
        <RegisteredCaregiversBox data={this.getInfoBoxFor(this.state.config.keys.registered)} />
        {this.state.config.keys.radioButtons.map((radioButton, x) => (
          this.state.selectedSubgroup === radioButton ?
            <SharedOutcomesSubgroup
              key={x}
              subGroup={radioButton}
              scoreCards={this.props.scoreCards}
            />
            : null
        ))}
      </div>
    );
  }
});

export const SharedOutcomesContainer = React.createClass({
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
          <SharedOutcomes />
        </Fetch>
      </div>
    );
  }
});
