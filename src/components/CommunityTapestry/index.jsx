import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions/action_creators';
import { Row, Col } from 'react-flexbox-grid';
import ScoreBoxSimple from '../ScoreBoxSimple';
import style from './style';
import data from './data.json';
import { VictoryPie, VictoryTooltip, VictoryChart, VictoryBar } from 'victory/dist/victory';

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
const labelStyle = { labels: { fill: 'white', fontSize: 50, padding: 200 } };
const dummyText = 'Lorem Ipsum Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium';


export const CommunityTapestry = React.createClass({
  mixins: [PureRenderMixin],
  render() {
    return (
      <div className={style.communityTapestry}>
      <Row>
        <div className={style.communityTapestryHeader}>
          Community Tapestry
        </div>
        </Row>
        <VictoryChart
          domain={{x: [0, 10], y: [-10, 10]}}
        >
          <VictoryBar
            labelComponent={
              <VictoryTooltip
                cornerRadius={(d) => d.x > 6 ? 0 : 20}
                pointerLength={(d) => d.y > 0 ? 5 : 20}
                flyoutStyle={{
                  stroke:  "black"
                }}              />
            }
            data={[
              {x: 2, y: 5, label: "right-side-up"},
              {x: 4, y: -6, label: "upside-down"},
              {x: 6, y: 4, label: "tiny"},
              {x: 8, y: -5, label: "or a little \n BIGGER"},
              {x: 10, y: 7, label: "automatically"}
            ]}
            style={{
              data: {fill: "tomato"}
            }}
          /> 
        </VictoryChart>
          <VictoryPie
    padding={150}
    data={[
      {x: "Cat", y: 62},
      {x: "Dog", y: 91},
      {x: "Fish", y: 55},
      {x: "Bird", y: 55},
    ]}
    events={[{
      target: "data",
      eventHandlers: {
        onClick: () => {
          return [
            {
              mutation: (props) => {
                return {
                  style: merge({}, props.style, {fill: "orange"})
                };
              }
            }
          ];
        }
      }
    }]}  />
        
          <div className={style.pieChartContainer}>          
            <VictoryPie
             padding={150}
              labelComponent={<VictoryTooltip
                height={50}
                flyoutStyle={{
                  stroke: "tomato" }} />}
              
              style={labelStyle}
              data={data}
              colorScale={colorScale}              
            />
          </div>
          
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
