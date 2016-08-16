import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';


export default React.createClass({
  render() {
    return (
        <div>
            <Card style={{width:'500px'}}>
            <h2 style={{background: '#110b31', color: '#FFF', margin:'0px'}}>LIGHT CARE NEEDS GROUP</h2>
            <div style={{padding:'0px 12px 12px 12px'}}>
                <div style={{border: '1px solid grey', float:'left', width:'320px'}}>
                    <h4>Mostly stable.</h4>
                    <p style={{fontSize:'20px'}}>
                        Some limitations requiring support mostly without complicating factors.
                    </p>
                </div>
                <div style={{border: '1px solid grey', float:'left', width: '150px'}}>
                    <p>NUMBER OF PATIENTS</p>
                    <p>600 <br/>of 1,500</p>
                    
                </div>
                <div style={{border: '1px solid grey', float:'left', width: '100%'}}>
                <p></p>
                </div>
            </div>
            <a style={{margin: '20px'}} href='#'>Read more about AUA</a>            
            </Card>
            <br/>            
        </div>       
    );
  }
});






            // <div style={{border: '1px solid grey', padding: '10px'}}>
            //     <h6>Mostly stable.</h6>
            //     <p>
            //         Some limitations requiring support mostly without complicating factors.
            //     </p>
            //     <p>NUMBER OF PATIENTS</p>
            //     <p style={{float:'right'}} >600 OF 1,500</p>
            // </div>
            // <div>
            // <h6>
            //     RISK LEVEL BREAKDOWN
            // </h6>
            // <p>
            //     Patients are further categorized by their level of risk according to the InterRAI Assessment Urgency Algorithm(AUA).
            // </p>
            // <p>Box High Risk</p>
            // <p>Box Medium Risk</p>
            // <p>Box Low Risk</p>
            // </div>