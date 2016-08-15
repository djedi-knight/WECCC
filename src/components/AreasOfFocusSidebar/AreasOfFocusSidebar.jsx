import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { Card, CardText } from 'react-toolbox/lib/card';
import {Button, IconButton} from 'react-toolbox/lib/button';
import Dialog from 'react-toolbox/lib/dialog';
import ListBoxModalView from '../ListBoxModalView/ListBoxModalView.jsx';
import theme from '../../theme/default';
import AppBar from 'react-toolbox/lib/app_bar';


export default React.createClass({
  mixins: [PureRenderMixin],
  getInitialState() {
    return { active: false};
  },   

  handleToggle () {
    this.setState({active: !this.state.active});
  },

  

  render() {
    const actions = [{ label: "OK", onClick: this.handleToggle }];
    return (
      <div className="AreasOfFocusSidebar" >
        <Card style={{ width: '74%', height: '500px', border: '2px solid gray', float: 'left' }}>
          <CardText>
            <p> Areas of Focus Section will go here<br/>
                 <Button label='List Box Modal View' onClick={this.handleToggle} />
                  <Dialog 
                    actions={this.actions}
                    active={this.state.active}
                    onEscKeyDown={this.handleToggle}
                    onOverlayClick={this.handleToggle}
                    >
                    <ListBoxModalView/>
                  </Dialog>
        </p>
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
