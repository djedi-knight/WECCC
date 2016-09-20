import React from 'react';
import Fetch from 'react-fetch';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions/action_creators';
import { RadioButton, RadioGroup } from 'react-toolbox';
import { Row, Col } from 'react-flexbox-grid';
import ScoreBoxSimple from '../ScoreBoxSimple';
import style from './style';
import data from './data.json';

export const VitalSignsSubgroups = React.createClass({
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
    const vitalSignsLinkText = 'Vital-Signs Report';

    return (
      <div style={style.vitalSignsSubgroups}>
        <Row className={style.body}>
          <Col xs={2}>
            <ScoreBoxSimple
              title={this.getScoreCardFor('vital-signs-subgroup', 'government').title}
              score={this.getScoreCardFor('vital-signs-subgroup', 'government').score}
              trend={this.getScoreCardFor('vital-signs-subgroup', 'government').trend}
            />
          </Col>
          <Col xs={2}>
            <ScoreBoxSimple
              title={this.getScoreCardFor('vital-signs-subgroup', 'safety').title}
              score={this.getScoreCardFor('vital-signs-subgroup', 'safety').score}
              trend={this.getScoreCardFor('vital-signs-subgroup', 'safety').trend}
            />
          </Col>
          <Col xs={2}>
            <ScoreBoxSimple
              title={this.getScoreCardFor('vital-signs-subgroup', 'arts-culture').title}
              score={this.getScoreCardFor('vital-signs-subgroup', 'arts-culture').score}
              trend={this.getScoreCardFor('vital-signs-subgroup', 'arts-culture').trend}
            />
          </Col>
          <Col xs={2}>
            <ScoreBoxSimple
              title={this.getScoreCardFor('vital-signs-subgroup', 'transportation').title}
              score={this.getScoreCardFor('vital-signs-subgroup', 'transportation').score}
              trend={this.getScoreCardFor('vital-signs-subgroup', 'transportation').trend}
            />
          </Col>
          <Col xs={2}>
            <ScoreBoxSimple
              title={this.getScoreCardFor('vital-signs-subgroup', 'government').title}
              score={this.getScoreCardFor('vital-signs-subgroup', 'government').score}
              trend={this.getScoreCardFor('vital-signs-subgroup', 'government').trend}
            />
          </Col>
        </Row>
        <div className={style.vitalSignsReportLink}>
          <a href="#">{vitalSignsLinkText}</a>
        </div>
      </div>
    );
  }
});

export const VitalSigns = React.createClass({
  propTypes: {
    title: React.PropTypes.string,
    pieCharts: React.PropTypes.array,
    scoreCards: React.PropTypes.array
  },
  mixins: [PureRenderMixin],
  getInitialState() {
    return { value: 'vital-signs' };
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
    console.log(this.props);
    return (
      <div className={style.vitalSigns}>
        <div className={style.vitalSignsHeader}>
          {this.props.title}
        </div>
        <RadioGroup name="comic" value={this.state.value} onChange={this.handleChange}>
          <RadioButton label={this.getSubGroupFor('vital-signs-subgroup').title} value="vital-signs" />
          <RadioButton label={this.getSubGroupFor('self-reported-subgroup').title} value="self-reported" />
          <RadioButton label={this.getSubGroupFor('neighbourhood-subgroup').title} value="neighbourhood" />
        </RadioGroup>
        {this.state.value === 'vital-signs' ?
          <VitalSignsSubgroups scoreCards={this.props.scoreCards} />
        : null}
        {this.state.value === 'self-reported' ?
          <VitalSignsSubgroups />
        : null}
        {this.state.value === 'neighbourhood' ?
          <VitalSignsSubgroups />
        : null}
      </div>
    );
  }
});

export const APIContainer = React.createClass({
  mixins: [PureRenderMixin],
  render() {
    return (
      <div>
        <Fetch url="http://localhost:8090/api/pages/vital-signs-test-page">
          <VitalSigns />
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

export const VitalSignsContainer = connect(
  mapStateToProps,
  actionCreators
)(APIContainer);
