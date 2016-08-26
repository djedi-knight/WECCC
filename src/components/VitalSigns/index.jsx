import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions/action_creators';
import {
  AppBar,
  Card,
  CardText,
  FontIcon,
  RadioButton,
  RadioGroup
} from 'react-toolbox';
import style from './style';



export const VitalSignsSubgroups = React.createClass({
  mixins: [PureRenderMixin],
  render() {
    return (
        <div style={{ textAlign: 'center', width: '100%' }}>
            <div style={{ margin: '1px', width: '19%', textAlign: 'centre', display: 'inline-block' }}>
              <Card>
                <CardText>
                  <h3>Environment</h3>
                  <h2>B+</h2>
                </CardText>
              </Card>
            </div>
            <div style={{ margin: '1px', width: '19%', textAlign: 'centre', display: 'inline-block' }}>
              <Card>
                <CardText>
                  <h3>Safety</h3>
                  <h2>B+</h2>
                </CardText>
              </Card>
            </div>
            <div style={{ margin: '1px', width: '19%', textAlign: 'centre', display: 'inline-block' }}>
              <a href="#"> 
                <Card>
                  <CardText>
                    <h3>Arts & Culture</h3>
                    <h2>B+</h2>
                  </CardText>
                </Card>
              </a>
            </div>
            <div style={{ margin: '1px', width: '19%', textAlign: 'centre', display: 'inline-block' }}>
              <a href="#"> 
                <Card>
                  <CardText>
                    <h3>Transportation</h3>
                    <h2>B+</h2>
                  </CardText>
                </Card> 
              </a>
            </div>
            <div style={{ margin: '1px', width: '19%', textAlign: 'centre', display: 'inline-block' }}>
              <Card>
                <CardText>
                  <h3>Food Security</h3>
                  <h2>B+</h2>
                </CardText>
              </Card>
            </div>
          </div>
        );
      }
    });


export const VitalSigns = React.createClass({
  mixins: [PureRenderMixin],
  getInitialState() {
    return { value: 'vitalsigns' };
  },
  handleChange(value) {
    this.setState({ value }


      );
  },
  render() {
    return (
      <div className="VitalSigns">
        <br /><br /><br /><br /> <br /><br />
        <div style={{ border: '1px solid' }}>
          <AppBar><h1>Community Well-Being (General Population)</h1></AppBar>
          <div style={{ margin: '15px' }}>
  
            <RadioGroup name="comic" value={this.state.value} onChange={this.handleChange}>
              <RadioButton label="Vital Signs" value="vitalsigns"/> 
              <RadioButton label="Self-Reported" value="selfreported" />
              <RadioButton label="Neighbourhoods" value="neighbourhoods" />
            </RadioGroup>
            {this.state.value == "vitalsigns" ? <VitalSignsSubgroups /> : null}
            {this.state.value == "selfreported" ? <VitalSignsSubgroups /> : null}
            {this.state.value == "neighbourhoods" ? <VitalSignsSubgroups /> : null}
          </div>
          <br />
            <div style={{ textAlign: 'center', fontSize:"30px"}} className="vitalReportLink"> 
              <a href="#"> Vital-Signs Reports </a>
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
