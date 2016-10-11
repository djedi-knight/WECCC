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
    const barData = [
      {x: 1, y: 39},
      {x: 2, y: 31},
      {x: 3, y: 43},
      {x: 4, y: 54},
      {x: 5, y: 50}
    ];
const labelStyle = { labels: { fill: 'white', fontSize: 18} };
const dummyText = 'Lorem Ipsum Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium';



export const CommunityTapestry = React.createClass({
  mixins: [PureRenderMixin],
  testFunction() {
    console.log('test function called!');
  },
  tFunction(){
    return 
    <div>
       {/*Table Container*/}
          <Col xs={6}>
            <div>
              <Row >
                <Col xs={4}>Heading 1</Col>
                <Col xs={4}>Heading 2</Col>
                <Col xs={4}>Heading 3</Col>
              </Row>
              <div>
                <Row>
                  <Col xs={4}>Row 1.1</Col>
                  <Col xs={4}>Row 1.2</Col>
                  <Col xs={4}>Row 1.3</Col>               
                </Row>
              </div>  
            </div>
          </Col>
        {/*Table Container End*/}
    </div>
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
          {/*Pie Chart Container*/}
          <Col xs={6}>
            <div className={style.pieChartContainer}>
              <svg width={700} height={400} >
                <VictorySharedEvents
                events={[
                      {
                        childName: "pie",
                        target: "data",
                        eventHandlers: {
                          onClick: () => {
                            console.log('chart clicked!');
                            this.testFunction();
                            return [
                              {
                                childName: "bar",
                                mutation: (props) => {
                                  console.log(props);
                                  return {style: {fill: "tomato"}};                           
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
                  <VictoryChart 
                    domainPadding={20} 
                    name="chart" 
                    standalone={false} 
                    style={{stroke: {fill: "transparent"}}}>
                    <VictoryBar                
                      name="bar"
                      data={barData}
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
          </Col>
        {/*Pie Chart Container End*/}
          
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
