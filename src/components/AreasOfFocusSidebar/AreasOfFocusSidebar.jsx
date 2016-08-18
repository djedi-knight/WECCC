import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { Card, CardText } from 'react-toolbox';
import ListBox from '../ListBox/ListBox';
import data from '../../../test/data/AreasOfFocusSidebar.json';

export default React.createClass({
  mixins: [PureRenderMixin],
  getInitialState() {
    return { data };
  },
  render() {
    return (
      <div className="AreasOfFocusSidebar" >
        <Card style={{ width: '74%', height: '500px', border: '2px solid gray', float: 'left' }}>
          <CardText>
            <ListBox />
          </CardText>
        </Card>
        <Card style={{ width: '25%', height: '500px', background: '#EBE8E8', border: '1px solid gray', float: 'left' }}>
          <h3 style={{ background: '#4980c7', margin: '0px', padding: '12px' }}>THINGS TO CONSIDER</h3>
          <CardText>
            {this.state.data.items.map((item, i) =>
              <div key={i}><label><input type="checkbox" />{item}</label><br /><hr /></div>
            )}
          </CardText>
        </Card>
      </div>
    );
  }
});
