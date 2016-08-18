import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { Card, CardText, CardActions, FontIcon, Link, IconButton } from 'react-toolbox';
import theme from '../../theme/default';
import ReactTooltip from 'react-tooltip';
// import ScoreRiskPopover from '../ScoreRiskPopover/ScoreRiskPopover';

export default React.createClass({
  mixins: [PureRenderMixin],
  render() {
    return (
      <div className={theme.ScoreBox}>
        <Card theme={theme} >
          <CardText>
            <FontIcon value="info" style={{ float: 'right', color: 'gray' }} />
            <h3>Patient Experience</h3>
            <div className={theme.score}>
              <a data-tip data-for="risk"><IconButton icon="warning" style={{ color: '#FF0000' }} /></a>
              <ReactTooltip id="risk" type="light" place="right" effect="float">
                <span> Need to import ScoreRiskPopover component </span>
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
            <Link href="#" label="Show Detail" />
          </CardActions>
        </Card>
      </div>
    );
  }
});
