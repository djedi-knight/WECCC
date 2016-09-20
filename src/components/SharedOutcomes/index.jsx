import React from 'react';
import Fetch from 'react-fetch';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions/action_creators';
import { RadioButton, RadioGroup } from 'react-toolbox';
import { Row, Col } from 'react-flexbox-grid';
import ScoreBoxSimple from '../ScoreBoxSimple';
import RegisteredCaregiversBox from '../RegisteredCaregiversBox';
import style from './style';
import data from './data.json';

export const SharedOutcomesSubgroup = React.createClass({
  propTypes: {
    scoreCards: React.PropTypes.array
  },
  mixins: [PureRenderMixin],
  getInitialState() {
    return { data };
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
          <Col xs={4}>
            <ScoreBoxSimple
              title={this.getScoreCardFor('people-subgroup', 'quality-of-life').title}
              score={this.getScoreCardFor('people-subgroup', 'quality-of-life').score}
            />
          </Col>
          <Col xs={4}>
            <ScoreBoxSimple
              title={this.getScoreCardFor('people-subgroup', 'experience').title}
              score={this.getScoreCardFor('people-subgroup', 'experience').score}
            />
          </Col>
          <Col xs={4}>
            <ScoreBoxSimple
              title={this.getScoreCardFor('people-subgroup', 'expected').title}
              score={this.getScoreCardFor('people-subgroup', 'expected').score}
            />
          </Col>
          <Col xs={4}>
            <ScoreBoxSimple
              title={this.getScoreCardFor('people-subgroup', 'burden').title}
              score={this.getScoreCardFor('people-subgroup', 'burden').score}
            />
          </Col>
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
    return { value: 'people' };
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
  handleChange(value) {
    this.setState({ value });
  },
  render() {
    return (
      <div className={style.sharedOutcomes}>
        <div className={style.sharedOutcomesHeader}>
          {this.props.title}
        </div>
        <RadioGroup name="outcome" value={this.state.value} onChange={this.handleChange}>
          <RadioButton label={this.getSubGroupFor('people-subgroup').title} value="people" />
          <RadioButton label={this.getSubGroupFor('core-partners-subgroup').title} value="core-partners" />
        </RadioGroup>
        <RegisteredCaregiversBox data={this.getInfoBoxFor('registered-caregivers')} />
        {this.state.value === 'people' ?
          <SharedOutcomesSubgroup scoreCards={this.props.scoreCards} />
          : null
        }
        {this.state.value === 'core-partners' ?
          <SharedOutcomesSubgroup />
          : null
        }
      </div>
    );
  }
});

export const APIContainer = React.createClass({
  mixins: [PureRenderMixin],
  render() {
    return (
      <div>
        <Fetch url="http://localhost:8090/api/pages/shared-outcomes-test-page">
          <SharedOutcomes />
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

export const SharedOutcomesContainer = connect(
  mapStateToProps,
  actionCreators
)(APIContainer);
