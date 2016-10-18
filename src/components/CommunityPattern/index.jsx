import React from 'react';
import Fetch from 'react-fetch';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { VictoryPie } from 'victory/dist/victory';
import { Row, Col } from 'react-flexbox-grid';
import { Dropdown } from 'react-toolbox';
import data from './data.json';
import ScoreBoxSimple from '../ScoreBoxSimple';
import config from './config.json';
import style from './style';

export const CommunityPattern = React.createClass({
  mixins: [PureRenderMixin],
  getInitialState() {
    return {
      value: 'dependency',
      value2: 'gender',
      value3: 'orientation',
      value4: 'isolation',
      data,
      config
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
  handleChange4(value4) {
    this.setState({ value4 });
  },
  render() {
    return (
      <div className={style.communityPattern}>
        <Row>
          <Col xs={3}>
            <div>
              Population Subgroup
            </div>
            <Dropdown
              onChange={this.handleChange}
              source={this.state.data.dependency}
              value={this.state.value}
            />
            <Dropdown
              onChange={this.handleChange2}
              source={this.state.data.gender}
              value={this.state.value2}
            />
            <Dropdown
              onChange={this.handleChange3}
              source={this.state.data.orientation}
              value={this.state.value3}
            />
            <Dropdown
              onChange={this.handleChange4}
              source={this.state.data.isolation}
              value={this.state.value4}
            />
          </Col>
          <Col xs={6}>
            <div className={style.subHeader}>
              Your Community Pattern
            </div>
            <VictoryPie
              padding={100}
              labelRadius={50}
              data={this.state.data.pieData}
              colorScale={this.state.config.colourScale}
              style={this.state.config.labelStyle}
            />
          </Col>
          <Col xs={3}>
            <br />
            <div className={style.reportTable}>
              <Row className={style.tableHeader}>
                <Col xs={6}>General</Col>
                <Col xs={6}>Subgroup</Col>
              </Row>
              {this.state.data.tableData.map((row, i) =>
                <div key={i}>
                  <Row className={style.tableRow}>
                    <Col xs={6}>{row.general}</Col>
                    <Col xs={6}>{row.subgroup}</Col>
                  </Row>
                </div>
              )}
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={6}>
            <div className={style.subHeader}>Quality of Life</div>
            <Row>
              <Col xs={4}>
                <ScoreBoxSimple title={"Community"} score={"A+"} trend={"up"} />
              </Col>
              <Col xs={4}>
                <ScoreBoxSimple title={"Subgroup"} score={"B"} trend={"down"} />
              </Col>
              <Col xs={4}>
                <ScoreBoxSimple title={"Equity Gap"} score={"-25"} trend={"down"} />
              </Col>
            </Row>
          </Col>
          <Col xs={6}>
            <div className={style.subHeader}>Caregiver Burden</div>
            <Row>
              <Col xs={4}>
                <ScoreBoxSimple title={"Community"} score={"D"} trend={"down"} />
              </Col>
              <Col xs={4}>
                <ScoreBoxSimple title={"Subgroup"} score={"C"} trend={"down"} />
              </Col>
              <Col xs={4}>
                <ScoreBoxSimple title={"Equity Gap"} score={"-10"} trend={"down"} />
              </Col>
            </Row>
          </Col>
        </Row>
        <div className={style.subHeader}>Reported Health</div>
        <Row>
          <Col xs={4}>
            <ScoreBoxSimple title={"Community"} score={"C"} trend={"down"} />
          </Col>
          <Col xs={4}>
            <ScoreBoxSimple title={"Subgroup"} score={"D"} trend={"down"} />
          </Col>
          <Col xs={4}>
            <ScoreBoxSimple title={"Equity Gap"} score={"-20"} trend={"down"} />
          </Col>
        </Row>
      </div>
    );
  }
});

export const CommunityPatternContainer = React.createClass({
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
          <CommunityPattern />
        </Fetch>
      </div>
    );
  }
});
