import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { Checkbox, Button, FontIcon, RadioButton, RadioGroup } from 'react-toolbox';
import { VictoryChart, VictoryAxis, VictoryLine } from 'victory/dist/victory';
import data from './data.json';

const lowRisk = [
  { x: 0, y: 150 },
  { x: 1, y: 125 },
  { x: 3, y: 195 },
  { x: 4, y: 130 }
];

const mediumRisk = [
  { x: 0, y: 115 },
  { x: 2, y: 132 },
  { x: 4, y: 200 },
  { x: 4, y: 155 }
];

const highRisk = [
  { x: 0, y: 180 },
  { x: 1, y: 132 },
  { x: 3, y: 150 },
  { x: 4, y: 120 }
];
const peer =  [
  { x: 1, y: 100 },
  { x: 2, y: 140 },
  { x: 3, y: 200 },
  { x: 4, y: 150 }
  ];

export const ListBoxModalChart = React.createClass({
  mixins: [PureRenderMixin],
   getInitialState() {
    return { data : lowRisk };
  },
  handleChange() {
    this.setState({ data: highRisk });
  },
    
  render() {
    return (
       <div style={{ width: '50%', margin: 'auto' }}>
       <VictoryChart domainPadding={20} >
                  <VictoryAxis />
                  <VictoryAxis dependentAxis />
                  <VictoryLine
                    data={this.getInitialState()}
                    x={"x"}
                    y={"y"}
                    label="Medium Risk"
                    style={{
                      data: {
                        stroke: '#0AC2EA',
                        strokeWidth: 3
                      },
                      labels: { fontSize: 10 }
                    }}
                  />
                  
                </VictoryChart>
       <Button label='Draw Chart' accent onClick= {this.handleChange()}/>

       </div>
    );
  }
});