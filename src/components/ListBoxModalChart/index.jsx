import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { Checkbox, Button, FontIcon, RadioButton, RadioGroup } from 'react-toolbox';
import { VictoryChart, VictoryAxis, VictoryLine } from 'victory/dist/victory';

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

export const peerComp = React.createClass({
  mixins: [PureRenderMixin],
  render(){
    return(
      <div>
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
            data={lowRisk}
            x={"x"}
            y={"y"}
            label="Low Risk"
            style={{
              data: {
                stroke: '#0A4EEA',
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
                stroke: '#12F5E4',
                strokeWidth: 3
              },
              labels: { fontSize: 10 }
            }}
          />
          <VictoryLine
            data={peer}
            x={"x"}
            y={"y"}
            label="Peer Risk"
            style={{
              data: {
                stroke: '#FF0000',
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

export default React.createClass({
  mixins: [PureRenderMixin],
  getInitialState() {
    return { check1: false, check2: false, check3: false };
  },
  handleChange(field, value) {
    this.setState({[field]: value });
  },
  getPeerComp(){
    return <VictoryLine/>
  },

  render() {
    return (
       <div style={{ width: '50%', margin: 'auto' }}>
        <VictoryChart domainPadding={20} >
          <VictoryAxis />
          <VictoryAxis dependentAxis />
          {this.state.check1 ?
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
        : null}
          <VictoryLine
            data={lowRisk}
            x={"x"}
            y={"y"}
            label="Low Risk"
            style={{
              data: {
                stroke: '#0A4EEA',
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
                stroke: '#12F5E4',
                strokeWidth: 3
              },
              labels: { fontSize: 10 }
            }}
          />
        </VictoryChart>
        <Button label='Draw Chart' accent onClick={ this.props.peerComp}/>

        <Checkbox checked={this.state.check1} name="HighRisk" label="- - High Risk" onChange={this.handleChange.bind(this, 'check1')} />
        <Checkbox checked={this.state.check2} label="- - Medium Risk" onChange={this.handleChange.bind(this, 'check2')} />
        <Checkbox checked={this.state.check3} label="- - Low Risk" onChange={this.handleChange.bind(this, 'check3')} />
      </div>
    );
  }
});
