import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions/action_creators';
import { FontIcon, Table } from 'react-toolbox';
import style from './style';
import { Row, Col } from 'react-flexbox-grid';
import data from './data.json';

const ProgressTrackerTable = {
  INDICATOR: { type: String },
  GOAL: { type: String },
  BASELINE: { type: String },
  CHANGE: {type: String},
  TREND: {type: String},
  COLOURCODE: { type: Number},
};

/*
const templet = [
  { INDICATOR: <b>Income </b>, GOAL: '5%', BASELINE: 'A', CHANGE: '-2%', TREND: <FontIcon value="trending_down"/>, COLOURCODE: <div style={{color:'red'}}><FontIcon value="warning" /> </div> },
  { INDICATOR: <a href="#">Age</a>, GOAL: '21%', BASELINE: 'A',CHANGE: '1%',TREND: <FontIcon value="trending_up"/>, COLOURCODE: <div style={{color:'#CBCB1B'}}><FontIcon value="star" /> </div>  },
  { INDICATOR: <b>Education</b> , GOAL: '--', BASELINE: '--',TREND: <FontIcon value="trending_up"/>, COLOURCODE: <div style={{color:'green'}}><FontIcon value="check" /> </div> },
  { INDICATOR: <b>Air Pollution</b> , GOAL: '--', BASELINE: '--', COLOURCODE: <div style={{color:'blue'}}><FontIcon value="lens" /> </div> },
  { INDICATOR: <b>Climate</b> , GOAL: '--', BASELINE: '--'},
  { INDICATOR: <b>Life Expectancy</b> , GOAL: '--', BASELINE: '--'},
];
*/


export const ProgressTracker = React.createClass({
  mixins: [PureRenderMixin],
  getInitialState() {
    return { data };
  },


  render() {
    return (

      <div className={style.progressTracker}>  
          <div className={style.progressTrackerHeader}>
              <h2>Progress Tracker </h2>
          </div>

          <div className={style.progressTrackerTable}>
            <Table theme={style} selectable={false} model={ProgressTrackerTable} source={this.state.data.tableData} />
          </div>
          <div> 
              <Row className={style.tableHeader}>
                      <Col xs={2} >INDICATOR</Col>
                      <Col xs={2} >GOAL</Col>
                      <Col xs={2}>BASELINE</Col>
                      <Col xs={2}>CHANGE</Col>
                      <Col xs={2}>TREND</Col>
                      <Col xs={2}>COLOURCODE</Col>
              </Row>
          </div>
                             
                    {this.state.data.tableData.map((tableData, i) =>
                      <div key={i} >        
                      <Row className={style.tableRow}> 
                        <Col xs={2}>    {tableData.INDICATOR}</Col>  
                        <Col xs={2}>   {tableData.GOAL}</Col>  
                        <Col xs={2}>   {tableData.BASELINE}</Col>  
                        <Col xs={2}>   {tableData.CHANGE}</Col>  
                        <Col xs={2}>   <FontIcon value={tableData.TREND}/>  </Col>                      
                        <Col xs={2}>   <FontIcon style={{color: tableData.COLOURCODE}} value="lens" />  </Col>  
                      </Row>   
                      </div>
                      )}         
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

export const ProgressTrackerContainer = connect(
  mapStateToProps,
  actionCreators
)(ProgressTracker);