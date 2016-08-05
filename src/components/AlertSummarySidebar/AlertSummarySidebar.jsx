import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { Card, CardText } from 'react-toolbox/lib/card';
import Button from 'react-toolbox/lib/button';

export default React.createClass({
  mixins: [PureRenderMixin],
  render() {
    return (
      <div className="AlartSummarySidebar" >
        <Card style={{ width: '320px',border: '5px solid #EBE8E8'}}>
          <h3 style={{ background:'gray', margin:'0px', padding:"25px"}}>     </h3>
          <CardText>
            <div >
                <p style={{ border: 'left 6px solid red;'}}> This summary provides an overview of key areas of improvement.
                 Explore the information in these sections to discover other potential opportunities for success.
                </p>
                <hr/>
                <Button style={{ padding:"2.5px" , background:'#ABA7A7'}} label="DOWNLOAD OVERVIEW" />

            </div>

          </CardText>
        </Card>
      </div>
    );
  }
});