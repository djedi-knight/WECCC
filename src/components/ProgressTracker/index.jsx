import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions/action_creators';
import { FontIcon, Table } from 'react-toolbox';
import style from './style';

const ProgressTrackerTable = {
  INDICATOR: { type: String },
  GOAL: { type: String },
  BASELINE: { type: String },
  CHANGE: {type: String},
  TREND: {type: String},
  COLOURCODE: { type: Number},
};

const data = [
  { INDICATOR: <b>Income </b>, GOAL: '5%', BASELINE: 'A', CHANGE: '-2%', TREND: <FontIcon value="trending_down"/>, COLOURCODE: <div style={{color:'red'}}><FontIcon value="warning" /> </div> },
  { INDICATOR: <a href="#">Age</a>, GOAL: '21%', BASELINE: 'A',TREND: <FontIcon value="trending_up"/>, COLOURCODE: <div style={{color:'#CBCB1B'}}><FontIcon value="star" /> </div>  },
  { INDICATOR: <b>Education</b> , GOAL: '--', BASELINE: '--',TREND: <FontIcon value="trending_up"/>, COLOURCODE: <div style={{color:'green'}}><FontIcon value="check" /> </div> },
  { INDICATOR: <b>Air Pollution</b> , GOAL: '--', BASELINE: '--', COLOURCODE: <div style={{color:'blue'}}><FontIcon value="lens" /> </div> },
  { INDICATOR: <b>Climate</b> , GOAL: '--', BASELINE: '--'},
  { INDICATOR: <b>Life Expectancy</b> , GOAL: '--', BASELINE: '--'},

];

export const ProgressTracker = React.createClass({
  mixins: [PureRenderMixin],
  getInitialState() {
    return { source: data };
  },
  render() {
    return (
      <div className={style.ProgressTracker}>
        <Table theme={style} selectable={false} model={ProgressTrackerTable} source={this.state.source} />
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

export const ProgressTrackerContainer = connect(
  mapStateToProps,
  actionCreators
)(ProgressTracker);