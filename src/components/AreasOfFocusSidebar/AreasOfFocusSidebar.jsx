import React from 'react';
<<<<<<< HEAD
import { Card, CardText } from 'react-toolbox';
import ListBox from '../ListBox/ListBox';
import data from '../../../test/data/AreasOfFocusSidebar.json';
=======
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { Card, CardText } from 'react-toolbox/lib/card';
import {Button,IconButton,FontIcon} from 'react-toolbox/lib/button';

>>>>>>> f753b0a2335b687da00cba0bb89a576ff1d2b2b0

export default React.createClass({
  getInitialState() {
    return { data };
  },
  render() {
    console.log(this.state.data.items);
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
            {this.state.data.items.map(item =>
              <div><label><input type="checkbox" />{item}</label><br /><hr /></div>
            )}
          </CardText>
        </Card>
      </div>
    );
  }
});
