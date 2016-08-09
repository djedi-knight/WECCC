import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { Card, CardText } from 'react-toolbox/lib/card';
import Button from 'react-toolbox/lib/button';


export default React.createClass({
  mixins: [PureRenderMixin],
  render() {
    return (
      <div className="AlartSummarySidebar">
        <Card style={{ width: '25%', height: '550px', border: '1px solid #EBE8E8', float: 'left' }}>
          <span style={{ background: 'gray', margin: '0px', padding: '25px'}} />
          <CardText>
            <div>
              <p >This summary provides an overview of key areas of improvement.
                Explore the information in these sections to discover other potential
                opportunities for success.
              </p>
              <hr />
              <Button style={{ padding: '2.5px', background: '#ABA7A7' }} label="DOWNLOAD OVERVIEW" href="#/download" />
            </div>
          </CardText>
        </Card>
      </div>
    );
  }
});
