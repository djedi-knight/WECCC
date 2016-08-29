import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { Checkbox, FontIcon } from 'react-toolbox';
import { Row, Col } from 'react-flexbox-grid';
import style from './style';
import { VictoryChart, VictoryAxis, VictoryTheme, VictoryLine } from 'victory/dist/victory';
import data from './highRisk.json';
import {Button} from 'react-toolbox/lib/button';

const lowRisk = [
  {x: 0, y: 150},
  {x: 1, y: 125},
  {x: 3, y: 195},
  {x: 4, y: 130}
];

const mediumRisk = [
  {x: 0, y: 115},
  {x: 2, y: 132},
  {x: 4, y: 200},
  {x: 4, y: 155}
];

const highRisk = [
  {x: 0, y: 180},
  {x: 1, y: 132},
  {x: 3, y: 150},
  {x: 4, y: 120}
];
// const dataSet(){
//   return {data};
// };

const dummyText = 'Adverse drug effects are defined by Lorem Ipsum Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium';

export default React.createClass({
  mixins: [PureRenderMixin],
  getInitialState() {
    return { check1: false, check2: false, check3: false, data: 0 };
  },
  
  handleChart(){
    this.setState({data: lowRisk});
  },

  handleChange(field, value) {
    this.setState({ field, [field]: value});
  },

  render() {
    return (
      <div className={style.listBoxModalView}>
        <Row className={style.header}>
          <div className={style.title}>
            Safety Events: Adverse Drug Effects
          </div>
        </Row>
        <Row className={style.body}>
          <Col className={style.main} xs={9}>
            <Row className={style.changeOverTimeSection}>
              <div className={style.subtitle}>
                Change Over Time
                <FontIcon className={style.subtitleIcon} value="trending_up" />
              </div>
              {/* TODO: replace image tag with graphical component  */}
              <div style={{width:'100%'}} >
                <VictoryChart domainPadding={20} >
                  <VictoryAxis />
                  <VictoryAxis dependentAxis />
                  
                  <VictoryLine
                    data={mediumRisk}
                    x={"x"}
                    y={"y"} 
                    label="Medium Risk"
                    style={{
                      data: {
                        stroke: "#0AC2EA",
                        strokeWidth: 3
                      },
                      labels: {fontSize: 10}
                    }} 
                  />
                  <VictoryLine
                    data={highRisk}
                    x={"x"}
                    y={"y"}  
                    label="High Risk"
                    style={{
                      data: {
                        stroke: "#0A4EEA",
                        strokeWidth: 3
                      },
                      labels: {fontSize: 10}
                    }}
                  />
                </VictoryChart> 
              </div>
            </Row>
            <Row className={style.peerComparisonSection}>
              <div className={style.subtitle}>
                Peer Comparison
                <FontIcon className={style.subtitleIcon} value="person" />
              </div>
              <Button label='Peer High Risk' onClick={this.handleChart}  />
              <Checkbox checked={this.state.check1} label="- - High Risk" onChange={this.handleChange.bind(this, 'check1')} />
              <Checkbox checked={this.state.check2} label="- - Medium Risk" onChange={this.handleChange.bind(this, 'check2')} />
              <Checkbox checked={this.state.check3} label="- - Low Risk" onChange={this.handleChange.bind(this, 'check3')} />
              <div style={{ border: '1px solid gray', borderStyle: 'solid hidden hidden hidden' }}>
                <p style={{ background: '#F2F7FA', color: '#110b31', margin: '0px', padding: '12px' }}>
                  {dummyText}
                </p>
              </div>
            </Row>
          </Col>
          <Col className={style.sidebar} xs={3}>
            <div style={{ border: '1px solid gray', width: '100%', float: 'right', height: '508px', background: '#FADEDE' }}>
              <div style={{ background: '#F00', margin: '0px' }}>
                <FontIcon style={{ color: '#FFF', padding: '5px' }} value="warning" />
              </div>
              <p style={{ padding: '2px' }}> There is an indication that your High Risk score is lower than the peer score.</p>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
});


// <VictoryLine
//    padding={60}
//    style={{
//      data: {stroke: "red", strokeWidth: 9},
//      labels: {fontSize: 15}
//    }}
//    interpolation={"linear"}
//    data={[
//      {x: 0, y: 1},
//      {x: 1, y: 3},
//      {x: 2, y: 2},      
//      {x: 3, y: 4},
//      {x: 4, y: 3},
//      {x: 5, y: 5}
//    ]}
//    events={[{
//     target: "data",
//     eventHandlers: {
//       onClick: () => {
//         return [
//           {
//             mutation: (props) => {
//               const { style } = props;
//               return  style.stroke === "orange" ?
//                 null :
//                 {
//                   style: merge(
//                     {}, style, {stroke: "orange"}
//                   )
//                 };
//             }
//           }, {
//             target: "labels",
//             mutation: () => {
//               return {text: "WOW"};
//             }
//           }
//         ];
//       }
//     }
//   }]}
//  />