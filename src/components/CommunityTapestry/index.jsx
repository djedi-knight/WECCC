import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions/action_creators';
import { Row, Col } from 'react-flexbox-grid';
import ScoreBoxSimple from '../ScoreBoxSimple';
import style from './style';
import data from './data.json';
import { VictoryPie, VictoryTooltip, VictoryChart, VictoryBar } from 'victory/dist/victory';
import ReactTooltip from 'react-tooltip';
import { IconButton } from 'react-toolbox';
import {ScoreBox } from '../ScoreBox';

const colorScale = [
  '#D85F49',
  '#F66D3B',
  '#D92E1D',
  '#D73C4C',
  '#FFAF59',
  '#E28300',
  '#F6A57F',
  '#FF0000'
];
const labelStyle = { labels: { fill: 'white', fontSize: 18} };
const dummyText = 'Lorem Ipsum Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium';

export const CommunityTapestrySubgroup = React.createClass({
   propTypes: {
    active: React.PropTypes.bool
  },
  mixins: [PureRenderMixin],
  getInitialState() {
    return { data };
  },
  render() {
    return (
      <div>
        const group = (
          <g>
            <VictoryBar />
          </g>
        );
        return this.props.active ? group : null;
      </div>
    );
  }
});


export const CommunityTapestry = React.createClass({
  mixins: [PureRenderMixin],
  testFunction() {
    console.log('test function called!');
  },
  render() {
    return (
      <div className={style.communityTapestry}>
      <Row>
        <div className={style.communityTapestryHeader}>
          Community Tapestry
        </div>
        </Row>
        <Row>
        <div className={style.pieChartContainer}>
          <VictoryPie
            labelRadius={120}
            padding={20}
            style={labelStyle}
            data={data}
            colorScale={colorScale}
            events={[{
              target: 'data',
              eventHandlers: {
                onClick: () => {
                  console.log('chart clicked!');
                  this.testFunction();
                  return [
                    {
                      mutation: (props) => {
                        console.log(props);
                        return <CommunityTapestrySubgroup />;
                      }
                    }
                  ];
                }
              }
            }]}

          />
        </div>
        </Row>
        <div className={style.subgroup}>
          <Row className={style.header}>
            <div className={style.title}>
              Description Text
            </div>
          </Row>
          <Row className={style.body}>
            <div className={style.descriptionText}>
              {dummyText}
            </div>
          </Row>
        </div>
        <div className={style.subgroup}>
          <Row className={style.header}>
            <div className={style.title}>
              Return On Investment
            </div>
          </Row>
          <Row className={style.body}>
            <Col xs={3} />
            <Col xs={3}>
              <ScoreBoxSimple />
            </Col>
            <Col xs={3}>
              <ScoreBoxSimple />
            </Col>
            <Col xs={3} />
          </Row>
        </div>
      </div>
    );
  }
});

function mapStateToProps(state) {
  return {
    test: 'Works!',
    state
  };
}

export const CommunityTapestryContainer = connect(
  mapStateToProps,
  actionCreators
)(CommunityTapestry);
