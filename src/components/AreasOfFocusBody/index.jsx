import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { Row, Col } from 'react-flexbox-grid';
import { Button } from 'react-toolbox';
import ScoreCard from '../ScoreCard';
import ListBox from '../ListBox';
import config from './config.json';
import style from './style';

export const ShowMoreSection = React.createClass({
  mixins: [PureRenderMixin],
  getInitialState() {
    return { config };
  },
  render() {
    return (
      <div>
        <Row>
        {this.state.config.scoreCards.map((scoreCard, i) =>
          <Col key={i} xs={4}>
            <ScoreCard
              title={scoreCard.title}
              score={scoreCard.score}
              peerScore={scoreCard.peerScore}
              warning={scoreCard.warning}
              trend={scoreCard.trend}
              showDetails={scoreCard.showDetails}
            />
          </Col>
        )}
        </Row>
      </div>
    );
  }
});

export default React.createClass({
  propTypes: {
    scoreCards: React.PropTypes.array
  },
  mixins: [PureRenderMixin],
  getInitialState() {
    return { isShowMore: false };
  },
  handleToggle() {
    this.setState({ isShowMore: !this.state.isShowMore });
  },
  render() {
    return (
      <div className={style.AreasOfFocusBody} >
        <ListBox />
        {this.state.isShowMore ? <ShowMoreSection /> : null}
        <Button label="Show More/Less" onClick={this.handleToggle} />
      </div>
    );
  }
});
