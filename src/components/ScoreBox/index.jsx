import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import ReactTooltip from 'react-tooltip';
import {
  Button,
  Card,
  CardActions,
  CardText,
  Dialog,
  FontIcon,
  IconButton
} from 'react-toolbox';
import ScoreRiskPopover from '../ScoreRiskPopover';
import ScoreBoxModal from '../ScoreBoxModal';
import style from './style';
import data from './data.json';

export default React.createClass({
  propTypes: {
    title: React.PropTypes.string,
    score: React.PropTypes.string,
    peerScore: React.PropTypes.string,
    warning: React.PropTypes.bool,
    trend: React.PropTypes.string,
  },
  mixins: [PureRenderMixin],
  getInitialState() {
    return {
      active: false,
      data
    };
  },
  getTitle() {
    return this.props.title || this.state.title;
  },
  getScore() {
    return this.props.score || this.state.score;
  },
  getPeerScore() {
    return this.props.peerScore || this.state.peerScore;
  },
  getWarning() {
    return this.props.warning || this.state.warning;
  },
  getTrend() {
    return this.props.trend || this.state.trend;
  },
  handleToggle() {
    this.setState({ active: !this.state.active });
  },
  render() {
    return (
      <div className={style.scoreBox}>
        <Card theme={style}>
          <CardText>
            <FontIcon className={style.infoIcon} value="info" />
            <h3>{this.getTitle()}</h3>
            <div className={style.score}>
            {this.getWarning() ?
              <div className={style.warningIcon}>
                <a data-tip data-for="risk">
                  <IconButton icon="warning" />
                </a>
                <ReactTooltip id="risk" type="light" place="right" effect="float">
                  <ScoreRiskPopover />
                </ReactTooltip>
              </div>
            : null}
              {this.getScore()}
            </div>
            <hr />
          </CardText>
          <CardText>
            <FontIcon value="person" />
            Peer Comparison
            {this.getPeerScore()}
            <hr />
          </CardText>
          <CardText>
            <FontIcon value="trending_up" />
            Change Over Time
            {this.getTrend() === 'up' ? <FontIcon value="arrow_upward" /> : null}
            {this.getTrend() === 'down' ? <FontIcon value="arrow_downward" /> : null}
            {this.getTrend() === 'same' ? <FontIcon value="arrow_forward" /> : null}
            <hr />
          </CardText>
          <CardActions>
            <Button label="Show Detail" onClick={this.handleToggle} />
            <Dialog
              actions={this.actions}
              active={this.state.active}
              onEscKeyDown={this.handleToggle}
              onOverlayClick={this.handleToggle}
            >
              <ScoreBoxModal />
            </Dialog>
          </CardActions>
        </Card>
      </div>
    );
  }
});
