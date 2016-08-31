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
  mixins: [PureRenderMixin],
  getInitialState() {
    return {
      active: false,
      data
    };
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
            <h3>{this.state.data.scoreBoxData.title}</h3>
            <div className={style.score}>
              <a data-tip data-for="risk">
                <IconButton icon="warning" style={{ color: '#FF0000' }} />
              </a>
              <ReactTooltip id="risk" type="light" place="right" effect="float">
                <ScoreRiskPopover />
              </ReactTooltip>
              {this.state.data.scoreBoxData.score}
            </div>
            <hr />
          </CardText>
          <CardText>
            <FontIcon value="person" />
            Peer Comparison
            {this.state.data.scoreBoxData.pcscore}
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
