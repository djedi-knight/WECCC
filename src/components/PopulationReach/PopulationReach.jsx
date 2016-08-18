import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions/action_creators';
import { Tab, Tabs, Card } from 'react-toolbox';
import ScoreBox from '../ScoreBox/ScoreBox';
import theme from '../../theme/default';

export const PopulationReachSubgroups = React.createClass({
  mixins: [PureRenderMixin],
  render() {
    return (
      <div className={theme.PopulationReachSubgroups}>
        <Card className={theme.prioritySection}>
          <div className={theme.title}> Priority Subgroup </div>
          <div>
            <div className={theme.contents}><ScoreBox /></div>
            <div className={theme.contents}><ScoreBox /></div>
          </div>
        </Card>
        <Card className={theme.dependencySection}>
          <div className={theme.title}> Dependency Level </div>
          <div>
            <div className={theme.contents}><ScoreBox /></div>
            <div className={theme.contents}><ScoreBox /></div>
            <div className={theme.contents}><ScoreBox /></div>
            <div className={theme.contents}><ScoreBox /></div>
          </div>
        </Card>
        <Card className={theme.registedSection}>
          <div className={theme.title}> Registed to </div>
          <div>
            <div className={theme.contents}><ScoreBox /></div>
            <div className={theme.contents}><ScoreBox /></div>
            <div className={theme.contents}><ScoreBox /></div>
          </div>
        </Card>
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
      <div className={theme.PopulationReach}>
        <div className={theme.PopulationReachHeader}>
          <h2>Community Outcomes</h2>
        </div>
        <div className="PopulationTab">
          <Tabs index={this.state.index} onChange={this.handleTabChange}>
            <Tab label="28,000 Population"><PopulationReachSubgroups /></Tab>
            <Tab label="6,000 Eligible" />
            <Tab label="1,500 Target" />
            <Tab label="0 Registered" />
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
