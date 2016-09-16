import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions/action_creators';
import { Row, Col } from 'react-flexbox-grid';
import { Dropdown, Button, RadioGroup, RadioButton } from 'react-toolbox';
import ScoreBoxSimple from '../ScoreBoxSimple';
import data from './data.json';
import style from './style';

export const InteractiveSharedOutcomes = React.createClass({
  mixins: [PureRenderMixin],
  getInitialState(){
    return{ 
      data, 
      value: 'disaggregate', 
      value2: 'levelOfDependency', 
      value3: 'gender', 
      value4: 'sexualOrientation', 
      value5: 'isolation',
      radio : 'allPopulation'
    };
  },
  handleChange(value){
    this.setState({value: value});
  },
  handleChange2(value){
    this.setState({value2: value});
  },
  handleChange3(value){
    this.setState({value3: value});
  },
  handleChange4(value){
    this.setState({value4: value});
  },
  handleChange5(value){
    this.setState({value5: value});
  },
  handleRadioButton(value){
    this.setState({radio: value});
  },
  render() {
    return (
      <div className={style.InteractiveSharedOutcomes}>
        <Row>
          <Col xs= {3} >
            <Dropdown              
              onChange={this.handleChange}
              source={this.state.data.disaggregate}
              value={this.state.value}
            />
            <Dropdown              
              onChange={this.handleChange2}
              source={this.state.data.dependency}
              value={this.state.value2}
            />
            <Dropdown              
              onChange={this.handleChange3}
              source={this.state.data.gender}
              value={this.state.value3}
            />
            <Dropdown              
              onChange={this.handleChange4}
              source={this.state.data.orientation}
              value={this.state.value4}
            />
            <Dropdown              
              onChange={this.handleChange5}
              source={this.state.data.isolation}
              value={this.state.value5}
            />
            <Button label='Ok' raised primary/>
          </Col>
          <Col xs= {6}> 
          <div>Equity Gap<br/><br/>
          <RadioGroup name='equity' value={this.state.radio} onChange={this.handleRadioButton}>
            <RadioButton label='All Population' value='allPopulation'/>
            <RadioButton label='Lowest Quarter' value='lowestQuarter' />
          </RadioGroup>
          </div>         
            <div className={style.InteractiveSharedOutcomesHeader}>Quality of Life</div>
            <Row>
              <Col xs={6}><ScoreBoxSimple title={"Grade"} score={"A+"} trend={"up"}/></Col>
              <Col xs={6}><ScoreBoxSimple title={"Equity Gap"} score={"-2.5"} trend={"down"}/></Col>
            </Row>
            <br/>          
            <div className={style.InteractiveSharedOutcomesHeader}>Burden</div>
            <Row>
              <Col xs={6}><ScoreBoxSimple title={"Grade"} score={"D"} trend={"down"}/></Col>
              <Col xs={6}><ScoreBoxSimple title={"Equity Gap"} score={"-4"} trend={"down"}/></Col>
            </Row>
            <br/>
            <div className={style.InteractiveSharedOutcomesHeader}>Reported Health</div>
            <Row>
              <Col xs={6}><ScoreBoxSimple title={"Grade"} score={"C"} trend={"down"}/></Col>
              <Col xs={6}><ScoreBoxSimple title={"Equity Gap"} score={"-10"} trend={"down"}/></Col>
            </Row>           
          </Col>
          <Col xs= {3}>  
          <br/>        
            {this.state.data.items.map((item, i) =>
            <div key={i}>
              {item}
              <br />
              <hr />
            </div>
            )}
          </Col>
        </Row>         
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

export const InteractiveSharedOutcomesContainer = connect(
  mapStateToProps,
  actionCreators
)(InteractiveSharedOutcomes);
