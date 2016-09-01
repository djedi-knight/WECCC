import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions/action_creators';
import style from './style';
import data from './data.json';

export const ScoreCard = React.createClass({
  propTypes: {
    title: React.PropTypes.string
  },
  mixins: [PureRenderMixin],
  getInitialState() {
    return { data };
  },
  getTitle() {
    return this.props.title || this.state.data.title;
  },
  render() {
    return (
      <div id="scoreCard" className={style.scoreCard}>
        <div id="title" className={style.title}>
          {this.getTitle()}
        </div>
        <div id="score" className={style.score}>
          {this.state.data.score}
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

export const ScoreCardContainer = connect(
  mapStateToProps,
  actionCreators
)(ScoreCard);
