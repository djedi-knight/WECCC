import React from 'react';
import Fetch from 'react-fetch';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions/action_creators';
import { Tab, Tabs } from 'react-toolbox';
import { Row, Col } from 'react-flexbox-grid';
import ScoreBoxSimple from '../ScoreBoxSimple';
import RegisteredCaregiversBox from '../RegisteredCaregiversBox';
import style from './style';
import data from './data.json';

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
                trend={scoreCard.trend}
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
                trend={scoreCard.trend}
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
                trend={scoreCard.trend}
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
  propTypes: {
    title: React.PropTypes.string,
    infoBoxes: React.PropTypes.array
  },
  mixins: [PureRenderMixin],
  getInitialState() {
    return { index: 0 };
  },
  getTabLabelFor(key) {
    if (this.props.infoBoxes) {
      const index = this.props.infoBoxes.findIndex(infoBox => infoBox.key === key);
      const infoBox = this.props.infoBoxes[index];

      return `${infoBox.value} ${infoBox.title}`;
    }

    return '';
  },
  handleTabChange(index) {
    this.setState({ index });
  },
  render() {
    const emptyTabContent = 'Please select a tab to learn more';

    return (
      <div className={style.populationReach}>
        <div className={style.populationReachHeader}>
          {this.props.title}
        </div>
        <div className={style.populationReachTabs}>
          <Tabs index={this.state.index} onChange={this.handleTabChange}>
            <Tab label={this.getTabLabelFor('tab-1')} disabled>{emptyTabContent}</Tab>
            <Tab label={this.getTabLabelFor('tab-2')}><PopulationReachSubgroups /></Tab>
            <Tab label={this.getTabLabelFor('tab-3')} disabled>{emptyTabContent}</Tab>
            <Tab label={this.getTabLabelFor('registered')}><PopulationReachSubgroups /></Tab>
          </Tabs>
          <RegisteredCaregiversBox />
        </div>
      </div>
    );
  }
});

export const APIContainer = React.createClass({
  mixins: [PureRenderMixin],
  render() {
    return (
      <div>
        <Fetch url="http://localhost:8090/api/pages/population-reach-test-page">
          <PopulationReach />
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

export const PopulationReachContainer = connect(
  mapStateToProps,
  actionCreators
)(APIContainer);
