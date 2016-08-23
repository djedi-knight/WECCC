import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions/action_creators';

import { RadioGroup, RadioButton } from 'react-toolbox/lib/radio';
import FontIcon from 'react-toolbox/lib/font_icon';
import AppBar from 'react-toolbox/lib/app_bar';
import { Card, CardText} from 'react-toolbox';



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
        <div style={{ border: '1px solid'}} >
          <AppBar><h1>Community Well-Being (General Population)</h1></AppBar>        
          <div style={{ margin: '15px'}}>
            <RadioGroup name='comic' value={this.state.value} onChange={this.handleChange}>
              <RadioButton label='Vital Signs' value='vitalsigns'/>
              <RadioButton label='Self-Reported' value='selfreported'/>
              <RadioButton label='Neighbourhoods' value='neighbourhoods'/>
            </RadioGroup>
          </div>

          <div style={{textAlign:'center', width:'100%'}} >
            <div style={{margin:'1px', width:'19%', textAlign:'centre', display:'inline-block' }} >
              <Card>
                <CardText>
                  <h3>Environment</h3>
                  <h2> B+</h2>
                </CardText>              
              </Card>
            </div>
            <div style={{margin:'1px', width:'19%', textAlign:'centre', display:'inline-block' }} >
              <Card>
                <CardText>
                  <h3>Safety</h3>
                  <h2> B+</h2>
                </CardText>              
              </Card>
            </div>
            <div style={{margin:'1px', width:'19%', textAlign:'centre', display:'inline-block' }} >
              <Card>
                <CardText>
                  <h3>Arts & Culture</h3>
                  <h2> B+</h2>
                </CardText>              
              </Card>
            </div>
            <div style={{margin:'1px', width:'19%', textAlign:'centre',  display:'inline-block' }} >
              <Card>
                <CardText>
                  <h3>Transportation</h3>
                  <h2> B+</h2>
                </CardText>              
              </Card>
            </div>
            <div style={{margin:'1px', width:'19%', textAlign:'centre',  display:'inline-block' }} >
              <Card>
                <CardText>
                  <h3>Food Security</h3>
                  <h2> B+</h2>
                </CardText>              
              </Card>
            </div>
          </div>
          <br/>
          <hr/>
          <h2 style={{textAlign:'left', margin: '20px'}}>Top Priorities</h2>
          <div style={{textAlign:'center', width:'100%'}}>
            <div style={{margin:'20px', width:'20%', textAlign:'centre',  display:'inline-block' }} >
              <Card>
                <CardText>
                  <h3>Water Quality</h3>
                  <h2>45%</h2>
                  <hr/>
                  <FontIcon value='trending_up' />
                </CardText>              
              </Card>

            </div>
             <div style={{margin:'20px', width:'20%', textAlign:'centre', display:'inline-block' }} >
              <Card>
                <CardText>
                  <h3>Air Quality</h3>
                  <h2>12%</h2>
                  <hr/>
                  <FontIcon value='trending_down' />
                </CardText>              
              </Card>

            </div>
            <div style={{margin:'20px', width:'20%', textAlign:'centre', display:'inline-block' }} >
              <Card>
                <CardText>
                  <h3>Habitats</h3>
                  <h2>35%</h2>
                  <hr/>
                  <FontIcon value='trending_up' />
                </CardText>              
              </Card>
            </div>
          </div>
          <br/>
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
