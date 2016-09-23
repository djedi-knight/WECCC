import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions/action_creators';
import { Row, Col } from 'react-flexbox-grid';
import { Dropdown, Tab, Tabs } from 'react-toolbox';
import { VictoryPie, VictoryLabel } from 'victory/dist/victory';
import ScoreBoxSimple from '../ScoreBoxSimple';
import AreasOfFocusSidebar from '../AreasOfFocusSidebar';
import style from './style';
import data from './data.json';

const labelStyle = { labels: { fill: 'white', fontSize: 9, padding: 50 } };

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
        <div className={style.header}>
          Values and Impact
        </div>
        <Row>
          <Col xs={3}>
            <div className={style.subHeader}>
              Population Subgroup
            </div>
            <Dropdown
              onChange={this.handleChange}
              source={this.state.data.careNeeds}
              value={this.state.value}
            />
            <Dropdown
              onChange={this.handleChange2}
              source={this.state.data.city}
              value={this.state.value2}
            />
            <Dropdown
              onChange={this.handleChange3}
              source={this.state.data.subgroup}
              value={this.state.value3}
            />
          </Col>
          <Col xs={6}>
            <div className={style.subHeader}>
              Your Community Pattern
            </div>
            <VictoryPie
              style={labelStyle}
              data={this.state.data.PieData}
              colorScale={this.state.data.colorScale}
            >
              <VictoryLabel />
            </VictoryPie>
            <div className={style.subgroup}>
              <Row className={style.header}>
                <div className={style.title}>
                  Return on Investment
                </div>
              </Row>
              <Row className={style.body}>
                <Col xs={2} />
                <Col xs={4}>
                  <ScoreBoxSimple title={"Social"} score={"15"} trend={"down"} />
                </Col>
                <Col xs={4}>
                  <ScoreBoxSimple title={"Economic"} score={"27"} trend={"up"} />
                </Col>
                <Col xs={2} />
              </Row>
            </div>
          </Col>
          <Col xs={3}>
            <div className={style.subHeader}>
              Things To Consider
            </div>
            <Tabs index={this.state.inverseIndex} onChange={this.handleInverseTabChange} inverse>
              <Tab label="First">
                <AreasOfFocusSidebar />
              </Tab>
              <Tab label="Second">
                <AreasOfFocusSidebar />
              </Tab>
              <Tab label="Third">
                <AreasOfFocusSidebar />
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
