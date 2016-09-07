import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions/action_creators';
import { Checkbox, FontIcon, RadioButton, RadioGroup } from 'react-toolbox';
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
export const ListBoxModalChartSubgroups = React.createClass({
  mixins: [PureRenderMixin],
  render() {
    return (
      <div>
        <VictoryLine
          data= {peer}
          x={"x"}
          y={"y"}
          label="peer Risk"
          style={{
            data: {
              stroke: '#FF0000',
              strokeWidth: 3
            },
            labels: { fontSize: 10 }
          }}
        /> 
      </div>
    );
  }
});
export const ListBoxModalChart = React.createClass({
  mixins: [PureRenderMixin],
   getInitialState() {
    return { value: 'mediumRisk' };
  },
  handleChange(value) {
    this.setState({ value });
  },
    
  render() {
    return (
       <div style={{ width: '50%', margin: 'auto' }}>
        <RadioGroup name="comic" value={this.state.value} onChange={this.handleChange}>
          <RadioButton label="High Risk" value="highRisk" />
          <RadioButton label="Medium Risk" value="mediumRisk" />
          <RadioButton label="Low Risk" value="lowRisk" />
        </RadioGroup>
        {this.state.value === 'lowRisk' ? <ListBoxModalChartSubgroups /> : null}
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
                        stroke: '#0AC2EA',
                        strokeWidth: 3
                      },
                      labels: { fontSize: 10 }
                    }}
                  />
                  <VictoryLine
                    data={highRisk}
                    x={"x"}
                    y={"y"}
                    label="High Risk"
                    style={{
                      data: {
                        stroke: '#0A4EEA',
                        strokeWidth: 3
                      },
                      labels: { fontSize: 10 }
                    }}
                  />
                  <VictoryLine
                    data={lowRisk}
                    x={"x"}
                    y={"y"}
                    label="Low Risk"
                    style={{
                      data: {
                        stroke: '#12F5E4',
                        strokeWidth: 3
                      },
                      labels: { fontSize: 10 }
                    }}
                  />
                </VictoryChart>
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

export const ListBoxModalChartContainer = connect(
  mapStateToProps,
  actionCreators
)(ListBoxModalChart);
