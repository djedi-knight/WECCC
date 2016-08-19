import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions/action_creators';

import { RadioGroup, RadioButton } from 'react-toolbox/lib/radio';
import { Layout, Panel } from 'react-toolbox';
import FontIcon from 'react-toolbox/lib/font_icon';


export const VitalSigns = React.createClass({
  mixins: [PureRenderMixin],
  getInitialState(){
    return {value: null};
  },

   handleChange(value){
    this.setState({value});
  },
  
  render() {
    return (
      <div className="VitalSigns">
        <br /><br /><br /><br /> <br /><br />                   
        <div style={{width: '50%', border: '1px solid', margin: 'auto'}} >
          <h2 style={{textAlign:'center', margin: 'auto'}}>Community Well-Being (General Population)</h2>
          <br/>
          <div style={{ margin: '15px'}}>
            <RadioGroup name='comic' value={this.state.value} onChange={this.handleChange}>
              <RadioButton label='Vital Signs' value='vitalsigns'/>
              <RadioButton label='Self-Reported' value='selfreported'/>
              <RadioButton label='Neighbourhoods' value='neighbourhoods'/>
            </RadioGroup>
          </div>
          <div style={{textAlign:'center', width:'100%'}} >
            <div style={{margin:'1px', width:'19%', textAlign:'centre', border: '1px solid gray', display:'inline-block' }} >
              <h3>Environment</h3>
              <h2>B+</h2>
            </div>
            <div style={{margin:'1px', width:'19%', textAlign:'centre', border: '1px solid gray', display:'inline-block' }} >
              <h3>Safety</h3>
              <h2>D</h2>
            </div>
            <div style={{margin:'1px', width:'19%', textAlign:'centre', border: '1px solid gray', display:'inline-block' }} >
              <h3>Arts + Culture</h3>
              <h2>B</h2>
            </div>
            <div style={{margin:'1px', width:'19%', textAlign:'centre', border: '1px solid gray', display:'inline-block' }} >
              <h3>Transportation</h3>
              <h2>C-</h2>
            </div>
            <div style={{margin:'1px', width:'19%', textAlign:'centre', border: '1px solid gray', display:'inline-block' }} >
              <h3>Food Density</h3>
              <h2>B+</h2>
            </div>
          </div>
          <hr/>
          <h2 style={{textAlign:'left', margin: '15px'}}>Top Priorities</h2>
          <div style={{textAlign:'center', width:'100%'}}>
            <div style={{margin:'10px', width:'30%', textAlign:'centre', border: '1px solid gray', display:'inline-block' }} >
              <h3>Water Quality</h3>
              <h2>45%</h2>
              <hr/>
              <FontIcon value='trending_up' />
            </div>
             <div style={{margin:'10px', width:'30%', textAlign:'centre', border: '1px solid gray', display:'inline-block' }} >
              <h3>Air Quality</h3>
              <h2>12%</h2>
              <hr/>
              <FontIcon value='trending_down' />
            </div>
            <div style={{margin:'10px', width:'30%', textAlign:'centre', border: '1px solid gray', display:'inline-block' }} >
              <h3>Habitats</h3>
              <h2>35%</h2>
              <hr/>
              <FontIcon value='trending_up' />
            </div>
          </div>
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

export const VitalSignsContainer = connect(
  mapStateToProps,
  actionCreators
)(VitalSigns);
