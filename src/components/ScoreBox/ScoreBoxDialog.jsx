import Dialog from 'react-toolbox/lib/dialog';
import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { Button } from 'react-toolbox/lib/button';
import ScoreBoxSlider from './ScoreBoxSlider';
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';

export default React.createClass({
  mixins: [PureRenderMixin],

  getInitialState() {
    return { active: false };
  },

  handleToggle() {
    this.setState({active: !this.state.active})
  },

  render () {
    return (
      <div>
      <Button label ='4/10' raised accent ripple onClick={this.handleToggle} />
       <Card style={{width: '50px'}, {height: '50px'}}>
    <CardTitle
      title="Patient Experience"
      avatar ="https://s31.postimg.org/ihdkqz7ez/Information.png"
    />
  </Card>
        <Dialog
          actions={this.actions}
          active={this.state.active}
          onEscKeyDown={this.handleToggle}
          onOverlayClick={this.handleToggle}
          title='Readmissions'
        >
        <ScoreBoxSlider />
        <Button label ='Submit' onClick={this.handleToggle} />
        <Button label ='Cancel' onClick={this.handleToggle} />
          <p>The Divert scale shows a comparison between your scores and those of your peers.(click away from this box to go back to main page)</p>
        </Dialog>
      </div>
    );
  }
 });
