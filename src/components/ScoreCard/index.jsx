import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions/action_creators';
import style from './style';
import data from './data.json';
import { FontIcon, Button, Dialog } from 'react-toolbox';
import ScoreBoxModal from '../ScoreBoxModal';


export default React.createClass({
  propTypes: {
    title: React.PropTypes.string,
    score: React.PropTypes.string,
    peerScore: React.PropTypes.string,
    trend: React.PropTypes.string,
    warning: React.PropTypes.string,
    detail: React.PropTypes.bool
  },
  mixins: [PureRenderMixin],
  getInitialState() {
    return { 
      data,
      active: false 
    };
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
        <FontIcon value="person" /> Peer Comparison Score {this.props.peerScore}
        </div>
      );
    }
    return null;
  },
  getTrend() {
    if (this.props.trend) {
      return (
        <div id="trend" className={style.trend}>
          <FontIcon value="trending_up" />Change Over Time<FontIcon value={this.props.trend} />
        </div>
      );
    }
    return null;
  },
  getWarning(){
    if(this.props.warning){
      return(
        <div id="warning" className={style.warning}>
          <FontIcon value ={this.props.warning}/>
        </div>
      );
    }
    return null;
  },
  getShowDetail(){
    if(this.props.detail){
      return(
        <div id="detail" className={style.detail}>
          <Button label="Show Detail" onClick={this.handleToggle} />
          <Dialog
              actions={this.actions}
              active={this.state.active}
              onEscKeyDown={this.handleToggle}
              onOverlayClick={this.handleToggle}
            >
              <ScoreBoxModal />
            </Dialog>
        </div>
      );
    }
    return null;
  },
  handleToggle() {
    this.setState({ active: !this.state.active });
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
        {this.getShowDetail()}
      </div>
    );
  }
});

