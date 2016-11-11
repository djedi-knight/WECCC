import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import ReactTooltip from 'react-tooltip';
import { Button, Dialog, FontIcon, IconButton } from 'react-toolbox';
import ScoreBoxModal from '../ScoreBoxModal';
import ScoreRiskPopover from '../ScoreRiskPopover';
import style from './style';
import data from './data.json';

export default React.createClass({
  propTypes: {
    title: React.PropTypes.string,
    score: React.PropTypes.string,
    peerScore: React.PropTypes.string,
    trend: React.PropTypes.string,
    warning: React.PropTypes.bool,
    showDetails: React.PropTypes.bool
  },
  mixins: [PureRenderMixin],
  getInitialState() {
    return {
      active: false,
      data
    };
  },
  getTitle() {
    return this.props.title || this.state.data.title;
  },
  getScore() {
    return this.props.score || this.state.data.score;
  },
  getPeerScore(){
    if (this.props.peerScore){
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
          Change Over Time   
          {this.props.trend === "up" ?  <FontIcon value="arrow_upward"/> : null}
          {this.props.trend === "down" ? <FontIcon value="arrow_downward"/> : null}
          {this.props.trend === "same" ? <FontIcon value="arrow_forward"/> : null}
          <FontIcon value={this.props.trend}/> 
        </div>
      );
    }
    return null;
  },
  getWarning() {
    if (this.props.warning) {
      return (
        <div id="warning" className={style.warning}>
          <a data-tip data-for="risk">
            <IconButton icon="warning" />
          </a>
          <ReactTooltip id="risk" type="light" place="right" effect="float">
            <ScoreRiskPopover />
          </ReactTooltip>
        </div>
      );
    }
    return null;
  },
  getShowDetails() {
    if (this.props.showDetails) {
      return (
        <div id="showDetails" className={style.detail}>
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
        {this.getShowDetails()}
      </div>
    );
  }
});
