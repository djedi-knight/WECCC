import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions/action_creators';
import { Tab, Tabs } from 'react-toolbox';
import { Row, Col } from 'react-flexbox-grid';
import ScoreBoxSimple from '../ScoreBoxSimple';
import RegisteredCaregiversBox from '../RegisteredCaregiversBox';
import style from './style';
import data from './data.json';

const learnMoreContent = 'Please select a tab to learn more';

export const PopulationReachSubgroups = React.createClass({
  mixins: [PureRenderMixin],
  getInitialState() {
    return { data };
  },
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
          {this.state.data.priorityScoreCards.map((scoreCard, i) =>
            <Col key={i} xs={3}>
              <ScoreBoxSimple
                title={scoreCard.title}
                score={scoreCard.score}
              />
            </Col>
            )}
          </Row>
        </div>
        <div className={style.subgroup}>
          <Row className={style.header}>
            <div className={style.title}>
              Dependency Level
            </div>
          </Row>
          <Row className={style.body}>
          {this.state.data.dependencyScoreCards.map((scoreCard, i) =>
            <Col key={i} xs={3}>
              <ScoreBoxSimple
                title={scoreCard.title}
                score={scoreCard.score}
              />
            </Col>
            )}
          </Row>
        </div>
        <div className={style.subgroup}>
          <Row className={style.header}>
            <div className={style.title}>
              Registed To
            </div>
          </Row>
          <Row className={style.body}>
          {this.state.data.registeredScoreCards.map((scoreCard, i) =>
            <Col key={i} xs={3}>
              <ScoreBoxSimple
                title={scoreCard.title}
                score={scoreCard.score}
              />
            </Col>
            )}
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
        <div className={style.populationReachTabs}>
          <Tabs index={this.state.index} onChange={this.handleTabChange}>
            <Tab label="28,000 Population" disabled>{learnMoreContent}</Tab>
            <Tab label="6,000 Eligible"><PopulationReachSubgroups /></Tab>
            <Tab label="1,500 Target" disabled>{learnMoreContent}</Tab>
            <Tab label="0 Registered"><PopulationReachSubgroups /></Tab>
          </Tabs>
          <RegisteredCaregiversBox />
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
