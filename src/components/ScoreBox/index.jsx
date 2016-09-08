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
    peerScore: React.PropTypes.string
  },
  mixins: [PureRenderMixin],
  getInitialState() {
    return {
      active: false,
      data
    };
  },
  getTitle() {
    return this.props.title || this.state.scoreBoxData.title;
  },
  getScore() {
    return this.props.score || this.state.scoreBoxData.score;
  },
  getPeerScore() {
    return this.props.peerScore || this.state.scoreBoxData.peerScore;
  },
  getWarning() {
    return this.props.warning || this.state.scoreBoxData.warning;
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
            {this.getWarning() === 'true' ?
            <b>  
              <a data-tip data-for="risk">
                <IconButton icon="warning" style={{ color: '#FF0000', height:'5px'}} />
              </a><ReactTooltip id="risk" type="light" place="right" effect="float">
                <ScoreRiskPopover />
              </ReactTooltip></b>
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
            {this.state.data.scoreBoxData.trend === 'up' ? <FontIcon value="arrow_upward" /> : null}
            {this.state.data.scoreBoxData.trend === 'down' ? <FontIcon value="arrow_downward" /> : null}
            {this.state.data.scoreBoxData.trend === 'same' ? <FontIcon value="arrow_forward" /> : null}
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
