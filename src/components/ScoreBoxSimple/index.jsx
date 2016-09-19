import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { Card, CardText, FontIcon } from 'react-toolbox';
import style from './style';
import data from './data.json';

export default React.createClass({
  propTypes: {
    title: React.PropTypes.string,
    score: React.PropTypes.string,
    trend: React.PropTypes.string
  },
  mixins: [PureRenderMixin],
  getInitialState() {
    return { data };
  },
  getTitle() {
    return this.props.title || this.state.title;
  },
  getScore() {
    return this.props.score || this.state.score;
  },
  getTrend() {
    return this.props.trend || this.state.trend;
  },
  render() {
    return (
      <div className={style.scoreBoxSimple}>
        <Card theme={style}>
          <CardText>
            <div className={style.title}>
              {this.getTitle()}
            </div>
            <div className={style.score}>
              {this.getScore()}
            </div>
          </CardText>
          <CardText>
            {this.getTrend() === 'UP' ? <FontIcon value="arrow_upward" /> : null}
            {this.getTrend() === 'DOWN' ? <FontIcon value="arrow_downward" /> : null}
            {this.getTrend() === 'NONE' ? <FontIcon value="arrow_forward" /> : null}
          </CardText>
        </Card>
      </div>
    );
  }
});
