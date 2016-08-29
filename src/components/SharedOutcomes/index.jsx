import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions/action_creators';
import { RadioButton, RadioGroup } from 'react-toolbox';
import { Row, Col } from 'react-flexbox-grid';
import ScoreBox from '../ScoreBox';
import style from './style';

export const SharedOutcomesSubgroups = React.createClass({
  mixins: [PureRenderMixin],
  render() {
    return (
      <div style={style.sharedOutcomeSubgroups}>
        <Row className={style.body}>
          <Col xs={3}>
            <ScoreBox />
          </Col>
          <Col xs={3}>
            <ScoreBox />
          </Col>
          <Col xs={3}>
            <ScoreBox />
          </Col>
          <Col xs={3}>
            <ScoreBox />
          </Col>
        </Row>
        <br/>
        <div className={style.sharedOutcomeDetails}>
          <a href="#">Details </a>
        </div>
      </div>
    );
  }
});

export const SharedOutcomesSubgroup = React.createClass({
  mixins: [PureRenderMixin],
  render() {
    return (
      <div style={style.sharedOutcomeSubgroups}>
        <Row className={style.body}>
        <Col xs={1} />
          <Col xs={3}>
            <ScoreBox />
          </Col>
          <Col xs={3}>
            <ScoreBox />
          </Col>
          <Col xs={3}>
            <ScoreBox />
          </Col>
          <Col xs={1} />
        </Row>
        <br/>
        <div className={style.sharedOutcomeDetails}>
          <a href="#">Details </a>
        </div>
      </div>
    );
  }
});
export const SharedOutcomes = React.createClass({
  mixins: [PureRenderMixin],
  getInitialState() {
    return { value: 'People' };
  },
  handleChange(value) {
    this.setState({ value }


      );
  },
  render() {
    return (
      <div className={style.sharedOutcome}>
        <div className={style.sharedOutcomeHeader}>
          Our Shared Outcomes
        </div>
        <br/>
        <RadioGroup name="outcome" value={this.state.value} onChange={this.handleChange}>
          <RadioButton label="People" value="People" />
          <RadioButton label="Core Partners" value="corePartners" />
        </RadioGroup>
        {this.state.value === 'People' ? <SharedOutcomesSubgroups /> : null}
        {this.state.value === 'corePartners' ? <SharedOutcomesSubgroup /> : null}
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
)(SharedOutcomes);
