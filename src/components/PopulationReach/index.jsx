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
      <div className={style.populationReachSubgroups}>
        <div className={style.subgroup}>
          <Row className={style.header}>
            <div className={style.title}>
              {this.getSubGroupFor('priority-subgroup').title}
            </div>
          </Row>
          <Row className={style.body}>
            <Col xs={3}>
              <ScoreBoxSimple
                title={this.getScoreCardFor('priority-subgroup', 'over-80').title}
                score={this.getScoreCardFor('priority-subgroup', 'over-80').score}
                trend={this.getScoreCardFor('priority-subgroup', 'over-80').trend}
              />
            </Col>
            <Col xs={3}>
              <ScoreBoxSimple
                title={this.getScoreCardFor('priority-subgroup', 'disabled').title}
                score={this.getScoreCardFor('priority-subgroup', 'disabled').score}
                trend={this.getScoreCardFor('priority-subgroup', 'disabled').trend}
              />
            </Col>
          </Row>
        </div>
        <div className={style.subgroup}>
          <Row className={style.header}>
            <div className={style.title}>
              {this.getSubGroupFor('dependency-subgroup').title}
            </div>
          </Row>
          <Row className={style.body}>
            <Col xs={3}>
              <ScoreBoxSimple
                title={this.getScoreCardFor('dependency-subgroup', 'light').title}
                score={this.getScoreCardFor('dependency-subgroup', 'light').score}
                trend={this.getScoreCardFor('dependency-subgroup', 'light').trend}
              />
            </Col>
            <Col xs={3}>
              <ScoreBoxSimple
                title={this.getScoreCardFor('dependency-subgroup', 'moderate').title}
                score={this.getScoreCardFor('dependency-subgroup', 'moderate').score}
                trend={this.getScoreCardFor('dependency-subgroup', 'moderate').trend}
              />
            </Col>
            <Col xs={3}>
              <ScoreBoxSimple
                title={this.getScoreCardFor('dependency-subgroup', 'complex').title}
                score={this.getScoreCardFor('dependency-subgroup', 'complex').score}
                trend={this.getScoreCardFor('dependency-subgroup', 'complex').trend}
              />
            </Col>
            <Col xs={3}>
              <ScoreBoxSimple
                title={this.getScoreCardFor('dependency-subgroup', 'eol').title}
                score={this.getScoreCardFor('dependency-subgroup', 'eol').score}
                trend={this.getScoreCardFor('dependency-subgroup', 'eol').trend}
              />
            </Col>
          </Row>
        </div>
        <div className={style.subgroup}>
          <Row className={style.header}>
            <div className={style.title}>
              {this.getSubGroupFor('registered-subgroup').title}
            </div>
          </Row>
          <Row className={style.body}>
            <Col xs={3}>
              <ScoreBoxSimple
                title={this.getScoreCardFor('registered-subgroup', 'care').title}
                score={this.getScoreCardFor('registered-subgroup', 'care').score}
                trend={this.getScoreCardFor('registered-subgroup', 'care').trend}
              />
            </Col>
            <Col xs={3}>
              <ScoreBoxSimple
                title={this.getScoreCardFor('registered-subgroup', 'outreach').title}
                score={this.getScoreCardFor('registered-subgroup', 'outreach').score}
                trend={this.getScoreCardFor('registered-subgroup', 'outreach').trend}
              />
            </Col>
            <Col xs={3}>
              <ScoreBoxSimple
                title={this.getScoreCardFor('registered-subgroup', 'neighbourhood').title}
                score={this.getScoreCardFor('registered-subgroup', 'neighbourhood').score}
                trend={this.getScoreCardFor('registered-subgroup', 'eol').trend}
              />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
});

export const PopulationReach = React.createClass({
  propTypes: {
    title: React.PropTypes.string,
    infoBoxes: React.PropTypes.array,
    scoreCards: React.PropTypes.array
  },
  mixins: [PureRenderMixin],
  getInitialState() {
    return { index: 0 };
  },
  getLabelFor(key) {
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
            <Tab label={this.getLabelFor('tab-1')} disabled>{emptyTabContent}</Tab>
            <Tab label={this.getLabelFor('tab-2')}>
              <PopulationReachSubgroups scoreCards={this.props.scoreCards} />
            </Tab>
            <Tab label={this.getLabelFor('tab-3')} disabled>{emptyTabContent}</Tab>
            <Tab label={this.getLabelFor('registered')}>
              <PopulationReachSubgroups />
            </Tab>
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
