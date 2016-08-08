import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { Card, CardText } from 'react-toolbox/lib/card';

export default React.createClass({
  mixins: [PureRenderMixin],
  render() {
    return (
      <div className="AreasOfFocusSidebar" >
        <Card style={{ width: '74%', height: '500px', border: '2px solid gray', float: 'left' }}>
          <CardText>
            <p> Areas of Focus Section will go here</p>
          </CardText>
        </Card>
        <Card style={{ width: '25%', height: '500px', background: '#EBE8E8', border: '1px solid gray', float: 'left' }}>
          <h3 style={{ background: '#4980c7', margin: '0px', padding: '12px' }}>THINGS TO CONSIDER</h3>
          <CardText>
            <div>
              <label><input type="checkbox" />Does my organizationhave the conections and communciations it needs to engage others?</label><br /><hr />
              <label><input type="checkbox" />Is the distribution and outcomes of patients condistent with ourt organizational/HR strategies and in-house expertise?</label><br /><hr />
              <label><input type="checkbox" />Does my organization have the staff-wide training programs it needs to ensure we add value?</label><br /><hr />
            </div>
          </CardText>
        </Card>
      </div>
    );
  }
});
