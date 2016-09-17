import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions/action_creators';
import { Row, Col } from 'react-flexbox-grid';
import { Dropdown, Tab, Tabs } from 'react-toolbox';
import { VictoryPie, VictoryLabel } from 'victory/dist/victory';
import data from './data.json';
import style from './style';
import ScoreBoxSimple from '../ScoreBoxSimple';

const labelStyle = { labels: { fill: 'white', fontSize: 9, padding: 50 } };

const careNeeds = [
  { value: 'light', label: 'Light' },
  { value: 'moderate', label: 'Moderate' },
  { value: 'complex', label: 'Complex' },
  { value: 'eol', label: 'EOL' }
];

const city = [
  { value: 'leamington', label: 'Leamington' },
  { value: 'windsor', label: ' Windsor' },
  { value: 'london', label: 'London' },
  { value: 'amherstburg', label: 'Amherstburg' }
];

const subgroup = [
  { value: 'school', label: 'School' },
  { value: 'faith', label: 'Faith' },
  { value: 'culture', label: 'Culture' }
];

export const ValueImpact = React.createClass({
  mixins: [PureRenderMixin],
  getInitialState() {
    return {
      value: 'light',
      value2: 'london',
      value3: 'faith',
      inverseIndex: 1,
      data
    };
  },
  handleChange(value) {
    this.setState({ value });
  },
  handleChange2(value2) {
    this.setState({ value2 });
  },
  handleChange3(value3) {
    this.setState({ value3 });
  },
  handleInverseTabChange(inverseIndex) {
    this.setState({ inverseIndex });
  },
  render() {
    return (
      <div className={style.valueImpact}>
        <div className={style.valueImpactHeader}>
          Values and Impact
        </div>
        <Row>
          <Col xs={3}>
            <div className={style.valueImpactSubheader}>
              Population Subgroup
            </div>
            <Dropdown
              onChange={this.handleChange}
              source={careNeeds}
              value={this.state.value}
            />
            <Dropdown
              onChange={this.handleChange2}
              source={city}
              value={this.state.value2}
            />
            <Dropdown
              onChange={this.handleChange3}
              source={subgroup}
              value={this.state.value3}
            />
          </Col>
          <Col xs={6}>
            <div className={style.valueImpactSubheader}>
              Your Community Pattern
            </div>
            <VictoryPie
              style={labelStyle}
              data={this.state.data.PieData}
              colorScale={this.state.data.colorScale}
            >
              <VictoryLabel />
            </VictoryPie>
            <div>
              <ScoreBoxSimple title={"S.R.O.I"} score={"15"} trend={"down"} />
              <ScoreBoxSimple title={"E.R.O.I"} score={"27"} trend={"up"} />
            </div>
          </Col>
          <Col xs={3}>
            <div className={style.valueImpactSubheader}>
              Things To Consider
            </div>
            <Tabs index={this.state.inverseIndex} onChange={this.handleInverseTabChange} inverse>
              <Tab label="First">
                <small>First Content</small>
              </Tab>
              <Tab label="Second">
                <small>Second Content</small>
              </Tab>
              <Tab label="Third">
                <small>Third Content</small>
              </Tab>
            </Tabs>
          </Col>
        </Row>
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

export const ValueImpactContainer = connect(
  mapStateToProps,
  actionCreators
)(ValueImpact);
