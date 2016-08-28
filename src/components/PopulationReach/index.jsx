import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions/action_creators';
import { Tab, Tabs } from 'react-toolbox';
import { Row, Col } from 'react-flexbox-grid';
import ScoreBox from '../ScoreBox';
import style from './style';

const learnMoreContent = 'Please select a tab to learn more';

export const PopulationReachSubgroups = React.createClass({
  mixins: [PureRenderMixin],
  render() {
    return (
      <div className={style.populationReachSubgroups}>
        <div className={style.subgroup}>
          <Row className={style.header}>
            <div className={style.title}>
              Priority Subgroup
            </div>
          </Row>
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
        </div>
        <div className={style.subgroup}>
          <Row className={style.header}>
            <div className={style.title}>
              Dependency Level
            </div>
          </Row>
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
        </div>
        <div className={style.subgroup}>
          <Row className={style.header}>
            <div className={style.title}>
              Registed To
            </div>
          </Row>
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
        </div>
      </div>
    );
  }
});

export const PopulationReach = React.createClass({
  mixins: [PureRenderMixin],
  getInitialState() {
    return { index: 0 };
  },
  handleTabChange(index) {
    this.setState({ index });
  },
  render() {
    return (
      <div className={style.populationReach}>
        <div className={style.populationReachHeader}>
          Community Outcomes
        </div>
        <div className="PopulationTab">
          <Tabs index={this.state.index} onChange={this.handleTabChange}>
            <Tab label="28,000 Population" disabled>{learnMoreContent}</Tab>
            <Tab label="6,000 Eligible"><PopulationReachSubgroups /></Tab>
            <Tab label="1,500 Target" disabled>{learnMoreContent}</Tab>
            <Tab label="0 Registered"><PopulationReachSubgroups /></Tab>
            <Tab className={style.specialTab} label="0 Registered Caregivers" disabled>{learnMoreContent}</Tab>
          </Tabs>
        </div>
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

export const PopulationReachContainer = connect(
  mapStateToProps,
  actionCreators
)(PopulationReach);
