import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions/action_creators';
import { RadioButton, RadioGroup } from 'react-toolbox';
import { Row, Col } from 'react-flexbox-grid';
import ScoreBoxSimple from '../ScoreBoxSimple';
import style from './style';
import data from './data.json';

export const VitalSignsSubgroups = React.createClass({
  mixins: [PureRenderMixin],
  getInitialState() {
    return { data };
  },
  render() {
    return (
      <div style={style.vitalSignsSubgroups}>
        <Row className={style.body}>
          {this.state.data.scoreCards.map((scoreCard, i) =>
            <Col key={i} xs={2}>
              <ScoreBoxSimple
                title={scoreCard.title}
                score={scoreCard.score}
                trend={scoreCard.trend}
              />
            </Col>
          )}
        </Row>
        <div className={style.vitalSignsReportLink}>
          <a href="#">Vital-Signs Report</a>
        </div>
      </div>
    );
  }
});

export const VitalSigns = React.createClass({
  mixins: [PureRenderMixin],
  getInitialState() {
    return { value: 'vitalSigns' };
  },
  handleChange(value) {
    this.setState({ value });
  },
  render() {
    return (
      <div className={style.vitalSigns}>
        <div className={style.vitalSignsHeader}>
          Community Well-Being (General Population)
        </div>
        <RadioGroup name="comic" value={this.state.value} onChange={this.handleChange}>
          <RadioButton label="Vital Signs" value="vitalSigns" />
          <RadioButton label="Self-Reported" value="selfReported" />
          <RadioButton label="Neighbourhoods" value="neighbourhoods" />
        </RadioGroup>
        {this.state.value === 'vitalSigns' ? <VitalSignsSubgroups /> : null}
        {this.state.value === 'selfReported' ? <VitalSignsSubgroups /> : null}
        {this.state.value === 'neighbourhoods' ? <VitalSignsSubgroups /> : null}
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
)(VitalSigns);
