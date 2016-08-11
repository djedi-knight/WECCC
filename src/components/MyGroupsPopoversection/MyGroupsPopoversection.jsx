import React from 'react';
import { Card, FontIcon, Link, CardTitle,CardText } from 'react-toolbox';
import theme from '../../theme/default';
import PureRenderMixin from 'react-addons-pure-render-mixin';


export default React.createClass({
  render() {
    return (
        <Card style={{ width:'', height: '400px', background: '#EBE8E8', border: '1px solid gray', color:'#fff' }}>
            <h3 style={{ background: '#4980c7', margin: '0px', padding: '12px' }}>OVERVIEWS</h3>
                <p  style={{height:'13px', color:'#000',margin:'5px' }} > At my agency I manage:</p>
                    <div className={theme.Overview}>
                        <Card style={{ width: '100px', height: '100px', border: '2px solid gray', margin:'10px',float:'left' }}>
                            <h1> PROVIDERS </h1>
                            <h1> 30</h1>
                        </Card>

                        <Card style={{ width: '100px', height: '100px', border: '2px solid gray', margin:'10px',float:'left' }}>
                            <h1> PATIENTS </h1>
                            <h1> 2,000</h1>
                        </Card>

                        <Card style={{ width: 'auto', height: '100px', border: '2px solid gray', margin:'10px' }}>
                            <h1> LONG-TERM CARE NEEDS PATIENTS </h1>
                            <h1> 1,500</h1>
                        </Card>
                    </div>

            <h3 style={{ background: '#4980c7', margin: '0px', padding: '12px' }}>PEER COMPARISON</h3>
                <p  style={{height:'13px', color:'#000',margin:'5px' }} > Your 4 peer agencies manage:</p>
                    <div className={theme.Overview}>
                        <Card style={{ width: '100px', height: '100px', border: '2px solid gray', margin:'10px',float:'left' }}>
                            <h1> PROVIDERS </h1>
                            <h1> 205</h1>
                        </Card>

                        <Card style={{ width: '100px', height: '100px', border: '2px solid gray', margin:'10px',float:'left' }}>
                            <h1> PATIENTS </h1>
                            <h1> 1,843</h1>
                        </Card>

                        <Card style={{ width: 'auto', height: '100px', border: '2px solid gray', margin:'10px' }}>
                            <h1> LONG-TERM CARE NEEDS PATIENTS </h1>
                            <h1> 800</h1>
                        </Card>
                    </div>


      </Card>
    );
  }
});
