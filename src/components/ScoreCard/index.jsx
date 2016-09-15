import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions/action_creators';
import style from './style';
import data from './data.json';

export const ScoreCard = React.createClass({
  propTypes: {
    title: React.PropTypes.string,
    score: React.PropTypes.string,
    peerScore: React.PropTypes.string,
    trend: React.PropTypes.string,
    warning: React.PropTypes.string
  },
  mixins: [PureRenderMixin],
  getInitialState() {
    return { data };
  },
  getTitle() {
    return this.props.title || this.state.data.title;
  },
  getScore() {
    return this.props.score || this.state.data.score;
  },
  getPeerScore() {
    if (this.props.peerScore) {
      return (
        <div id="peerScore" className={style.peerScore}>
          {this.props.peerScore}
        </div>
      );
    }
    return null;
  },
  getTrend() {
    if (this.props.trend) {
      return (
        <div id="trend" className={style.trend}>
          {this.props.trend}
        </div>
      );
    }
    return null;
  },
  getWarning(){
    if(this.props.warning){
      return(
        <div id="warning" className={style.warning}>
          {this.props.warning}
        </div>
      );
    }
    return null;
  },
  render() {
    return (
      <div id="scoreCard" className={style.scoreCard}>
        <div id="title" className={style.title}>
          {this.getTitle()}
        </div>
        {this.getWarning()}
        <div id="score" className={style.score}>
          {this.getScore()}
        </div>
        {this.getPeerScore()}
        {this.getTrend()}
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

export const ScoreCardContainer = connect(
  mapStateToProps,
  actionCreators
)(ScoreCard);
