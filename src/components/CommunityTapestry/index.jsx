import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions/action_creators';
import { Row, Col } from 'react-flexbox-grid';
import ScoreBoxSimple from '../ScoreBoxSimple';
import style from './style';
import data from './data.json';
import { VictoryPie, VictoryTooltip, VictoryChart, VictoryBar, VictoryLine, VictorySharedEvents, VictoryAxis } from 'victory/dist/victory';
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
const lineData = [
      {x: 1, y: 39},
      {x: 2, y: 31},
      {x: 3, y: 43},
      {x: 4, y: 54},
      {x: 5, y: 50}
    ];
    const bData = [
      {x: 1, y: 39},
      {x: 2, y: 31},
      {x: 3, y: 43},
      {x: 4, y: 54},
      {x: 5, y: 50}
    ];
    const barData = [
      {x: 1, y: 12, label: "Jan 2010"},
      {x: 2, y: 13, label: "Apr 2010"},
      {x: 3, y: 81, label: "Jul 2010"},
      {x: 4, y: 49, label: "Oct 2010"},
      {x: 5, y: 30, label: "Jan 2011"},
      {x: 6, y: 29, label: "Apr 2011"},
      {x: 7, y: 13, label: "Jul 2011"},
      {x: 8, y: 53, label: "Oct 2011"},
      {x: 9, y: 24, label: "Jan 2012"},
      {x: 10, y: 68, label: "Apr 2012"},
      {x: 11, y: 52, label: "Jul 2012"},
      {x: 12, y: 29, label: "Oct 2012"},
      {x: 13, y: 27, label: "Jan 2013"},
      {x: 14, y: 100, label: "Apr 2013"},
      {x: 15, y: 10, label: "Jul 2013"},
      {x: 16, y: 77, label: "Oct 2013"},
      {x: 17, y: 76, label: "Jan 2014"},
      {x: 18, y: 61, label: "Apr 2014"},
      {x: 19, y: 48, label: "Jul 2014"},
      {x: 20, y: 15, label: "Oct 2014"}
    ];
const labelStyle = { labels: { fill: 'white', fontSize: 18} };
const dummyText = 'Lorem Ipsum Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium';



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
        <svg width={700} height={400} >
          <VictorySharedEvents
          events={[
                {
                  childName: "pie",
                  target: "data",
                  eventHandlers: {
                    onClick: () => {
                      return [
                        {
                          childName: "bar",
                          mutation: (props) => {
                            return {style:{data: {fill: "tomato"}}};                           
                          }
                        }
                      ];
                    }
                  }
                }
              ]}>
            <VictoryPie
              name="pie"
              labelRadius={120}
              padding={20}
              style={labelStyle}
              data={data}
              standalone={false}
              colorScale={colorScale}
            />
            <VictoryChart>
            <VictoryBar
            title="Dummy Title"  
              name="bar"
              data={bData}
              standalone={false}
              style={{data: {fill: "transparent"}}}
            />
            <VictoryAxis
              name="axis"
              standalone={false}
              width={700}
              height={400}  
              style={{axis: {stroke: "transparent"}, tickLabels:{fill: "transparent"}}}
            />
            <VictoryAxis dependentAxis
              standalone={false}
              style={{axis: {stroke: "transparent"}, tickLabels:{fill: "transparent"}}}
            /> 
            </VictoryChart>           

          </VictorySharedEvents>
          </svg>
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
