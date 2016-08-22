import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { Row, Col } from 'react-flexbox-grid';
import { Button } from 'react-toolbox';
import ScoreBox from '../ScoreBox';
import ListBox from '../ListBox';
import style from './style';

export const ShowMoreSection = React.createClass({
  mixins: [PureRenderMixin],
  render() {
    return (
      <Row>
        <Col xs={4}>
          <ScoreBox />
        </Col>
        <Col xs={4}>
          <ScoreBox />
        </Col>
        <Col xs={4}>
          <ScoreBox />
        </Col>
      </Row>
    );
  }
});

export default React.createClass({
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
