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

export default React.createClass({
  mixins: [PureRenderMixin],
  getInitialState() {
    return { active: false };
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
            <h3>Patient Experience</h3>
            <div className={style.score}>
              <a data-tip data-for="risk">
                <IconButton icon="warning" style={{ color: '#FF0000' }} />
              </a>
              <ReactTooltip id="risk" type="light" place="right" effect="float">
                <ScoreRiskPopover />
              </ReactTooltip>
              3/15
            </div>
            (label/define?)
            <hr />
          </CardText>
          <CardText>
            <FontIcon value="person" />
            Peer Comparison
            5 / 10
            <hr />
          </CardText>
          <CardText>
            <FontIcon value="trending_up" />
            Change Over Time
            <FontIcon value="arrow_upward" />
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
