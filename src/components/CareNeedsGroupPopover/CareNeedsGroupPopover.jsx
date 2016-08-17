import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';
import {PieChart} from 'react-d3';
//import { VictoryPie } from 'victory-pie';
var pieData = [
  {label: 'High Risk', value: 50.0},
  {label: 'Medium Risk', value: 35.0},
  {label: 'Low Risk', value: 20.0}
];
var legendItems = ['High Risk','Medium Risk','Low Risk'];

export default React.createClass({
  render() {
    return (
        <div style={{width:'30%'}}>            
            <h2 style={{background: '#110b31', color: '#FFF', margin:'0px'}}>LIGHT CARE NEEDS GROUP</h2>
            <div style={{padding:'0px 12px 12px 12px'}}>
                <div style={{height: '165px', border: '1px solid grey', float:'left', width:'70%', borderStyle: 'hidden solid hidden solid'}}>
                    <h4>Mostly stable.</h4>
                    <p style={{fontSize:'20px'}}>
                        Some limitations requiring support mostly without complicating factors.
                    </p>
                </div>
                <div style={{border: '1px solid grey', float:'right', padding:'1px', width: '25%', borderStyle: 'hidden solid hidden hidden'}}>
                    <p style={{fontSize:'20px'}}>NUMBER OF PATIENTS</p>                    
                    <p style={{textAlign: 'right'}}>600 <br/><small>of 1,500</small></p>              
                </div>

                <div style={{border: '1px solid grey', float:'left', padding:'1px'}}>
                   
                    <div style={{float:'left', padding:'5px'}}>                        
                        <h4>RISK LEVEL BREAKDOWN </h4>
                        <p>
                            Patients are further categorized by their level of risk according to the InterRAI Assessment Urgency Algorithm (AUA).
                        </p>                                                
                    </div> 
                     <div style={{float:'right'}}>
                        <PieChart
                          legend={legendItems}
                          data={pieData}
                          width={200}
                          height={200}
                          radius={100}                          
                          showInnerLabels= {false}
                          showOuterLabels = {false}
                        />

                    </div>                   
                </div>
            </div>
           {/* <a style={{margin: '20px'}} href='#'>Read more about AUA</a> */  }         
            
            <br/>            
        </div>       
    );
  }
});

// <p>Legend</p>
//                         <p>Box High Risk</p>
//                         <p>Box Medium Risk</p>
//                         <p>Box Low Risk</p>