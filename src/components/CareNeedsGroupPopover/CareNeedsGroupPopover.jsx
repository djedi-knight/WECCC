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

export default React.createClass({
    render() {
        return (
            <div style={{background: '#fff',}}>            
                <h2 style={{background: '#110b31', color: '#FFF', margin:'0px'}}>LIGHT CARE NEEDS GROUP</h2>
                <div style={{position: 'relative', color: '#000', padding:'0px', border: '1px solid #CCC', borderStyle: 'hidden solid solid solid'}}>
                    <div style={{ margin: '0 40%  0 0 ', width: '58%',padding:'0px'}}>
                        <h3>Mostly stable.</h3>
                        <p style={{fontSize:'15px'}}>
                            Some limitations requiring support mostly without complicating factors.
                        </p>
                    </div>
                    <div style={{border: '1px #CCC', position: 'absolute', top: '0', bottom: '0', right: '0', width: '40%', borderStyle: 'hidden hidden hidden solid'}}>
                        <h3>NUMBER OF PATIENTS</h3>                        
                        <b style={{float:'right'}}>600</b> 
                        <br/>
                        <small style={{float:'right'}}>of 1,500</small>                        
                    </div>
                </div>
                <div style={{position: 'relative', color: '#000', padding:'0px', border: '1px solid #CCC', borderStyle: 'hidden solid solid solid'}}>
                    <div style={{ margin: '0 40%  0 0 ', width: '58%',padding:'0px'}}>
                        <h4>RISK LEVEL BREAKDOWN </h4>
                        <p >
                            Patients are further categorized by their level of risk according to the InterRAI Assessment Urgency Algorithm (AUA).
                        </p> 
                    </div>
                    <div style={{position: 'absolute', top: '0', bottom: '0', right: '0', width: '40%'}}>
                        <PieChart
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
        );
    }
});

// <div style={{padding:'0px 12px 12px 12px'}}>
//                 <div style={{ border: '1px solid gray', float:'left', padding:'3px',width:'60%', borderStyle: 'hidden solid hidden solid'}}>
//                     <h3>Mostly stable.</h3>
//                     <p style={{fontSize:'15px'}}>
//                         Some limitations requiring support mostly without complicating factors.
//                     </p>
//                 </div>
//                 <div style={{border: '1px solid grey', float:'right',  width: '35%', borderStyle: 'hidden solid hidden hidden'}}>
//                     <p style={{fontSize:'20px'}}>NUMBER OF PATIENTS</p>                    
//                     <p style={{textAlign: 'right', fontSize:'20px'}}><b>600</b> <br/><small>of 1,500</small></p>              
//                 </div>

//                 <div style={{border: '1px solid grey', float:'left', padding:'1px'}}>
                   
//                     <div style={{float:'left', padding:'5px'}}>                        
//                         <h4>RISK LEVEL BREAKDOWN </h4>
//                         <p>
//                             Patients are further categorized by their level of risk according to the InterRAI Assessment Urgency Algorithm (AUA).
//                         </p>                                                
//                     </div> 
//                      <div style={{float:'left'}}>
//                         <PieChart
//                           data={pieData}
//                           width={100}
//                           height={100}
//                           radius={50}                          
//                           showInnerLabels= {false}
//                           showOuterLabels = {false}
//                         />
//                     </div>                   
//                 </div>
//             </div>           
//            <a style={{margin: '20px'}} href='#'>Read more about AUA</a>